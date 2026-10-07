'use client';

import React, { useState } from 'react';

// 抽籤資料庫
const embedDatabase: Record<string, Record<string, string[]>> = {
  "大大吃": {
    "中式/台式": ["台式家常菜", "饗食天堂旭集", "熱炒", "別偷懶給我自己煮^_^", "台灣料理", "客家料理", "原住民料理", "古早味料理", "烤鴨三吃", "薑母鴨", "羊肉爐", "炒飯／炒麵"],
    "日式": ["日式燒肉", "居酒屋", "定食", "日式家庭料理", "別偷懶給我自己煮^_^", "壽司", "拉麵/沾麵", "烏龍麵/蕎麥麵", "日式豬排", "日式鍋物", "日式咖哩", "鰻魚飯", "沖繩料理"],
    "其他異國料理": ["美式餐廳", "美式漢堡", "美式牛排", "別偷懶給我自己煮^_^", "美式炸雞", "窯烤披薩", "義大利麵", "燉飯", "義式披薩", "泰式料理", "泰北料理", "泰式火鍋", "船麵", "泰式燒烤", "印度料理"]
  },
  "小小吃": {
    "中式/台式": ["便當", "水餃/鍋貼", "牛肉麵", "滷肉飯", "鹹酥雞", "串燒", "別偷懶給我自己煮^_^", "i珍食/友善食光", "永和豆漿", "百元小火鍋", "鍋燒意麵", "雞肉飯", "夜市", "麻辣鴨血臭豆腐", "炸的那種臭豆腐", "麵線", "羹麵/羹飯", "藥燉排骨", "生煎包", "擔仔麵", "肉圓", "碗粿", "蔥抓餅", "大腸包小腸", "潤餅", "炒麵", "蒸餃", "筒仔米糕", "羊肉炒麵", "滷味", "鹽水雞"],
    "日式": ["章魚燒", "關東煮", "夜市", "平價居酒屋", "別偷懶給我自己煮^_^", "日式飯糰", "i珍食/友善食光", "迴轉壽司", "丼飯", "拉麵/沾麵", "烏龍麵/蕎麥麵"],
    "其他異國料理": ["漢堡", "三明治/潛艇堡", "披薩", "義大利麵", "越料", "泰料", "別偷懶給我自己煮^_^", "i珍食/友善食光", "夜市", "海南雞飯", "肉骨茶"]
  }
};

export default function EatSelector() {
  const [currentStep, setCurrentStep] = useState(1);
  const [currentHunger, setCurrentHunger] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [resultName, setResultName] = useState('');
  const [, setIsCook] = useState(false);

  const handleSelectHunger = (hungerType: string) => {
    setCurrentHunger(hungerType);
    setCategories(Object.keys(embedDatabase[hungerType]));
    setCurrentStep(2);
  };

  const handleSelectCategory = (categoryName: string) => {
    setCurrentCategory(categoryName);
    executeSpin(currentHunger, categoryName);
  };

  const executeSpin = (hunger: string, category: string) => {
    const list = embedDatabase[hunger][category];
    const randomItem = list[Math.floor(Math.random() * list.length)];
    if (randomItem === "別偷懶給我自己煮^_^") {
      setIsCook(true);
      setCurrentStep(4);
    } else {
      setIsCook(false);
      setResultName(randomItem);
      setCurrentStep(3);
    }
  };

  const handleSpinAgain = () => {
    executeSpin(currentHunger, currentCategory);
  };

  return (
    <article className="max-w-4xl mx-auto px-6 py-8 text-[#1c1917] dark:text-[#f1f5f9] transition-colors duration-200 space-y-12">
      
      {/* 1. 產品動機與痛點解決 */}
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
            <h4 className="font-medium text-base mb-1">漸進式情境引導</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              根據當下飢餓程度（大大吃／小小吃）與用餐情境，引導使用者一步步縮小範圍，找到今天最對胃口的選擇。
            </p>
          </div>
          <div className="p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
            <h4 className="font-medium text-base mb-1">趣味隨機抽籤</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
              加入動畫效果與隨機宇宙指引，降低決策的嚴肅感，轉化為日常儀式感。
            </p>
          </div>
          <div className="p-5 rounded-xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white dark:bg-zinc-950">
            <h4 className="font-medium text-base mb-1">地圖與實體店家連結</h4>
            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl space-y-2">
            <span className="text-sm font-mono text-stone-400 dark:text-slate-400 font-normal">
              State Mgmt
            </span>
            <h5 className="text-base font-bold">React State</h5>
            <p className="text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
              多步驟漸進式表單與狀態管理
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl space-y-2">
            <span className="text-sm font-mono text-stone-400 dark:text-slate-400 font-normal">
              Interactive UI
            </span>
            <h5 className="text-base font-bold">Tailwind CSS</h5>
            <p className="text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
              響應式卡片流轉與微互動樣式
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl space-y-2">
            <span className="text-sm font-mono text-stone-400 dark:text-slate-400 font-normal">
              API Integration
            </span>
            <h5 className="text-base font-bold">Google Maps Search Link</h5>
            <p className="text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
              一鍵帶入關鍵字跳轉地圖查詢，手機端支援開啟 Native App
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl space-y-2">
            <span className="text-sm font-mono text-stone-400 dark:text-slate-400 font-normal">
              Architecture
            </span>
            <h5 className="text-base font-bold">Next.js App Router</h5>
            <p className="text-sm text-stone-500 dark:text-slate-400 leading-relaxed">
              組件化架構與頁面渲染
            </p>
          </div>
        </div>
      </section>

      {/* 4. 今天吃什麼？抽籤器互動主卡片 */}
      <section className="pt-6">
        <div className="max-w-xl mx-auto bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-xl">
          <div className="text-center mb-6">
            <h4 className="text-xl font-extrabold text-amber-700 dark:text-violet-400 mb-1">今天吃什麼？</h4>
            <p className="text-xs text-stone-500 dark:text-slate-400">讓宇宙給你指引，讓你不再迷路🤚🏼✋🏼</p>
          </div>

          {currentStep === 1 && (
            <div className="space-y-3">
              <p className="font-bold text-base text-stone-800 dark:text-slate-200 text-center mb-4">Q1：今天有多餓？想怎麼吃？</p>
              <button
                onClick={() => handleSelectHunger('大大吃')}
                className="w-full py-3.5 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100/80 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer"
              >
                😋 大大吃（吃好一點／正餐）
              </button>
              <button
                onClick={() => handleSelectHunger('小小吃')}
                className="w-full py-3.5 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100/80 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer"
              >
                🤏🏼 小小吃（隨便吃吃／墊肚子）
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-3">
              <p className="font-bold text-base text-stone-800 dark:text-slate-200 text-center mb-4">
                Q2： [{currentHunger}] 想吃哪一種類型？
              </p>
              <div className="space-y-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleSelectCategory(cat)}
                    className="w-full py-3.5 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100/80 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer"
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="text-center pt-2">
                <button onClick={() => setCurrentStep(1)} className="px-5 py-2 rounded-lg text-xs font-medium text-stone-500 hover:text-stone-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer">
                  上一步
                </button>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-4">
              <div className="bg-stone-50/80 dark:bg-slate-800/50 border border-stone-200 dark:border-slate-700 p-5 rounded-2xl text-center space-y-3">
                <p className="text-xs text-stone-500 dark:text-slate-400">宇宙給你的指引是：</p>
                <p className="text-xl font-bold text-amber-800 dark:text-violet-300">{resultName}</p>
                <div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(resultName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100 hover:bg-stone-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm inline-flex items-center justify-center text-sm no-underline"
                  >
                    🗺️ 一鍵開估咩
                  </a>
                </div>
              </div>
              <div className="space-y-2 pt-2">
                <button onClick={handleSpinAgain} className="w-full py-3 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer">
                  🎲 啊你不喜歡想耍賴就再抽一次
                </button>
                <div className="text-center">
                  <button onClick={() => setCurrentStep(2)} className="px-5 py-2 rounded-lg text-xs font-medium text-stone-500 hover:text-stone-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer">
                    重新選分類
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="space-y-4">
              <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-5 rounded-2xl text-center space-y-2">
                <p className="text-lg">⚠️ 警告！</p>
                <p className="text-xl font-bold text-amber-800 dark:text-amber-400">別偷懶給我自己煮^_^</p>
                <p className="text-xs text-stone-600 dark:text-slate-300">來～我們去清冰箱，乖乖動手做飯飯～</p>
              </div>
              <div className="space-y-2 pt-2">
                <button onClick={handleSpinAgain} className="w-full py-3 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer">
                  🎲 啊你不喜歡想耍賴就再抽一次
                </button>
                <div className="text-center">
                  <button onClick={() => setCurrentStep(2)} className="px-5 py-2 rounded-lg text-xs font-medium text-stone-500 hover:text-stone-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer">
                    重新選分類
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

    </article>
  );
}