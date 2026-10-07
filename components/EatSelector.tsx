import React from 'react';

export default function EatSelector() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-8 text-[#1c1917] dark:text-[#f1f5f9] transition-colors duration-200">
      
      <div className="space-y-12">
        
        {/* 1. 核心理念與產品定位 */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide border-l-2 border-zinc-900 dark:border-zinc-100 pl-4">
            1. 產品動機與痛點解決
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2">生活痛點</h3>
              <blockquote className="text-base font-medium mb-3 text-zinc-800 dark:text-zinc-200">
                &ldquo;今天到底要吃什麼？&rdquo;
              </blockquote>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                這是每個人每天都會面臨的「選擇障礙」。看似簡單的小事，常常在幾經猶豫後耗費大量決策精力與時間，還可能因此吵架。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2">解法與定位</h3>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                將輕巧的<strong className="text-zinc-900 dark:text-zinc-100 font-semibold">遊戲化抽籤機制與意圖篩選</strong>結合，透過漸進式問答縮小範圍，幫使用者快速打破選擇困難，提供直覺、趣味且實用的生活指引。
              </p>
            </div>
          </div>
        </section>

        {/* 2. 互動體驗與特色亮點 */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide border-l-2 border-zinc-900 dark:border-zinc-100 pl-4">
            2. 互動體驗與特色亮點
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
              <h4 className="font-medium text-base md:text-lg mb-2">漸進式情境引導</h4>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                根據當下飢餓程度（大大吃／小小吃）與用餐情境，引導使用者一步步縮小範圍，找到今天最對胃口的選擇。
              </p>
            </div>
            <div className="p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
              <h4 className="font-medium text-base md:text-lg mb-2">趣味隨機抽籤</h4>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                加入動畫效果與隨機宇宙指引，降低決策的嚴肅感，轉化為日常儀式感。
              </p>
            </div>
            <div className="p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
              <h4 className="font-medium text-base md:text-lg mb-2">地圖與實體店家連結</h4>
              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                抽籤結果直接對接外部地圖 API / 地理位置查詢，讓想法能一鍵轉化為實際行動。
              </p>
            </div>
          </div>
        </section>

        {/* 3. 技術焦點 */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide border-l-2 border-zinc-900 dark:border-zinc-100 pl-4">
            3. 技術架構與資料庫設計
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60">
              <div className="text-sm font-mono text-zinc-400 mb-1">State Mgmt</div>
              <div className="text-base md:text-lg font-medium">React State</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">多步驟漸進式表單與狀態管理</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60">
              <div className="text-sm font-mono text-zinc-400 mb-1">Interactive UI</div>
              <div className="text-base md:text-lg font-medium">Tailwind CSS</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">響應式卡片流轉與微互動樣式</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60">
              <div className="text-sm font-mono text-zinc-400 mb-1">API Integration</div>
              <div className="text-base md:text-lg font-medium">Google Maps Search Link</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">一鍵帶入關鍵字跳轉地圖查詢，手機端支援開啟 Native App</div>
            </div>
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/60">
              <div className="text-sm font-mono text-zinc-400 mb-1">Architecture</div>
              <div className="text-base md:text-lg font-medium">Next.js App Router</div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">組件化架構與頁面渲染</div>
            </div>
          </div>
        </section>

      </div>
    </article>
  );
}