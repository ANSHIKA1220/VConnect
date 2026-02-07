import { useMemo, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import { Search, Eye, Filter, Plus } from "lucide-react";

export default function Discover() {
  const mentors = useMemo(() => ([
    { id: 1, name: "Dr. Alex", avatar: "https://i.pravatar.cc/100?img=11" },
    { id: 2, name: "Sarah M.", avatar: "https://i.pravatar.cc/100?img=32" },
    { id: 3, name: "Marcus C.", avatar: "https://i.pravatar.cc/100?img=13" }
  ]), []);

  const opportunities = useMemo(() => ([
    {
      id: 1,
      badge: "INTERNSHIP",
      time: "2 days ago",
      title: "Software Engineering Intern at TechFlow",
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      badge: "FULL TIME",
      time: "5 days ago",
      title: "Junior Data Analyst at Global Insights",
      color: "from-slate-700 to-slate-900"
    },
    {
      id: 3,
      badge: "CONTRACT",
      time: "1 week ago",
      title: "UI/UX Designer at Creative Studio",
      color: "from-emerald-500 to-emerald-600"
    }
  ]), []);

  const [query, setQuery] = useState("");
  const filteredOpps = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return opportunities;
    return opportunities.filter(o =>
      o.title.toLowerCase().includes(q) || o.badge.toLowerCase().includes(q)
    );
  }, [query, opportunities]);

  return (
    <MainLayout>
      <div className="space-y-8">

        {/* Header */}
        <div className="rounded-2xl gradient-header p-6 lg:p-8 border border-border">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl lg:text-3xl font-bold text-foreground">Discover</h1>
            <button className="px-3 py-1 rounded-md bg-card text-muted-foreground border border-border hover:bg-muted transition">
              View All
            </button>
          </div>

          <div className="mt-5">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                className="w-full h-11 pl-11 pr-4 rounded-xl bg-card border border-border text-foreground placeholder:text-muted-foreground outline-none"
                placeholder="Mentors or opportunities..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm font-semibold text-muted-foreground mb-3">Top Mentors</div>
            <div className="flex items-center gap-6">
              {mentors.map(m => (
                <div key={m.id} className="flex flex-col items-center gap-2">
                  <img src={m.avatar} alt={m.name} className="w-12 h-12 rounded-full border border-border object-cover" />
                  <span className="text-xs text-muted-foreground">{m.name}</span>
                </div>
              ))}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full border border-dashed border-border bg-card flex items-center justify-center">
                  <span className="text-xl text-muted-foreground">…</span>
                </div>
                <span className="text-xs text-muted-foreground">See More</span>
              </div>
            </div>
          </div>
        </div>

        {/* Opportunities */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-foreground">Opportunities</h2>
          <button className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-card border border-border text-muted-foreground hover:bg-muted transition">
            <Filter size={16} className="text-muted-foreground" />
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpps.map(o => (
            <div key={o.id} className="bg-card border border-border rounded-2xl overflow-hidden shadow-card">
              <div className={`h-28 bg-gradient-to-br ${o.color}`}></div>
              <div className="p-4">
                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary font-semibold">{o.badge}</span>
                  <span>{o.time}</span>
                </div>
                <div className="mt-3 text-foreground font-semibold">{o.title}</div>
                <div className="mt-4 flex items-center justify-between">
                  <button className="text-sm text-primary font-medium inline-flex items-center gap-1">
                    View <Eye size={14} className="text-primary" />
                  </button>
                  <button className="text-sm text-muted-foreground hover:text-foreground transition">Save</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Action */}
        <button
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-card hover:opacity-90 transition"
          aria-label="Add Opportunity"
        >
          <Plus size={18} />
        </button>
      </div>
    </MainLayout>
  );
}
