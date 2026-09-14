'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div className="w-10 h-10" />;
  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="px-3 py-1.5 rounded-full border text-xs font-medium transition-all duration-200 border-stone-300 bg-stone-100 text-stone-800 hover:bg-stone-200 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
    >
      {theme === 'dark' ? '☀️ 暖色模式' : '🌙 深色模式'}
    </button>
  );
}
