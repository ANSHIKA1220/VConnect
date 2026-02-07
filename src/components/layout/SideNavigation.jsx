import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function SideNavigation() {
  return (
    <div className="fixed left-0 top-0 h-full w-56 bg-card border-r border-border z-10 flex flex-col py-6">
      {/* Logo/Brand Icon at top */}
      <div className="px-4 mb-8">
        <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
          </svg>
        </div>
      </div>

      {/* Navigation Icons */}
      <nav className="flex flex-col gap-2 flex-1 px-2">
        {/* Home */}
        <Link 
          to="/" 
          className="h-11 flex items-center gap-3 rounded-xl bg-primary/10 text-primary transition-all px-3"
          title="Home"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-sm">Home</span>
        </Link>

        {/* Messages/DMs - Active State */}
        <Link 
          to="/dm" 
          className="h-11 flex items-center gap-3 rounded-xl bg-primary/10 text-primary transition-all px-3"
          title="Messages"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-sm">DMs</span>
        </Link>

        {/* Discover */}
        <Link 
          to="/discover" 
          className="h-11 flex items-center gap-3 rounded-xl bg-primary/10 text-primary transition-all px-3"
          title="Discover"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 9l3-3m-3 3l3 3m-3-3l-3-3m3 3l-3 3" />
          </svg>
          <span className="text-sm">Discover</span>
        </Link>

        {/* Profile */}
        <Link 
          to="/profile" 
          className="h-11 flex items-center gap-3 rounded-xl bg-primary/10 text-primary transition-all px-3"
          title="Profile"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span className="text-sm">Profile</span>
        </Link>

        {/* Dark Mode Toggle */}
      <div className="mt-auto px-3">
        <ThemeToggle />
      </div>
      </nav>
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('vconnect-theme');
    const dark = saved === 'dark';
    setIsDark(dark);
    document.body.classList.toggle('dark-mode', dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    document.body.classList.toggle('dark-mode', next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('vconnect-theme', next ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme}
      className="w-12 h-12 flex items-center justify-center rounded-xl text-muted-foreground hover:bg-muted transition-all mt-auto"
      title="Toggle Dark Mode"
      aria-pressed={isDark}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  );
}

export default SideNavigation;
