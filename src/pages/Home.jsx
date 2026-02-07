import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Plus, MessageSquare, ThumbsUp, ArrowRight } from "lucide-react";

export default function Home() {
  const navigate = useNavigate();
  const initial = useMemo(() => ([
    {
      id: 1,
      author: "Alex Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      timeAgo: "posted 2h ago",
      category: "Computer Science",
      title: "How do I efficiently implement Dijkstra's algorithm?",
      body: "The best approach is to use a priority queue (Min-Heap)...",
      likes: 21,
      comments: 12,
      liked: false
    },
    {
      id: 2,
      author: "Sarah Williams",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      timeAgo: "posted 5h ago",
      category: "Organic Chemistry",
      title: "Tips for memorizing functional groups for the upcoming midterm?",
      body: "I found that drawing them repeatedly and using mnemonic devices really helps. Try creating flashcards for each group and practicing daily.",
      likes: 21,
      comments: 12,
      liked: false
    }
  ]), []);

  const [askText, setAskText] = useState("");
  const [feed, setFeed] = useState(initial);
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [commentText, setCommentText] = useState("");

  const filtered = feed;

  const handleAsk = () => {
    const text = askText.trim();
    if (!text) return;
    const newItem = {
      id: Date.now(),
      author: "You",
      avatar: "https://i.pravatar.cc/100?img=5",
      timeAgo: "just now",
      category: "General",
      title: text.length > 80 ? text.slice(0, 77) + "..." : text,
      body: "",
      likes: 0,
      comments: 0,
      liked: false
    };
    setFeed(prev => [newItem, ...prev]);
    setAskText("");
  };

  const handleLike = (id) => {
    setFeed(prev => prev.map(item => {
      if (item.id !== id) return item;
      const liked = !item.liked;
      return { ...item, liked, likes: liked ? item.likes + 1 : Math.max(0, item.likes - 1) };
    }));
  };

  const openComments = (id) => {
    setActiveCommentId(id);
  };

  const submitComment = (id) => {
    const text = commentText.trim();
    if (!text) return;
    setFeed(prev => prev.map(item => item.id === id ? { ...item, comments: item.comments + 1 } : item));
    setCommentText("");
    setActiveCommentId(null);
  };

  const handleSeeMore = (item) => {
    navigate(`/question/${item.id}`, { state: item });
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-3 bg-card border border-border rounded-full px-4 py-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            <MessageSquare className="text-primary" size={18} />
          </div>
          <input
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            placeholder="Ask a question to your mentors..."
            value={askText}
            onChange={(e) => setAskText(e.target.value)}
          />
          <button
            onClick={handleAsk}
            className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:opacity-90 transition"
            aria-label="Post question"
          >
            <Plus size={18} />
          </button>
        </div>

        <div className="space-y-5">
          {filtered.map(item => (
            <div key={item.id} className="bg-card border border-border rounded-2xl p-5 shadow-card">
              <div className="flex items-center gap-3">
                <img src={item.avatar} alt={item.author} className="w-9 h-9 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{item.author}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.timeAgo} in <span className="text-primary font-medium">{item.category}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <div className="text-lg font-semibold text-foreground">{item.title}</div>
                {item.body && <p className="mt-2 text-muted-foreground">{item.body}</p>}
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-5 text-muted-foreground">
                  <button className="flex items-center gap-2" onClick={() => handleLike(item.id)}>
                    <ThumbsUp size={16} className={item.liked ? "text-primary" : "text-muted-foreground"} />
                    <span className="text-sm">{item.likes}</span>
                  </button>
                  <button className="flex items-center gap-2" onClick={() => openComments(item.id)}>
                    <MessageSquare size={16} className="text-muted-foreground" />
                    <span className="text-sm">{item.comments}</span>
                  </button>
                </div>
                <button onClick={() => handleSeeMore(item)} className="text-sm text-primary font-medium flex items-center gap-1">
                  See More <ArrowRight size={14} className="text-primary" />
                </button>
              </div>
              {activeCommentId === item.id && (
                <div className="mt-4 flex items-center gap-2">
                  <input
                    className="flex-1 bg-card border border-border rounded-md px-3 py-2 text-foreground placeholder:text-muted-foreground outline-none"
                    placeholder="Write a comment..."
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  />
                  <button
                    className="px-3 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition"
                    onClick={() => submitComment(item.id)}
                  >
                    Post
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
