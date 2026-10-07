'use client';

import { ThemeToggle } from '../components/ThemeToggle';
import ProofOfProgress from '../components/ProofOfProgress';
import EatSelector from '../components/EatSelector';
import Experience from '../components/experience';
import About from '../components/about';

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 dark:bg-slate-950 text-stone-900 dark:text-slate-100 transition-colors">
      {/* 頂部導覽列 */}
      <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 md:px-8 border-b border-stone-200/50 dark:border-slate-800/50 bg-stone-50/80 dark:bg-slate-950/80 backdrop-blur-md">
        <a href="/" className="text-xl font-black tracking-widest text-amber-700 dark:text-amber-500 hover:opacity-80 transition-opacity">
          PIXELOGIC.
        </a>
        <span className="hidden md:inline-block text-xs font-semibold tracking-widest text-stone-400 dark:text-slate-500 uppercase">
          Based in Taiwan
        </span>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>

      {/* 主要內容區 */}
      <main className="max-w-6xl mx-auto px-6 space-y-24 py-12">
        {/* 1. About / 主視覺 */}
        <About />

        {/* 2. Experience / 經歷 */}
        <Experience />

        {/* 3. Portfolio / 成長森林 */}
        <section id="portfolio" className="scroll-mt-24 space-y-4">
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">
              Interactive Project
            </h2>
            <h3 className="text-2xl font-bold">
              幫助使用者透過這個屬於自己的秘密基地累積打卡證明建立成就感、自信心與安全感，希望大家不要忽略自己每天的小小努力。
            </h3>
          </div>
          <ProofOfProgress />
        </section>

        {/* 4. Portfolio / 吃什麼抽籤器 */}
        <section className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">
              Interactive Project
            </h2>
            <h3 className="text-2xl font-bold">
              幫大（ㄗˋ）家（ㄐㄧˇ）解開世紀難題
            </h3>
          </div>
          <EatSelector />
        </section>

        {/* 5. Contact / 聯絡資訊 */}
        <section id="contact" className="scroll-mt-24 space-y-6 text-center py-12 px-6 rounded-3xl border border-stone-200 dark:border-slate-700 bg-stone-100 dark:bg-slate-800 shadow-sm">
          <div className="space-y-2">
            <h3 className="text-3xl font-bold">Start a Project</h3>
          </div>
          <p className="text-base text-stone-600 dark:text-slate-300 whitespace-nowrap overflow-x-auto max-w-full px-4">
            無論是合作邀約、專案諮詢，或是單純交流想法，都非常歡迎與我聯繫。
          </p>
          <div className="pt-4">
            <a
              href="mailto:if8mile@gmail.com"
              className="inline-block px-8 py-4 rounded-xl font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>

      {/* 頁尾 Footer */}
      <footer className="border-t border-stone-200 dark:border-slate-800/80 py-8 text-center text-xs text-stone-500 dark:text-slate-500">
        © {new Date().getFullYear()} Nara. All rights reserved.
      </footer>
    </div>
  );
}