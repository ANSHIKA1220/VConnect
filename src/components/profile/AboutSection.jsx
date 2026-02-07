function AboutSection({ bio }) {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-card">
      <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">About</h2>
      <p className="text-foreground leading-relaxed">{bio}</p>
    </div>
  );
}

export default AboutSection;