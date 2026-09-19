'use client';

import Image from 'next/image';
import { useState } from 'react';
import { ThemeToggle } from '@/components/ThemeToggle';

// 抽籤資料庫
const embedDatabase: Record<string, Record<string, string[]>> = {
  "大大吃": {
    "中式/台式": ["台式家常菜", "饗食天堂 旭集", "熱炒", "別偷懶給我自己煮^_^", "台灣料理", "客家料理","原住民料理", "古早味料理", "烤鴨三吃", "薑母鴨", "羊肉爐"],
    "日式": ["日式燒肉", "居酒屋", "定食", "日式家庭料理", "別偷懶給我自己煮^_^", "壽司", "拉麵/沾麵", "烏龍麵/蕎麥麵", "日式豬排", "日式鍋物", "日式咖哩", "鰻魚飯", "沖繩料理"],
    "其他異國料理": ["美式餐廳", "美式漢堡", "美式牛排", "別偷懶給我自己煮^_^", "美式炸雞", "窯烤披薩", "義大利麵", "燉飯", "義式披薩", "泰式料理", "泰北料理", "泰式火鍋", "船麵", "泰式燒烤"]
  },
  "小小吃": {
    "中式/台式": ["便當", "水餃/鍋貼", "牛肉麵", "滷肉飯", "鹹酥雞", "串燒", "別偷懶給我自己煮^_^", "i珍食/友善食光", "永和豆漿", "百元小火鍋", "水餃/鍋貼", "鍋燒意麵", "雞肉飯", "夜市", "麻辣鴨血臭豆腐", "炸的那種超導呼", "麵線", "羹麵/羹飯", "藥燉排骨", "生煎包", "擔仔麵", "肉圓", "碗粿", "蔥抓餅", "大腸包小腸", "潤餅", "炒麵", "蒸餃", "筒仔米糕", "羊肉炒麵", "滷味", "鹽水雞"],
    "日式": ["章魚燒", "關東煮", "夜市", "平價居酒屋", "別偷懶給我自己煮^_^", "日式飯糰", "i珍食/友善食光", "夜市", "迴轉壽司", "丼飯", "拉麵/沾麵", "烏龍麵/蕎麥麵", "日式小小吃好難寫信給我點意見"],
    "其他異國料理": ["漢堡", "三明治/潛艇堡", "披薩", "義大利麵", "越料", "泰料", "別偷懶給我自己煮^_^", "i珍食/友善食光", "夜市", "海南雞飯", "肉骨茶"]
  }
};

export default function Home() {
  // 抽籤互動 State
  const [currentStep, setCurrentStep] = useState(1);
  const [currentHunger, setCurrentHunger] = useState('');
  const [currentCategory, setCurrentCategory] = useState('');
  const [categories, setCategories] = useState<string[]>([]);
  const [resultName, setResultName] = useState('');
  const [, setIsCook] = useState(false);

  // 抽籤相關函式
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
      setCurrentStep(4); // 第 4 步為自己煮畫面
    } else {
      setIsCook(false);
      setResultName(randomItem);
      setCurrentStep(3); // 第 3 步為抽到店家畫面
    }
  };

  const handleSpinAgain = () => {
    executeSpin(currentHunger, currentCategory);
  };

  // 平滑捲動至指定區塊函式
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* 頂部導覽列：已加上 sticky top-0 z-50 與背景毛玻璃，捲動時會固定在上方 */}
      <header className="sticky top-0 z-50 flex justify-between items-center py-4 px-6 md:px-8 border-b border-stone-200/50 dark:border-slate-800/50 bg-stone-50/80 dark:bg-slate-950/80 backdrop-blur-md">
        <a href="/" className="text-xl font-black tracking-widest text-amber-700 dark:text-amber-500 hover:opacity-80 transition-opacity">
          PIXELOGIC.
        </a>

        <span className="hidden md:inline-block text-xs font-semibold tracking-widest text-stone-400 dark:text-slate-500 uppercase">
          Based in Taiwan
        </span>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 space-y-32 py-12">
        {/* 1. About / 主視覺 Section */}
        <section id="about" className="min-h-[calc(100vh-5rem)] flex flex-col justify-between py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end my-auto">
            
            {/* 左側：文字與按鈕區塊 */}
            <div className="lg:col-span-7 space-y-6 lg:pb-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-amber-700 dark:text-violet-400">
                    Pixel 的美感，Logic 的架構 —
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight text-stone-800 dark:text-slate-200">
                    我們以理性邏輯與感性設計，賦予數位專案獨特的高質感。
                  </p>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight pt-2">
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
                <button 
                  onClick={() => scrollToSection('experience')} 
                  className="px-6 py-3 rounded-xl font-medium text-sm text-white bg-stone-900 hover:bg-stone-800 dark:bg-violet-600 dark:hover:bg-violet-500 transition-all shadow-lg cursor-pointer"
                >
                  View Experience
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')} 
                  className="px-6 py-3 rounded-xl font-medium text-sm text-white bg-stone-900 hover:bg-stone-800 dark:bg-violet-600 dark:hover:bg-violet-500 transition-all shadow-lg cursor-pointer"
                >
                  Interactive Project
                </button>
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

          <div className="space-y-8 border-l-2 border-stone-200 dark:border-slate-800 pl-6">
            
            {/* 經歷 1 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <h4 className="text-lg font-bold">Digital Product Creator | UI/UX Designer & Front-End Developer</h4>
                <span className="text-xs text-stone-500 dark:text-slate-400">2025 — Present</span>
              </div>
              <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Freelancer</p>
              <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
                運用 AI 協作工具與 Next.js 現代網頁技術，獨立進行數位產品開發與 UI/UX 介面實作，專注於打造極簡且高效能的網頁體驗。
              </p>
            </div>

            {/* 經歷 2 */}
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

            {/* 經歷 3 */}
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

            {/* 經歷 4 */}
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

            {/* 經歷 5 */}
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

          </div>
        </section>

        {/* 3. Portfolio / 互動小工具 Section */}
        <section id="portfolio" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">Interactive Project</h2>
            <h3 className="text-2xl font-bold">What Should I Eat? 🍽️</h3>
          </div>

          <div className="max-w-xl mx-auto bg-white/70 dark:bg-slate-900/60 border border-stone-200/80 dark:border-slate-800 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-xl">
            <div className="text-center mb-6">
              <h4 className="text-xl font-extrabold text-amber-700 dark:text-violet-400 mb-1">今天吃什麼？</h4>
              <p className="text-xs text-stone-500 dark:text-slate-400">讓宇宙給你一個方向，讓你不再迷路🤚🏼✋🏼</p>
            </div>

            {/* Step 1: 飢餓程度 */}
            {currentStep === 1 && (
              <div className="space-y-3">
                <p className="font-bold text-base text-stone-800 dark:text-slate-200 text-center mb-4">Q1：今天有多餓？想怎麼吃？</p>
                <button 
                  onClick={() => handleSelectHunger('大大吃')} 
                  className="w-full py-3.5 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100/80 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer"
                >
                  🤤 大大吃（吃好一點/正餐）
                </button>
                <button 
                  onClick={() => handleSelectHunger('小小吃')} 
                  className="w-full py-3.5 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100/80 dark:bg-slate-800/80 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer"
                >
                  🤏🏼 小小吃（隨便吃吃/墊肚子）
                </button>
              </div>
            )}

            {/* Step 2: 料理大類 */}
            {currentStep === 2 && (
              <div className="space-y-3">
                <p className="font-bold text-base text-stone-800 dark:text-slate-200 text-center mb-4">
                  Q2：[ {currentHunger} ] 想吃哪一種類型？
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
                    ⬅️ 上一步
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: 抽籤結果 */}
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
                      ⬅️ 重新選分類
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: 自己煮的結果 */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-5 rounded-2xl text-center space-y-2">
                  <p className="text-lg">🚨 警告！</p>
                  <p className="text-xl font-bold text-amber-800 dark:text-amber-400">別偷懶給我自己煮^_^</p>
                  <p className="text-xs text-stone-600 dark:text-slate-300">來～我們去清冰箱，乖乖動手做飯飯～🍳</p>
                </div>
                <div className="space-y-2 pt-2">
                  <button onClick={handleSpinAgain} className="w-full py-3 px-6 rounded-xl font-medium text-stone-700 dark:text-slate-200 bg-stone-100 dark:bg-slate-800 hover:bg-stone-200 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700 transition-all shadow-sm flex items-center justify-center cursor-pointer">
                    🎲 啊你不喜歡想耍賴就再抽一次
                  </button>
                  <div className="text-center">
                    <button onClick={() => setCurrentStep(2)} className="px-5 py-2 rounded-lg text-xs font-medium text-stone-500 hover:text-stone-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors cursor-pointer">
                      ⬅️ 重新選分類
                    </button>
                  </div>
                </div>
              </div>
            )}

          </div>
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