import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { Search, X, Star, BarChart2, SlidersHorizontal, ChevronRight } from "lucide-react";

const ALL_PROFILES = [
  { id: 1, name: "Dr. Alex R.", role: "Data Science",  avatar: "https://i.pravatar.cc/100?img=11", years: "10+ yrs @ Google",  skill: "ML & Analytics", featured: true },
  { id: 2, name: "Marcus C.",   role: "Full Stack",    avatar: "https://i.pravatar.cc/100?img=13", years: "8+ yrs @ Meta",    skill: "React & Node.js" },
  { id: 3, name: "Lisa K.",     role: "Product",       avatar: "https://i.pravatar.cc/100?img=47", years: "6+ yrs @ Spotify", skill: "Growth & Strategy" },
  { id: 4, name: "James L.",    role: "Marketing",     avatar: "https://i.pravatar.cc/100?img=52" },
  { id: 5, name: "Elena R.",    role: "HR Consult",    avatar: "https://i.pravatar.cc/100?img=44" },
  { id: 6, name: "Chris P.",    role: "Mobile Dev",    avatar: "https://i.pravatar.cc/100?img=15" },
  { id: 7, name: "Nina J.",     role: "DevOps",        avatar: "https://i.pravatar.cc/100?img=36" },
  { id: 8, name: "Vikram S.",   role: "AI Ethics",     avatar: "https://i.pravatar.cc/100?img=57" },
  { id: 9, name: "Maya T.",     role: "Career Coach",  avatar: "https://i.pravatar.cc/100?img=49" },
  { id: 10, name: "Omar D.",    role: "Frontend",      avatar: "https://i.pravatar.cc/100?img=60" },
  { id: 11, name: "Chloe B.",   role: "Product",       avatar: "https://i.pravatar.cc/100?img=39" },
];

const COMMUNITY_STATS = [
  { label: "Members",    value: "1.2k", green: false },
  { label: "Posts",      value: "348",  green: false },
  { label: "Mentors",    value: "89",   green: false },
  { label: "Online now", value: "24",   green: true  },
];

const CATEGORIES = [
  { label: "Freelance Projects", count: 42, color: "#4a8fa8" },
  { label: "Startup Advice",     count: 31, color: "#5aaa8a" },
  { label: "Mentorship Tips",    count: 27, color: "#8a70b0" },
];

const ACTIVE_MEMBERS = [
  { id: 1, name: "intasham", role: "Mentor · Startup",   avatar: "https://i.pravatar.cc/100?img=11" },
  { id: 2, name: "tarella",  role: "Member · Design",    avatar: "https://i.pravatar.cc/100?img=47" },
  { id: 3, name: "Jane D.",  role: "Mentor · Freelance", avatar: null, initials: "JD" },
];

const TOP_PROFILES = ALL_PROFILES.slice(0, 5);

// All opportunities with a category field that matches CATEGORIES labels
const ALL_OPPORTUNITIES = [
  {
    id: 1,
    category: null,
    upvotes: 13,
    author: "intasham",
    avatar: "https://i.pravatar.cc/100?img=11",
    time: "6 days ago · Edited",
    title: "🎉 Welcome to Discover 🎉",
    body: "Hi there! 👋\n\nWelcome to Discover. This is a community-driven platform built for sharing and growing together.",
    tag: "⚡ Features",
    bullets: ["Connect with local mentors", "Engagement through collaborative feeds"],
    comments: 12,
  },
  {
    id: 2,
    category: "Startup Advice",
    upvotes: 8,
    author: "Marcus C.",
    avatar: "https://i.pravatar.cc/100?img=13",
    time: "3 days ago",
    title: "🚀 Looking for a Co-founder in EdTech",
    body: "Hey community! 👋\n\nI'm building an EdTech startup focused on personalized learning for underserved students and looking for a technical co-founder to join the journey.",
    tag: "🤝 Collaboration",
    bullets: ["Experience with React or mobile development", "Passion for education and social impact"],
    comments: 7,
  },
  {
    id: 3,
    category: "Freelance Projects",
    upvotes: 5,
    author: "Lisa K.",
    avatar: "https://i.pravatar.cc/100?img=47",
    time: "1 day ago",
    title: "💼 Freelance UI/UX Designer Needed",
    body: "Looking for a skilled UI/UX designer for a 3-month freelance contract.\n\nThe project involves redesigning a SaaS dashboard for a fintech client.",
    tag: "💼 Freelance",
    bullets: ["Strong Figma skills required", "Experience with fintech or dashboard design a plus"],
    comments: 4,
  },
  {
    id: 4,
    category: "Mentorship Tips",
    upvotes: 11,
    author: "Dr. Alex R.",
    avatar: "https://i.pravatar.cc/100?img=11",
    time: "2 days ago",
    title: "🎓 How to Find the Right Mentor",
    body: "Mentorship changed my career. Here's what I learned after 10 years at Google.\n\nFinding the right mentor is less about status and more about alignment.",
    tag: "🎓 Mentorship",
    bullets: ["Look for someone whose journey mirrors your goals", "Consistency matters more than credentials"],
    comments: 9,
  },
];

export default function Discover() {
  const navigate                                        = useNavigate();
  const [showProfilesDrawer, setShowProfilesDrawer]   = useState(false);
  const [drawerSearch, setDrawerSearch]               = useState("");
  const [expandedProfile, setExpandedProfile]         = useState(null);
  const [query, setQuery]                             = useState("");
  const [openMenuId, setOpenMenuId]                   = useState(null);
  const [activeCategory, setActiveCategory]           = useState(null); // null = show all

  const filteredOpportunities = useMemo(() => {
    let list = ALL_OPPORTUNITIES;
    if (activeCategory) list = list.filter(o => o.category === activeCategory);
    const q = query.trim().toLowerCase();
    if (q) list = list.filter(o => o.title.toLowerCase().includes(q) || o.tag.toLowerCase().includes(q));
    return list;
  }, [activeCategory, query]);

  const filteredProfiles = useMemo(() => {
    const q = drawerSearch.trim().toLowerCase();
    if (!q) return ALL_PROFILES;
    return ALL_PROFILES.filter(p =>
      p.name.toLowerCase().includes(q) || p.role.toLowerCase().includes(q)
    );
  }, [drawerSearch]);

  const closeDrawer  = () => { setShowProfilesDrawer(false); setExpandedProfile(null); };
  const toggleMenu   = (id, e) => { e.stopPropagation(); setOpenMenuId(openMenuId === id ? null : id); };
  const closeMenu    = () => setOpenMenuId(null);
  const handleCategory = (label) => {
    setActiveCategory(prev => prev === label ? null : label);
    closeMenu();
  };

  return (
    <MainLayout>
      <div className="flex gap-5" style={{ height: "calc(100vh - 88px)", alignItems: "stretch" }} onClick={closeMenu}>

        {/* ════ LEFT MAIN PANEL ════ */}
        <div className="flex-1 min-w-0 rounded-2xl border border-[#3a6d8a]/40 bg-card shadow-card flex flex-col" style={{ height: "100%", minHeight: 0 }}>

          {/* Blue gradient header */}
          <div
            className="flex items-center gap-3 px-5 py-4 rounded-t-2xl"
            style={{ background: "linear-gradient(90deg, #2d6a8a, #3a7a9a)" }}
          >
            <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 border-2 border-white/50 bg-white/10">
              <div className="w-2 h-2 rounded-full bg-white/70" />
            </div>
            <span className="text-white font-bold text-[15px] tracking-tight">Discover</span>
          </div>

          {/* Community Feed label */}
          <div className="px-5 pt-4 pb-2 text-[10px] font-bold tracking-widest uppercase text-muted-foreground opacity-70">
            Community Feed
          </div>

          {/* Top Profiles box */}
          <div
            className="mx-5 mb-4 rounded-xl border border-[#3a6d8a]/25 p-3"
            style={{ background: "rgba(58,109,138,0.12)" }}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="text-[11.5px] font-bold uppercase tracking-wide text-foreground">
                Top Profiles
              </div>
              <button
                onClick={() => setShowProfilesDrawer(true)}
                className="text-[11.5px] font-semibold hover:underline bg-transparent border-0 cursor-pointer"
                style={{ color: "#6ab8d4" }}
              >
                View All
              </button>
            </div>
            <div className="flex items-center gap-5">
              {TOP_PROFILES.map((p) => (
                <div key={p.id} className="flex flex-col items-center gap-1.5">
                  {p.avatar ? (
                    <img
                      src={p.avatar} alt={p.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-white/30"
                      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                    />
                  ) : (
                    <div
                      className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold text-white border-2 border-white/30"
                      style={{ background: p.id === 4 ? "#4a6890" : "#3a8878", boxShadow: "0 2px 8px rgba(0,0,0,0.3)" }}
                    >
                      {p.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                    </div>
                  )}
                  <span className="text-[10.5px] text-muted-foreground">{p.name.split(" ")[0]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Active filter pill */}
          {activeCategory && (
            <div className="px-5 pb-2">
              <button
                onClick={() => setActiveCategory(null)}
                className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full border-0 cursor-pointer"
                style={{ background: "rgba(58,109,138,0.18)", color: "#6ab8d4" }}
              >
                {activeCategory}
                <X size={11} />
              </button>
            </div>
          )}

          {/* Post cards — independent scroll */}
          <div className="px-5 pb-5 overflow-y-auto flex-1" style={{ scrollbarWidth: "thin", scrollbarColor: "rgba(58,109,138,0.3) transparent" }}>
            {filteredOpportunities.length === 0 ? (
              <div className="text-center py-10 text-muted-foreground text-sm">
                No posts in this category yet.
              </div>
            ) : (
              filteredOpportunities.map((o) => (
                <div
                  key={o.id}
                  className="bg-card border border-[#3a6d8a]/20 rounded-xl p-4 mb-3 hover:border-[#3a6d8a]/50 transition-colors"
                  onClick={closeMenu}
                >
                  {/* Header row: avatar → author → three dots */}
                  <div className="flex items-start gap-2.5 mb-2">
                    <img
                      src={o.avatar} alt={o.author}
                      className="w-9 h-9 rounded-full object-cover flex-shrink-0 border border-[#3a6d8a]/30"
                    />
                    <div className="flex-1">
                      <div className="text-[13.5px] font-semibold text-foreground leading-tight">{o.author}</div>
                      <div className="text-xs text-muted-foreground">{o.time}</div>
                    </div>

                    {/* ── Vertical three dots menu ── */}
                    <div className="relative">
                      <button
                        onClick={(e) => toggleMenu(o.id, e)}
                        className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-[#3a6d8a]/15 transition-colors bg-transparent border-0 cursor-pointer"
                      >
                        {/* Vertical dots — three stacked circles */}
                        <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
                          <circle cx="2" cy="2"  r="1.5"/>
                          <circle cx="2" cy="8"  r="1.5"/>
                          <circle cx="2" cy="14" r="1.5"/>
                        </svg>
                      </button>

                      {/* Dropdown */}
                      {openMenuId === o.id && (
                        <div
                          className="absolute right-0 top-8 z-20 w-36 rounded-xl border border-[#3a6d8a]/25 bg-card shadow-xl overflow-hidden"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-foreground hover:bg-[#3a6d8a]/12 transition-colors bg-transparent border-0 cursor-pointer text-left"
                            onClick={closeMenu}
                          >
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                              <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                              <line x1="1" y1="1" x2="23" y2="23"/>
                            </svg>
                            Hide
                          </button>
                          <div className="h-px bg-[#3a6d8a]/15" />
                          <button
                            className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors bg-transparent border-0 cursor-pointer text-left"
                            onClick={closeMenu}
                          >
                            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                              <line x1="4" y1="22" x2="4" y2="15"/>
                            </svg>
                            Report
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Post content */}
                  <div className="pl-1">
                      <div className="text-[15px] font-bold text-foreground mb-2">{o.title}</div>
                      <div className="text-[13.5px] text-muted-foreground leading-relaxed mb-3 whitespace-pre-line">
                        {o.body.split("Discover").map((part, i, arr) =>
                          i < arr.length - 1
                            ? <span key={i}>{part}<strong className="text-foreground">Discover</strong></span>
                            : <span key={i}>{part}</span>
                        )}
                      </div>

                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-[#3a6d8a]/40"
                        style={{ background: "rgba(58,109,138,0.15)", color: "#6ab8d4" }}
                      >
                        {o.tag}
                      </span>

                      <ul className="mb-3 space-y-1">
                        {o.bullets.map((b, i) => (
                          <li key={i} className="flex items-center gap-2 text-[13px] text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#4a8fa8" }} />
                            {b}
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-3 pt-2.5 border-t border-[#3a6d8a]/20">
                        {/* 👍 count 👎 inline before comment */}
                        <button className="text-muted-foreground hover:text-[#6ab8d4] transition-colors bg-transparent border-0 p-0 cursor-pointer">
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/>
                            <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                          </svg>
                        </button>
                        <span className="text-xs font-bold text-foreground">{o.upvotes}</span>
                        <button className="text-muted-foreground hover:text-[#6ab8d4] transition-colors bg-transparent border-0 p-0 cursor-pointer">
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3H10z"/>
                            <path d="M17 2h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/>
                          </svg>
                        </button>
                        <div className="w-px h-3 bg-[#3a6d8a]/30 mx-1" />
                        <button className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium hover:text-[#6ab8d4] transition-colors bg-transparent border-0 cursor-pointer">
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                          </svg>
                          {o.comments}
                        </button>
                        <button className="flex items-center gap-1.5 text-xs text-muted-foreground font-medium hover:text-[#6ab8d4] transition-colors bg-transparent border-0 cursor-pointer">
                          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                          </svg>
                          Share
                        </button>
                      </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* ════ RIGHT SIDEBAR ════ */}
        <div className="w-72 flex-shrink-0 flex flex-col gap-4 overflow-y-auto pb-4" style={{ height: "100%", minHeight: 0, scrollbarWidth: "thin", scrollbarColor: "rgba(58,109,138,0.3) transparent" }}>

          {/* Highlighted */}
          <div className="rounded-2xl border border-[#3a6d8a]/40 bg-card shadow-card overflow-hidden flex-shrink-0">
            <div
              className="h-32 relative flex items-center justify-center overflow-hidden"
              style={{ background: "linear-gradient(135deg,#2d6a8a,#4a8fa8,#5aa8c0)" }}
            >
              <div className="absolute w-28 h-28 rounded-full bg-white/5 -top-8 -right-6" />
              <div className="absolute w-20 h-20 rounded-full bg-white/8 -bottom-6 left-4" />
              <div className="flex items-end gap-1.5 z-10 mr-4">
                {[42, 56, 46, 38].map((h, i) => (
                  <div key={i} className="w-4 rounded-t" style={{ height: h, background: "rgba(255,255,255,0.3)" }} />
                ))}
              </div>
              <div className="z-10 text-3xl" style={{ filter: "drop-shadow(0 0 10px rgba(255,210,50,0.7))" }}>💡</div>
            </div>
            <div className="p-4">
              <div className="font-bold text-foreground text-sm mb-1.5">Built for Community Growth</div>
              <div className="text-xs text-muted-foreground leading-relaxed mb-3">Learn how we foster growth in the community.</div>
              <button
                className="px-4 py-2 rounded-lg text-white text-xs font-semibold border-0 cursor-pointer"
                style={{ background: "linear-gradient(135deg,#2d6a8a,#3a7a9a)", boxShadow: "0 3px 10px rgba(45,106,138,0.4)" }}
              >
                Read More
              </button>
            </div>
          </div>

          {/* Community Stats */}
          <div className="rounded-2xl border border-[#3a6d8a]/40 bg-card shadow-card overflow-hidden flex-shrink-0">
            <div className="px-4 pt-3.5 pb-2 text-[10px] font-bold tracking-widest uppercase border-b border-[#3a6d8a]/20" style={{ color: "#6ab8d4" }}>
              Community Stats
            </div>
            <div className="grid grid-cols-2 gap-2.5 p-3">
              {COMMUNITY_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-3"
                  style={{
                    background: s.green ? "rgba(58,138,100,0.15)" : "rgba(58,109,138,0.12)",
                    border: s.green ? "1.5px solid rgba(58,138,100,0.3)" : "1.5px solid rgba(58,109,138,0.25)",
                  }}
                >
                  <div className="text-xl font-extrabold leading-tight" style={{ color: s.green ? "#3dca8a" : "#6ab8d4" }}>{s.value}</div>
                  <div className="text-[11px] text-muted-foreground font-medium mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Browse Categories — clicking filters the feed */}
          <div className="rounded-2xl border border-[#3a6d8a]/40 bg-card shadow-card overflow-hidden flex-shrink-0">
            <div className="px-4 pt-3.5 pb-2 text-[10px] font-bold tracking-widest uppercase border-b border-[#3a6d8a]/20" style={{ color: "#6ab8d4" }}>
              Browse Categories
            </div>
            <div className="py-1.5">
              {CATEGORIES.map((c) => {
                const isActive = activeCategory === c.label;
                return (
                  <button
                    key={c.label}
                    onClick={() => handleCategory(c.label)}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 transition-colors text-left border-0 cursor-pointer"
                    style={{ background: isActive ? `${c.color}22` : "transparent" }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = "rgba(58,109,138,0.10)"; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = "transparent"; }}
                  >
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
                    <span
                      className="flex-1 text-sm font-medium"
                      style={{ color: isActive ? c.color : "var(--foreground)" }}
                    >{c.label}</span>
                    <span
                      className="text-[11px] font-bold text-white px-2 py-0.5 rounded-full min-w-[28px] text-center"
                      style={{ background: c.color, opacity: isActive ? 1 : 0.85 }}
                    >{c.count}</span>
                    <ChevronRight
                      size={14}
                      style={{ color: isActive ? c.color : "var(--muted-foreground)", transition: "transform 0.15s", transform: isActive ? "rotate(90deg)" : "rotate(0deg)" }}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Members */}
          <div className="rounded-2xl border border-[#3a6d8a]/40 bg-card shadow-card overflow-hidden flex-shrink-0">
            <div className="px-4 pt-3.5 pb-2 text-[10px] font-bold tracking-widest uppercase border-b border-[#3a6d8a]/20" style={{ color: "#6ab8d4" }}>
              Active Members
            </div>
            <div className="py-1.5">
              {ACTIVE_MEMBERS.map((m) => (
                <button
                  key={m.id}
                  className="w-full flex items-center gap-2.5 px-4 py-2.5 hover:bg-[#3a6d8a]/10 transition-colors border-0 bg-transparent cursor-pointer"
                >
                  {m.avatar ? (
                    <img src={m.avatar} alt={m.name} className="w-8 h-8 rounded-full object-cover flex-shrink-0" />
                  ) : (
                    <div className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0" style={{ background: "linear-gradient(135deg,#4a6890,#3a5878)" }}>
                      {m.initials}
                    </div>
                  )}
                  <div className="flex-1 text-left">
                    <div className="text-sm font-semibold text-foreground leading-tight">{m.name}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5">{m.role}</div>
                  </div>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: "#3dca8a", boxShadow: "0 0 0 3px rgba(61,202,138,0.2)" }} />
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* ── BACKDROP ── */}
      <div
        className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300 ${showProfilesDrawer ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={closeDrawer}
      />

      {/* ── SLIDE-UP DRAWER ── */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 bg-background rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out ${showProfilesDrawer ? "translate-y-0" : "translate-y-full"}`}
        style={{ maxHeight: "85vh", overflowY: "auto" }}
      >
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="flex items-center justify-between px-5 pt-3 pb-2">
          <h2 className="text-lg font-bold text-foreground">Top Profiles</h2>
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 rounded-full border border-[#3a6d8a]/30 bg-card flex items-center justify-center hover:bg-muted transition">
              <SlidersHorizontal size={15} className="text-muted-foreground" />
            </button>
            <button onClick={closeDrawer} className="w-8 h-8 rounded-full border border-[#3a6d8a]/30 bg-card flex items-center justify-center hover:bg-muted transition">
              <X size={15} className="text-muted-foreground" />
            </button>
          </div>
        </div>
        <div className="px-5 py-3">
          <div className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              className="w-full h-10 pl-10 pr-4 rounded-xl bg-card border border-[#3a6d8a]/30 text-foreground placeholder:text-muted-foreground outline-none text-sm"
              placeholder="Find your next guide..."
              value={drawerSearch}
              onChange={(e) => setDrawerSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="px-5 pb-10 grid grid-cols-3 gap-4">
          {filteredProfiles.map(p => (
            <div key={p.id} className="relative">
              <button
                className="w-full flex flex-col items-center gap-2 p-3 rounded-2xl border border-[#3a6d8a]/25 bg-card hover:bg-[#3a6d8a]/10 transition"
                onClick={() => setExpandedProfile(expandedProfile?.id === p.id ? null : p)}
              >
                <img src={p.avatar} alt={p.name} className="w-14 h-14 rounded-full object-cover border-2 border-[#3a6d8a]/30" />
                <span className="text-xs font-semibold text-foreground text-center leading-tight">{p.name}</span>
                <span className="text-[10px] text-muted-foreground text-center">{p.role}</span>
              </button>
              {expandedProfile?.id === p.id && p.years && (
                <div className="absolute top-0 left-0 z-10 w-52 bg-card border border-[#3a6d8a]/30 rounded-2xl shadow-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={p.avatar} alt={p.name} className="w-12 h-12 rounded-full border border-[#3a6d8a]/30 object-cover" />
                    <div>
                      <div className="text-sm font-bold text-foreground">{p.name}</div>
                      <div className="text-xs text-muted-foreground">{p.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-amber-500 font-semibold mb-1">
                    <Star size={13} className="fill-amber-500" />{p.years}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-500 font-semibold mb-3">
                    <BarChart2 size={13} />{p.skill}
                  </div>
                  <button
                    className="w-full py-1.5 rounded-lg text-xs font-semibold border border-[#4a8fa8] hover:bg-[#4a8fa8] transition"
                    style={{ color: "#6ab8d4" }}
                    onMouseEnter={e => { e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.color = "#6ab8d4"; }}
                  >
                    View Profile
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