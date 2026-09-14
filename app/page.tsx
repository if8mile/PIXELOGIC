'use client';

import Image from 'next/image';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* 頂部導覽列 */}
      <header className="flex justify-between items-center py-6 px-4 md:px-8 border-b border-stone-200/50 dark:border-slate-800/50">
  {/* 左側：經典橘色品牌名 */}
  <span className="text-xl font-black tracking-widest text-amber-700 dark:text-amber-500">
    PIXELOGIC.
  </span>

  {/* 中間：BASED IN TAIWAN 質感標語 */}
  <span className="hidden md:inline-block text-xs font-semibold tracking-widest text-stone-400 dark:text-slate-500 uppercase">
    Based in Taiwan
  </span>

  {/* 右側：深色模式切換鈕 */}
  <div className="flex items-center">
    <ThemeToggle />
  </div>
</header>

      <main className="max-w-6xl mx-auto px-6 space-y-32 py-12">
        {/* 1. About / 主視覺 Section */}
        {/* 1. About / 主視覺 Section */}
        <section id="about" className="min-h-[calc(100vh-5rem)] flex flex-col justify-between py-12">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end my-auto">
    
    {/* 左側：文字與按鈕區塊 */}
    <div className="lg:col-span-7 space-y-6 lg:pb-4">
      <div className="space-y-3">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Hi, I’m <span className="text-amber-700 dark:text-violet-400">Nara</span>.
        </h1>
        <p className="text-xl md:text-2xl font-medium text-stone-600 dark:text-slate-300">
          Bridging ideas and reality with thoughtful design.
        </p>
      </div>

      <p className="max-w-2xl text-base text-stone-600 dark:text-slate-400 leading-relaxed">
        從跨國專案營運到數位產品創作，我習慣用嚴謹的邏輯拆解問題，再用簡潔的介面與程式將想法實現。熱衷於探索 AI 協作開發與極簡視覺，致力於打造直覺且富有價值的數位體驗。
      </p>

      <div className="flex flex-wrap gap-4 pt-2">
        <a href="#experience" className="px-6 py-3 rounded-xl font-medium text-sm text-white bg-stone-900 hover:bg-stone-800 dark:bg-violet-600 dark:hover:bg-violet-500 transition-all shadow-lg">
          View Experience
        </a>
      </div>
    </div>

    {/* 右側：照片區塊 */}
    <div className="lg:col-span-5 flex justify-center lg:justify-end relative -translate-y-12">
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-amber-500 to-amber-700 dark:from-violet-600 dark:to-cyan-500 opacity-30 blur-2xl"></div>
      <div className="relative p-3 rounded-3xl bg-white/70 dark:bg-slate-900/60 border border-stone-200 dark:border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden">
          <Image src="/IMG_8899.jpg" alt="Nara Profile" fill className="object-cover" priority />
        </div>
      </div>
    </div>

  </div>
</section>

{/* 2. Experience / 經歷 Section */}
<section id="experience" className="scroll-mt-24 space-y-8">
  <div className="space-y-2">
    <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">Career History</h2>
    <h3 className="text-2xl font-bold">Experience</h3>
  </div>

  {/* 所有經歷的外層容器（包含左側邊框線 border-l-2） */}
  <div className="space-y-8 border-l-2 border-stone-200 dark:border-slate-800 pl-6">
    
    {/* 經歷 1：Digital Creator & Developer */}
    <div className="relative space-y-2">
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
        <h4 className="text-lg font-bold">Digital Creator & Developer</h4>
        <span className="text-xs text-stone-500 dark:text-slate-400">2025 — Present</span>
      </div>
      <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Freelancer</p>
      <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
        運用 AI 協作工具與 Next.js 現代網頁技術，獨立進行數位產品開發與 UI/UX 介面實作，專注於打造極簡且高效能的網頁體驗。
      </p>
    </div>

    {/* 經歷 2：AFRY */}
    <div className="relative space-y-2">
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
        <h4 className="text-lg font-bold">Project Operations & Executive Secretary</h4>
        <span className="text-xs text-stone-500 dark:text-slate-400">2023 — 2024</span>
      </div>
      <p className="text-xs font-medium text-amber-700 dark:text-violet-400">AFRY (Thailand) Ltd.</p>
      <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
        統籌工程專案辦公室營運與預算數據維護，執行嚴謹的文件版控 (Document Control)，並支援外籍工程團隊在地化營運，維護跨國團隊高效協作。
      </p>
    </div>

    {/* 經歷 3：GE Vernova */}
    <div className="relative space-y-2">
      <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
        <h4 className="text-lg font-bold">Project Operations Manager & Executive Admin</h4>
        <span className="text-xs text-stone-500 dark:text-slate-400">2022 — 2023</span>
      </div>
      <p className="text-xs font-medium text-amber-700 dark:text-violet-400">GE Vernova</p>
      <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
        擔任 GE 通霄電廠專案行政主管，運用數據分析輔助管理層預算維護與營運決策；優化供應商採購流程並統籌外籍工程團隊後勤，顯著提升跨國團隊協作效率。
      </p>
    </div>
    {/* 經歷 4：日商丸紅 */}
<div className="relative space-y-2">
  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
    <h4 className="text-lg font-bold">Mechanical Project Assistant</h4>
    <span className="text-xs text-stone-500 dark:text-slate-400">2021 — 2022</span>
  </div>
  <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Marubeni Corporation</p>
  <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
    擔任機械工程團隊行政主控，負責每日技術文件控管與現場施工紀錄彙整；作為日商團隊與外包廠商之溝通橋樑，精準傳遞工程資訊並協助主管掌控施工進度。
  </p>
</div>
{/* 經歷 5：社區副主任 */}
<div className="relative space-y-2">
  <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
    <h4 className="text-lg font-bold">Assistant Property Operations Manager</h4>
    <span className="text-xs text-stone-500 dark:text-slate-400">2020 — 2021</span>
  </div>
  <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Property Management</p>
  <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
    負責社區總體營運、財務收支報告與廠商合約管理；作為住戶與管委會之溝通樞紐，協調各方訴求並統籌活動規劃，確保服務品質與用戶滿意度。
  </p>
</div>

  </div> {/* 結束外層容器 */}
</section>

        {/* Contact Section */}
<section id="contact" className="scroll-mt-24 space-y-6 text-center py-12 px-6 rounded-3xl border border-stone-200 dark:border-slate-700 bg-stone-100 dark:bg-slate-800 shadow-sm">
  <div className="space-y-2">
    <h3 className="text-3xl font-bold">
      Start a Project
    </h3>
  </div>

  <p className="text-base text-stone-600 dark:text-slate-300 whitespace-nowrap overflow-x-auto max-w-full px-4">
    無論是合作邀約、專案諮詢，或是單純交流想法，都非常歡迎與我聯繫。
  </p>

  <div className="pt-4">
    <a 
      href="mailto:if8mile@gmail.com" 
      className="inline-block px-8 py-4 rounded-xl font-medium bg-stone-900 text-stone-50 hover:bg-stone-800 dark:bg-stone-100 dark:text-stone-900 dark:hover:bg-stone-200 transition-colors">
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
