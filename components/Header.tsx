
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
    { href: '/cv', label: 'CV' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900/95 via-blue-900/95 to-slate-900/95 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-900/30 transition-all duration-500">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-gradient-x"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-800/90 via-cyan-800/90 to-blue-900/90 backdrop-blur-xl rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl border border-blue-500/30">
                <div className="text-center">
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 font-bold text-lg leading-none animate-gradient-x">KB</div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">&lt;/&gt;</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="text-xl font-black tracking-wide">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 animate-gradient-x">KHALED</span>
                {' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 animate-gradient-x">BAKRY</span>
              </div>
              <div className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Frontend Developer
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  pathname === item.href
                    ? 'text-white bg-blue-800/60 backdrop-blur-sm shadow-lg border border-blue-500/30'
                    : 'text-blue-200 hover:text-white hover:bg-blue-800/40 backdrop-blur-sm'
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"></div>
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-blue-800/60 backdrop-blur-lg hover:bg-blue-700/60 transition-all duration-300 border border-blue-600/50"
              aria-label="Toggle menu"
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-blue-200`}></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 p-4 bg-slate-900/95 backdrop-blur-xl rounded-xl border border-blue-500/30 shadow-2xl shadow-blue-900/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    pathname === item.href
                      ? 'text-white bg-blue-700/60 border border-blue-500/30'
                      : 'text-blue-200 hover:text-white hover:bg-blue-700/40'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
