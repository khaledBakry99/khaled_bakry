'use client';

import { useState, useEffect } from 'react';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get theme from localStorage or default to dark
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'dark';
    setTheme(savedTheme);
    
    // Remove dark class first, then add if needed
    document.documentElement.classList.remove('dark', 'light');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Remove both classes first
    document.documentElement.classList.remove('dark', 'light');
    
    // Add the new theme class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('light');
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-14 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-xl border border-slate-300/50 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 flex items-center justify-center group overflow-hidden"
      aria-label="Toggle theme"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-purple-500/0 group-hover:from-blue-500/20 group-hover:via-cyan-500/20 group-hover:to-purple-500/20 transition-all duration-300 rounded-full"></div>

      {/* Icons */}
      <div className="relative">
        {/* Sun Icon (Light Mode) */}
        <i className={`ri-sun-line text-2xl transition-all duration-300 absolute inset-0 flex items-center justify-center ${
          theme === 'light' 
            ? 'text-yellow-500 rotate-0 scale-100 opacity-100' 
            : 'text-slate-400 rotate-180 scale-0 opacity-0'
        }`}></i>

        {/* Moon Icon (Dark Mode) */}
        <i className={`ri-moon-line text-2xl transition-all duration-300 ${
          theme === 'dark' 
            ? 'text-blue-400 rotate-0 scale-100 opacity-100' 
            : 'text-slate-400 -rotate-180 scale-0 opacity-0'
        }`}></i>
      </div>

      {/* Tooltip */}
      <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-slate-700 dark:bg-slate-800 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-slate-700 dark:bg-slate-800 transform rotate-45"></div>
      </div>
    </button>
  );
}
