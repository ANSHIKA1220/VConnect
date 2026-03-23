import { useState } from "react";
import { HelpCircle, CheckCircle, ThumbsUp, TrendingUp, Monitor, Target, Trophy, Globe, Rocket, MessageCircle, Brain, GraduationCap, Bell } from "lucide-react";

const topics = [
  { label: "Most Discussed This Week", icon: TrendingUp },
  { label: "DSA", icon: Monitor },
  { label: "Placements", icon: Target },
  { label: "Sports", icon: Trophy },
  { label: "General", icon: Globe },
  { label: "Placement Season 2026", icon: Rocket },
  { label: "Java Mid-Sem Doubts", icon: MessageCircle },
  { label: "LeetCode Challenge", icon: Brain },
  { label: "GATE Preparation", icon: GraduationCap },
  { label: "Exam Alerts", icon: Bell },
];

const stats = [
  { label: "Questions Asked", icon: HelpCircle, value: 5 },
  { label: "Answers Given", icon: CheckCircle, value: 12 },
  { label: "Likes Received", icon: ThumbsUp, value: 34 },
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ background: "#0a1929", minHeight: "100vh", padding: "24px", display: "flex", justifyContent: "center" }}>
      <div style={{ width: "288px", display: "flex", flexDirection: "column", gap: "16px" }}>

        {/* Card 1 - Your Stats */}
        <div style={{ background: "#040d1a", border: "1px solid #1e293b", borderRadius: "16px", padding: "16px" }}>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#e5e7eb", marginBottom: "12px" }}>Your Stats</div>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0", borderBottom: i !== stats.length - 1 ? "1px solid #1e293b" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Icon size={15} color="#60a5fa" />
                  <span style={{ fontSize: "13px", color: "#94a3b8" }}>{s.label}</span>
                </div>
                <span style={{ fontSize: "13px", fontWeight: 700, color: "#60a5fa" }}>{s.value}</span>
              </div>
            );
          })}
        </div>

        {/* Card 2 - Trending */}
        <div style={{ background: "#040d1a", border: "1px solid #1e293b", borderRadius: "16px", padding: "16px" }}>
          <div style={{ fontSize: "14px", fontWeight: 700, color: "#e5e7eb", marginBottom: "12px" }}>Trending</div>
          {topics.map(t => {
            const Icon = t.icon;
            const isSelected = selected === t.label;
            return (
              <div key={t.label} onClick={() => setSelected(isSelected ? null : t.label)}
                style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 10px", borderRadius: "10px", marginBottom: "2px", cursor: "pointer", background: isSelected ? "rgba(96,165,250,0.1)" : "transparent" }}>
                <Icon size={15} color={isSelected ? "#60a5fa" : "#64748b"} />
                <span style={{ fontSize: "13px", fontWeight: 500, color: isSelected ? "#60a5fa" : "#e5e7eb" }}>{t.label}</span>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}