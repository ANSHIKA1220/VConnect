import { useState } from 'react';
import { Search, Plus, Bell, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  return (
    <header className="bg-card border-b border-border px-4 lg:px-6 py-2 z-10">
      <div className="flex items-center justify-between relative h-10 w-full">

        {/* Left - Search Bar */}
        <div className="flex-1 max-w-[300px]">
          <div className="flex items-center gap-2 bg-background border border-border rounded-full px-4 py-2 hover:border-primary transition focus-within:border-primary">
            <Search size={16} className="text-muted-foreground shrink-0" />
            <input
              className="flex-1 bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
              placeholder="Find anything"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        {/* Center - Logo + Name */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
          <span className="font-bold text-lg text-foreground">VConnect</span>
        </div>

        {/* Right - Ask + Icons + Avatar */}
        <div className="flex items-center gap-2 shrink-0">

          {/* Ask Button */}
          <button className="flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm font-semibold text-foreground hover:bg-muted transition">
            <MessageSquare size={15} className="text-primary" />
            Ask
          </button>

          {/* Create Button */}
          <button className="flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm font-semibold text-foreground hover:bg-muted transition">
            <Plus size={15} />
            Create
          </button>

          {/* Notification Bell */}
          <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-muted transition">
            <Bell size={18} className="text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
          </button>

          {/* Avatar */}
          <div 
            onClick={() => navigate('/profile')}
            className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold cursor-pointer"
          >
            A
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar;