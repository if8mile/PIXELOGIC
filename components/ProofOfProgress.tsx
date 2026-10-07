import React from 'react';

export default function ProofOfProgress() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-12 md:py-20 text-[#1c1917] dark:text-[#f1f5f9] transition-colors duration-200">
      
      <div className="space-y-16">
        
        {/* 1. 核心理念與產品定位 */}
        <section className="space-y-6">
          <h2 className="text-xl md:text-2xl font-semibold tracking-wide border-l-2 border-zinc-900 dark:border-zinc-100 pl-4">
            1. 核心理念與產品定位
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2">創作動機</h3>
              <blockquote className="text-base font-medium mb-3 text-zinc-800 dark:text-zinc-200">
                &ldquo;很多時候我們不是失敗，只是忘記了自己的每一步都在成長。&rdquo;
              </blockquote>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                對於容易自我懷疑、或正處於人生轉換期而感到焦慮的努力者來說，傳統的 Habit Tracker 或 KPI 系統往往會帶來無形的壓力。我希望能打造一個空間，不帶批判地接住這些情緒。
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2">產品定位</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                這不是一個逼迫你打卡的待辦清單，而是一個幫助你「累積安全感」的個人成長紀錄平台。在這裡，<strong className="text-zinc-900 dark:text-zinc-100 font-semibold">沒有每日 KPI 的壓力，也沒有必須達標的次數門檻</strong>；透過將日常容易被忽略的微小行動可視化，讓使用者在焦慮時，能明確看見自己一路走來的證明。
              </p>
            </div>
          </div>
        </section>

        {/* 2. 核心機制 */}
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-l-2 border-zinc-900 dark:border-zinc-100 pl-4">
            <h2 className="text-xl md:text-2xl font-semibold tracking-wide">
              2. 核心機制：以療癒感取代破關壓力
            </h2>
            <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 w-fit">
              Healing over Grinding
            </span>
          </div>

          {/* 表格比較 */}
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-zinc-800">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-100/80 dark:bg-zinc-800/50 text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                <tr>
                  <th className="p-4 font-medium">比較面向</th>
                  <th className="p-4 font-medium">傳統習慣工具</th>
                  <th className="p-4 font-medium text-zinc-900 dark:text-zinc-100">我的成長森林</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30">
                  <td className="p-4 font-medium text-zinc-500">驅動機制</td>
                  <td className="p-4 text-zinc-600 dark:text-zinc-400">打怪練等、追求外部成就感</td>
                  <td className="p-4 font-medium text-zinc-900 dark:text-zinc-100">植物生長、專注內在平靜與療癒</td>
                </tr>
                <tr className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30">
                  <td className="p-4 font-medium text-zinc-500">心理感受</td>
                  <td className="p-4 text-zinc-600 dark:text-zinc-400">強制打卡、未達標產生焦慮</td>
                  <td className="p-4 font-medium text-zinc-900 dark:text-zinc-100">無壓累積、看見自我努力的證明</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
              <h4 className="font-medium text-base mb-1">成長可視化</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                每一次微小的行動（如閱讀、喝水、好好休息），都會化作大自然的一環（如肥料、水滴）。
              </p>
            </div>
            <div className="p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
              <h4 className="font-medium text-base mb-1">森林機制</h4>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                靠自己的能力看著種子漸漸長成大樹、匯聚成森林。讓森林接住需要被接住的人，累積安全感。
              </p>
            </div>
          </div>
        </section>

        {/* 技術架構與資料庫設計 - 3 格橫向平分對齊 */}
<div className="space-y-4">
  <h4 className="text-lg font-bold text-stone-800 dark:text-slate-200">
    技術架構與資料庫設計
  </h4>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {/* 1. Frontend */}
    <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl space-y-2">
      <span className="text-sm font-mono text-amber-700 dark:text-violet-400 font-semibold">
        Frontend
      </span>
      <h5 className="text-base font-bold">Next.js / React</h5>
      <p className="text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
        TypeScript, Tailwind CSS, Lucide Icons
      </p>
    </div>

    {/* 2. Data Storage */}
    <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl space-y-2">
      <span className="text-sm font-mono text-amber-700 dark:text-violet-400 font-semibold">
        Data Storage
      </span>
      <h5 className="text-base font-bold">Local Storage</h5>
      <p className="text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
        隱私優先、零載入延遲的本機資料持久化存取
      </p>
    </div>

    {/* 3. Deployment */}
    <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl space-y-2">
      <span className="text-sm font-mono text-amber-700 dark:text-violet-400 font-semibold">
        Deployment
      </span>
      <h5 className="text-base font-bold">Vercel</h5>
      <p className="text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
        自動化 CI/CD 部署與邊緣網路託管
      </p>
    </div>

  </div>
</div>

        {/* 4. 開發者手記 */}
        <section className="mt-20 p-8 md:p-10 rounded-2xl bg-zinc-100/70 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-widest text-zinc-400">Developer&apos;s Note</h3>
            <blockquote className="text-base md:text-lg font-medium leading-relaxed text-zinc-800 dark:text-zinc-200">
              &ldquo;不要一直想把事情做到完美，才覺得自己有點用處。你已經很努力了，你已經做得很好了。我不是在誇獎你，我是在提醒你。&rdquo;
            </blockquote>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2 border-t border-zinc-200 dark:border-zinc-800">
              這段話，是身邊朋友經歷低潮與自我懷疑時，我常常對朋友說的話，卻常常忘記對自己說。我開發「我的成長森林」，就是希望把這份溫暖轉化為具體的系統。當你覺得自己停滯不前或懷疑自己時，希望這座森林能成為你的證明，提醒你：你沒有停止前進，你已經做得很好了。
            </p>
          </div>
        </section>

      </div>
    </article>
  );
}