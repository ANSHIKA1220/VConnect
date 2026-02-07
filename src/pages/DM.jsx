import React from 'react';
import MessageList from '../components/chat/MessageList';
import ChatWindow from '../components/chat/ChatWindow';
import ChatPlaceholder from '../components/chat/ChatPlaceholder';

const DM = ({
    chats,
    selectedChatId,
    activeChat,
    messages,
    handleChatSelect,
    handleMarkAllRead,
    handleMarkAsUnread,
    triggerDelete,
    showMenu,
    handleToggleMenu,
    contextMenu,
    handleSetContextMenu,
    handleSendMessage,
    showInfo,
    handleToggleInfo,
    showMediaGallery,
    handleToggleMedia,
    showAttachments,
    handleToggleAttachments,
    onCloseSidebar
}) => {
    return (
        <>
            <MessageList
                chats={chats}
                activeChatId={selectedChatId}
                onChatSelect={handleChatSelect}
                onMarkAllRead={handleMarkAllRead}
                onMarkAsUnread={handleMarkAsUnread}
                onDeleteChat={triggerDelete}
                showMenu={showMenu}
                setShowMenu={handleToggleMenu}
                contextMenu={contextMenu}
                setContextMenu={handleSetContextMenu}
            />
            {selectedChatId && activeChat ? (
                <ChatWindow
                    chat={activeChat}
                    messages={messages[selectedChatId] || []}
                    onBack={() => window.history.back()}
                    onDeleteChat={triggerDelete}
                    onSendMessage={(text) => handleSendMessage(selectedChatId, text)}
                    showInfo={showInfo}
                    setShowInfo={handleToggleInfo}
                    showMediaGallery={showMediaGallery}
                    setShowMediaGallery={handleToggleMedia}
                    showAttachments={showAttachments}
                    setShowAttachments={handleToggleAttachments}
                    onCloseSidebar={onCloseSidebar}
                />
            ) : (
                <ChatPlaceholder />
            )}
        </>
    );
};

export default DM;
