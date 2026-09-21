import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '../components/ThemeProvider';
export const metadata: Metadata = {
  title: 'ＰＩＸＥＬＯＧＩＣ.'
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW" suppressHydrationWarning className="scroll-smooth">
      <body className="bg-stone-50 text-stone-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
