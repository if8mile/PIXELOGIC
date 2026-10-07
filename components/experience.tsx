'use client';

import React from 'react';
import RevealCard from '../RevealCard';

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 space-y-8">
      <div className="space-y-2">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">
          Career History
        </h2>
        <h3 className="text-2xl font-bold">Experience & Training</h3>
      </div>

      <div className="space-y-8 border-l-2 border-stone-200 dark:border-slate-800 pl-6">
        
        {/* 區塊 1：Freelancer */}
        <RevealCard>
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <h4 className="text-lg font-bold">Digital Product Creator | UI/UX Designer & Front-End Developer</h4>
              <span className="text-xs text-stone-500 dark:text-slate-400">2025 - Present</span>
            </div>
            <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Freelancer</p>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              運用 AI 協作工具與 Next.js 現代網頁技術，從產品概念、UI/UX 設計到前端實作，獨立進行數位產品開發與迭代。
            </p>
          </div>
        </RevealCard>

        {/* 區塊 2：2026 六角學院 */}
        <RevealCard>
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <h4 className="text-lg font-bold">課程－30天軟體工程師體驗營</h4>
              <span className="text-xs text-stone-500 dark:text-slate-400">2026</span>
            </div>
            <p className="text-xs font-medium text-amber-700 dark:text-violet-400">六角學院</p>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              投入密集訓練，建立前端開發基礎概念與實作現代網頁架構。透過實務任務培養程式邏輯思維與獨立解決技術問題的能力。
            </p>
          </div>
        </RevealCard>

        {/* 區塊 3：2024 六角學院 Hexo */}
        <RevealCard>
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <h4 className="text-lg font-bold">課程－Hexo 從零打造個人品牌網站</h4>
              <span className="text-xs text-stone-500 dark:text-slate-400">2024</span>
            </div>
            <p className="text-xs font-medium text-amber-700 dark:text-violet-400">六角學院</p>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              初次實作個人品牌網站，學習靜態網站生成器架構與自動化部署流程，進一步確立專注於前端網頁開發的學習目標。
            </p>
          </div>
        </RevealCard>

        {/* 區塊 4：2024 台大訓練班 */}
        <RevealCard>
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <h4 className="text-lg font-bold">課程－Python資訊系統訓練班</h4>
              <span className="text-xs text-stone-500 dark:text-slate-400">2024</span>
            </div>
            <p className="text-xs font-medium text-amber-700 dark:text-violet-400">國立臺灣大學</p>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              初探程式基礎邏輯與軟體運作環境，開啟對資訊科技與網頁開發領域的學習契機。
            </p>
          </div>
        </RevealCard>

        {/* 區塊 5：AFRY */}
        <RevealCard>
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <h4 className="text-lg font-bold">Project Operations & Executive Secretary</h4>
              <span className="text-xs text-stone-500 dark:text-slate-400">2023 - 2024</span>
            </div>
            <p className="text-xs font-medium text-amber-700 dark:text-violet-400">AFRY (Thailand) Ltd.</p>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              工程專案營運、預算資料與文件控管，支援跨國工程團隊協作。
            </p>
          </div>
        </RevealCard>

        {/* 區塊 6：GE Vernova */}
        <RevealCard>
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <h4 className="text-lg font-bold">Project Operations Manager & Executive Admin</h4>
              <span className="text-xs text-stone-500 dark:text-slate-400">2022 - 2023</span>
            </div>
            <p className="text-xs font-medium text-amber-700 dark:text-violet-400">GE Vernova</p>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              工程專案行政主管、預算資料與供應商協作，支援外籍工程團隊營運。
            </p>
          </div>
        </RevealCard>

        {/* 區塊 7：Marubeni */}
        <RevealCard>
          <div className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
              <h4 className="text-lg font-bold">Mechanical Project Assistant</h4>
              <span className="text-xs text-stone-500 dark:text-slate-400">2021 - 2022</span>
            </div>
            <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Marubeni Corporation</p>
            <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
              工程文件控管、施工紀錄整理及日商團隊與外包廠商間的資訊協調。
            </p>
          </div>
        </RevealCard>

      </div>
    </section>
  );
}