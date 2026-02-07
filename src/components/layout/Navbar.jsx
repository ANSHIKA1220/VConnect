function Navbar() {
  return (
    <header className="bg-card border-b border-border px-4 lg:px-8 py-3">
      <div className="max-w-md lg:max-w-4xl xl:max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          <span className="font-semibold text-foreground">VConnect</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;