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

export default function RightPanel({ selectedTopic, onTopicSelect }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Card 1 - Your Stats */}
      <div className="bg-[var(--panel-accent-bg)] border border-border/40 rounded-2xl p-4 shadow-card">
        <div className="text-sm font-bold text-foreground mb-3">Your Stats</div>
        <div className="space-y-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className={`flex justify-between items-center py-1 ${i !== stats.length - 1 ? 'border-b border-border/50 pb-3' : ''}`}>
                <div className="flex items-center gap-2">
                  <Icon size={14} className="text-primary" />
                  <span className="text-[13px] text-muted-foreground">{s.label}</span>
                </div>
                <span className="text-[13px] font-bold text-primary">{s.value}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card 2 - Trending Topics */}
      <div className="bg-[var(--panel-accent-bg)] border border-border/40 rounded-2xl p-4 shadow-card">
        <div className="text-sm font-bold text-foreground mb-3">Trending Topics</div>
        <div className="space-y-1">
          {topics.map(t => {
            const Icon = t.icon;
            const isSelected = selectedTopic === t.label;
            return (
              <div 
                key={t.label} 
                onClick={() => onTopicSelect(isSelected ? null : t.label)}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl cursor-pointer transition-all ${isSelected ? 'bg-primary/10 text-primary' : 'text-muted-foreground hover:bg-muted'}`}
              >
                <Icon size={14} className={isSelected ? 'text-primary' : 'text-muted-foreground'} />
                <span className={`text-[13px] ${isSelected ? 'font-bold' : 'font-medium opacity-80'}`}>{t.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}