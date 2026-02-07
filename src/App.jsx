import React, { useState, useEffect } from 'react';
import MainLayout from './layouts/MainLayout';
import DM from './pages/DM';
import { mockChats } from './components/chat/MessageList';
import './App.css';

function App() {
  const [chats, setChats] = useState(mockChats);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [showInfo, setShowInfo] = useState(false);
  const [showMediaGallery, setShowMediaGallery] = useState(false);

  // Menu and Modal states lifted for history integration
  const [showMenu, setShowMenu] = useState(false);
  const [contextMenu, setContextMenu] = useState(null);
  const [showAttachments, setShowAttachments] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [chatToDelete, setChatToDelete] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  // History management for mobile back button
  useEffect(() => {
    const handlePopState = () => {
      // Prioritize TOPMOST overlays (Modals) FIRST
      if (showDeleteModal) {
        setShowDeleteModal(false);
      } else if (contextMenu) {
        setContextMenu(null);
      } else if (showMenu) {
        setShowMenu(false);
      } else if (showAttachments) {
        setShowAttachments(false);
      } else if (showMediaGallery) {
        setShowMediaGallery(false);
      } else if (showInfo) {
        setShowInfo(false);
      } else if (selectedChatId) {
        setSelectedChatId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [showMediaGallery, showInfo, selectedChatId, showMenu, contextMenu, showAttachments, showDeleteModal]);

  // Effect to handle navigation state cleanup
  useEffect(() => {
    if (!selectedChatId) {
      setShowInfo(false);
      setShowMediaGallery(false);
      setShowAttachments(false);
    }
  }, [selectedChatId]);

  // Dynamic message history state
  const [messages, setMessages] = useState({
    1: [ // Sarah Miller
      { id: 1, text: "Hi there! Are we still on for the meeting tomorrow?", sender: 'them', time: '09:00 AM' },
      { id: 2, text: "Yes, definitely! 10 AM works for me.", sender: 'me', time: '09:05 AM' },
      { id: 3, text: "Perfect! Let's schedule a call for tomorrow.", sender: 'them', time: '09:06 AM' }
    ],
    2: [ // Marcus Chen
      { id: 1, text: "Hey there! I just finished the initial design concepts for the new mobile dashboard.", sender: 'them', time: '05:41 AM' },
      { id: 2, text: "That's awesome! Can't wait to see them. Are they uploaded to the shared folder yet?", sender: 'me', time: '05:45 AM' },
      { id: 3, text: "The new mockups are ready for review. I've sent you a link in your email as well.", sender: 'them', time: '10:02 AM' },
      { id: 4, type: 'file', fileName: 'Dashboard_v2_Final.fig', fileSize: '12.4 MB', sender: 'them', time: '10:02 AM' }
    ],
    3: [ // Emily Rodriguez
      { id: 1, text: "I've analyzed the crash logs you sent over.", sender: 'me', time: '1:30 PM' },
      { id: 2, text: "It seems to be a race condition in the auth module.", sender: 'me', time: '1:31 PM' },
      { id: 3, text: "Thanks! The bug fix works perfectly now.", sender: 'them', time: '3:45 PM' }
    ],
    4: [ // David Park
      { id: 1, text: "How is the new ad campaign performing?", sender: 'me', time: '11:20 AM' },
      { id: 2, text: "Campaign performance is looking great!", sender: 'them', time: '11:25 AM' },
      { id: 3, text: "CTR is up by 15% compared to last month.", sender: 'them', time: '11:26 AM' }
    ],
    5: [ // Lisa Thompson
      { id: 1, text: "Hi, do you have a minute to chat about the quarterly reviews?", sender: 'them', time: 'Yesterday' },
      { id: 2, text: "Sure, I'm free now.", sender: 'me', time: 'Yesterday' },
      { id: 3, text: "Your performance review is scheduled for Friday at 2 PM.", sender: 'them', time: 'Yesterday' }
    ],
    6: [ // James Wilson
      { id: 1, text: "Did we get the contract signed?", sender: 'me', time: 'Yesterday' },
      { id: 2, text: "Yes! We closed the deal with TechCorp!", sender: 'them', time: 'Yesterday' },
      { id: 3, text: "Great news! Great job team.", sender: 'me', time: 'Yesterday' }
    ]
  });

  // Apply dark mode class to body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const activeChat = chats.find(c => c.id === selectedChatId);

  const handleChatSelect = (id) => {
    if (id === selectedChatId) return;

    const wasInChat = !!selectedChatId;
    setSelectedChatId(id);
    setShowInfo(false);
    setShowMediaGallery(false);
    setShowAttachments(false);

    // Clear unread status when opening a chat
    setChats(prev => prev.map(chat =>
      chat.id === id
        ? { ...chat, unread: false, unreadCount: 0, hasUnreadDot: false }
        : chat
    ));

    // Push state only if we weren't already in a chat layer
    if (!wasInChat) {
      window.history.pushState({ type: 'chat' }, '');
    }
  };

  const handleToggleInfo = (val) => {
    if (val !== showInfo) {
      if (val) {
        setShowInfo(true);
        window.history.pushState({ type: 'info' }, '');
      } else {
        window.history.back();
      }
    }
  };

  const handleToggleMedia = (val) => {
    if (val !== showMediaGallery) {
      if (val) {
        setShowMediaGallery(true);
        window.history.pushState({ type: 'media' }, '');
      } else {
        window.history.back();
      }
    }
  };

  const handleCloseSidebar = () => {
    if (showMediaGallery) {
      window.history.go(-2);
    } else if (showInfo) {
      window.history.go(-1);
    }
  };

  const handleToggleMenu = (val) => {
    if (val !== showMenu) {
      if (val) {
        setShowMenu(true);
        window.history.pushState({ type: 'menu' }, '');
      } else {
        window.history.back();
      }
    }
  };

  const handleSetContextMenu = (val) => {
    if (val) {
      setContextMenu(val);
      window.history.pushState({ type: 'context-menu' }, '');
    } else if (contextMenu) {
      window.history.back();
    }
  };

  const handleToggleAttachments = (val) => {
    if (val !== showAttachments) {
      if (val) {
        setShowAttachments(true);
        window.history.pushState({ type: 'attachments' }, '');
      } else {
        window.history.back();
      }
    }
  };

  const handleMarkAllRead = () => {
    setChats(chats.map(chat => ({
      ...chat,
      unread: false,
      unreadCount: 0,
      hasUnreadDot: false
    })));
  };

  const handleMarkAsUnread = (chatId) => {
    setChats(chats.map(chat =>
      chat.id === chatId
        ? { ...chat, unread: true, hasUnreadDot: true }
        : chat
    ));
  };

  const handleDeleteChat = (chatId) => {
    setChats(chats.filter(chat => chat.id !== chatId));
    if (selectedChatId === chatId) {
      setSelectedChatId(null);
    }
  };

  const handleSendMessage = (chatId, text) => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newMessage = {
      id: Date.now(),
      text,
      sender: 'me',
      time: timeString
    };

    setMessages(prev => ({
      ...prev,
      [chatId]: [...(prev[chatId] || []), newMessage]
    }));

    // Update last message in chat list
    setChats(prev => prev.map(chat =>
      chat.id === chatId
        ? { ...chat, lastMessage: text, time: 'Just now' }
        : chat
    ));
  };

  const confirmDeleteGlobal = () => {
    if (chatToDelete) {
      handleDeleteChat(chatToDelete);
    }
    window.history.back();
    setChatToDelete(null);
  };

  const triggerDelete = (chatId) => {
    setChatToDelete(chatId);
    setShowDeleteModal(true);
    window.history.pushState({ type: 'modal' }, '');
  };

  const cancelDelete = () => {
    window.history.back();
    setChatToDelete(null);
  };

  return (
    <MainLayout
      onResetView={() => setSelectedChatId(null)}
      isDarkMode={isDarkMode}
      onToggleDarkMode={toggleDarkMode}
      hasActiveChat={!!selectedChatId}
    >
      <DM
        chats={chats}
        selectedChatId={selectedChatId}
        activeChat={activeChat}
        messages={messages}
        handleChatSelect={handleChatSelect}
        handleMarkAllRead={handleMarkAllRead}
        handleMarkAsUnread={handleMarkAsUnread}
        triggerDelete={triggerDelete}
        showMenu={showMenu}
        handleToggleMenu={handleToggleMenu}
        contextMenu={contextMenu}
        handleSetContextMenu={handleSetContextMenu}
        handleSendMessage={handleSendMessage}
        showInfo={showInfo}
        handleToggleInfo={handleToggleInfo}
        showMediaGallery={showMediaGallery}
        handleToggleMedia={handleToggleMedia}
        showAttachments={showAttachments}
        handleToggleAttachments={handleToggleAttachments}
        onCloseSidebar={handleCloseSidebar}
      />

      {/* Global Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="delete-modal-overlay" onClick={cancelDelete}>
          <div className="delete-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Delete this chat?</h3>
            <p>This action cannot be undone.</p>
            <div className="delete-modal-actions">
              <button className="btn-modal btn-cancel" onClick={cancelDelete}>Cancel</button>
              <button className="btn-modal btn-delete" onClick={confirmDeleteGlobal}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </MainLayout>
  );
}

export default App;
