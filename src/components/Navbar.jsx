import React, { useEffect, useState } from 'react';
import { Rocket, Github, Moon, Sun, CreditCard } from 'lucide-react';

const NavLink = ({ children, href = '#' }) => (
  <a
    href={href}
    className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('mt-theme');
    if (stored) {
      setDarkMode(stored === 'dark');
      document.documentElement.classList.toggle('dark', stored === 'dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('mt-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/50 border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-violet-500 to-fuchsia-500 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-white dark:bg-slate-900 grid place-items-center">
              <Rocket className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
            </div>
          </div>
          <span className="text-lg font-semibold tracking-tight">Multi-Tool Dashboard</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition-colors inline-flex items-center gap-2"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode((v) => !v)}
            aria-label="Toggle theme"
            className="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-3 py-2"
          >
            {darkMode ? (
              <Sun className="h-4 w-4 text-amber-400" />
            ) : (
              <Moon className="h-4 w-4 text-slate-700" />
            )}
          </button>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:opacity-90"
          >
            <CreditCard className="h-4 w-4" />
            Subscribe
          </a>
        </div>
      </div>
    </header>
  );
}
