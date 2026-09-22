'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ThemeToggle } from '../components/ThemeToggle';
import {
  CheckCircle2, Circle, Droplets, BookOpen, Code, Dumbbell, Briefcase,
  Smile, Sparkles, Check, TreePine, Calendar, BarChart3, Award, Plus,
  ShieldCheck, RefreshCw, Cloud
} from 'lucide-react';

// 抽籤資料庫
const embedDatabase: Record<string, Record<string, string[]>> = {
  "大大吃": {
    "中式/台式": ["台式家常菜", "饗食天堂旭集", "熱炒", "別偷懶給我自己煮^_^", "台灣料理", "客家料理", "原住民料理", "古早味料理", "烤鴨三吃", "薑母鴨", "羊肉爐"],
    "日式": ["日式燒肉", "居酒屋", "定食", "日式家庭料理", "別偷懶給我自己煮^_^", "壽司", "拉麵/沾麵", "烏龍麵/蕎麥麵", "日式豬排", "日式鍋物", "日式咖哩", "鰻魚飯", "沖繩料理"],
    "其他異國料理": ["美式餐廳", "美式漢堡", "美式牛排", "別偷懶給我自己煮^_^", "美式炸雞", "窯烤披薩", "義大利麵", "燉飯", "義式披薩", "泰式料理", "泰北料理", "泰式火鍋", "船麵", "泰式燒烤"]
  },
  "小小吃": {
    "中式/台式": ["便當", "水餃/鍋貼", "牛肉麵", "滷肉飯", "鹹酥雞", "串燒", "別偷懶給我自己煮^_^", "i珍食/友善食光", "永和豆漿", "百元小火鍋", "鍋燒意麵", "雞肉飯", "夜市", "麻辣鴨血臭豆腐", "炸的那種臭豆腐", "麵線", "羹麵/羹飯", "藥燉排骨", "生煎包", "擔仔麵", "肉圓", "碗粿", "蔥抓餅", "大腸包小腸", "潤餅", "炒麵", "蒸餃", "筒仔米糕", "羊肉炒麵", "滷味", "鹽水雞"],
    "日式": ["章魚燒", "關東煮", "夜市", "平價居酒屋", "別偷懶給我自己煮^_^", "日式飯糰", "i珍食/友善食光", "迴轉壽司", "丼飯", "拉麵/沾麵", "烏龍麵/蕎麥麵"],
    "其他異國料理": ["漢堡", "三明治/潛艇堡", "披薩", "義大利麵", "越料", "泰料", "別偷懶給我自己煮^_^", "i珍食/友善食光", "夜市", "海南雞飯", "肉骨茶"]
  }
};

// 隨機雞湯例句陣列
const initialQuotes = [
  "微小的習慣,會成就耀眼的未來。",
  "你現在的努力,正在悄悄鋪墊未來的驚喜。",
  "不要低估自己每天進步1%的力量。",
  "慢慢來,比較快;持續走,一定能到達。",
  "今天的累積,就是明天懷疑自己時最堅實的後盾。",
  "每一次的微小累積,都是未來強大的基石。",
  "慢慢來沒有關係,只要方向是對的,終會抵達。",
  "今天的疲憊是明天收穫的果實,你已經做得很好了。",
  "不需要變得跟別人一樣完美,你只需要比昨天的自己更進步一點點。",
  "每個人的配速不一樣,穩穩地走就好",
  "慢慢來,也是在往前走",
  "只要路是對的,就不怕路遠",
  "先照顧好自己的能量",
  "你已經很棒了",
  "你已經很努力了",
  "不需要比較,緩慢的步調也沒關係",
  "用自己的方式走自己的路",
  "放下倉促的心情",
  "允許一切發生",
  "不要幫傷害你的人找理由",
  "不要向有毒的人證明自己",
  "在死亡面前,一切都只是擦傷",
  "相信自己的直覺,停止善解他人的惡意",
  "生氣其實很浪費時間",
  "不用對每件事有反應",
  "你的目標是越過沼澤,而不是對付每一條鱷魚",
  "仔細看,世界會用他的方式安慰你",
  "試著把自己放回人生的第一位",
  "人生不是每一題都要解開,有些題放著,時間會直接幫你翻頁",
  "如果一張機票解不了愁,那就兩張",
  "你習以為常的小事,其實都很了不起喔!",
  "你在這個世界上最愛的人,必須要是你自己",
  "好好吃飯,好好睡覺",
  "讓別人做別人,讓自己做自己",
  "允許讓自己好好休息一下"
];

// 成長森林子元件
function GrowthForestSection() {
  const [loading, setLoading] = useState(true);
  const [savingStatus, setSavingStatus] = useState<'saved' | 'saving'>('saved');
  const [activeTab, setActiveTab] = useState<'forest' | 'proof' | 'timeline' | 'report'>('forest');
  const [allRecords, setAllRecords] = useState<any[]>([]);
  
  // 隨機雞湯 State
  const [quoteList] = useState<string[]>(initialQuotes);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [todayRecord, setTodayRecord] = useState({
    water_goal: false,
    mood: 8,
    read_book: false,
    studied: false,
    exercised: false,
    coded: false,
    job_search: false,
    custom_1: false,
    custom_1_name: '輸入自訂項目',
    custom_2: false,
    custom_2_name: '輸入自訂項目',
    custom_3: false,
    custom_3_name: '輸入自訂項目',
    custom_4: false,
    custom_4_name: '輸入自訂項目',
    note: ""
  });
  const todayStr = new Date().toLocaleDateString('en-CA');

  useEffect(() => {
    fetchAllData();
  }, []);

  function fetchAllData() {
    try {
      const localData = localStorage.getItem('growth_forest_records');
      if (localData) {
        const parsed = JSON.parse(localData);
        setAllRecords(parsed);
        const todayFound = parsed.find((r: any) => r.record_date === todayStr);
        if (todayFound) setTodayRecord(todayFound);
      }
    } catch (error) {
      console.error('載入資料失敗：', error);
    } finally {
      setLoading(false);
    }
  }

  function updateRecord(updatedFields: Partial<typeof todayRecord>) {
    const newRecord = { ...todayRecord, ...updatedFields };
    setTodayRecord(newRecord);
    setSavingStatus('saving');
    try {
      const localData = localStorage.getItem('growth_forest_records');
      let parsed = localData ? JSON.parse(localData) : [];
      const index = parsed.findIndex((r: any) => r.record_date === todayStr);
      if (index >= 0) {
        parsed[index] = { record_date: todayStr, ...newRecord };
      } else {
        parsed.unshift({ record_date: todayStr, ...newRecord });
      }
      localStorage.setItem('growth_forest_records', JSON.stringify(parsed));
      setAllRecords(parsed);
      setSavingStatus('saved');
    } catch (error) {
      console.error('儲存紀錄失敗：', error);
      setSavingStatus('saved');
    }
  }

  const getRandomQuote = () => {
    let nextIdx = Math.floor(Math.random() * quoteList.length);
    if (nextIdx === currentQuoteIndex && quoteList.length > 1) {
      nextIdx = (nextIdx + 1) % quoteList.length;
    }
    setCurrentQuoteIndex(nextIdx);
  };

  const totalStudied = allRecords.filter(r => r.studied).length;
  const totalCoded = allRecords.filter(r => r.coded).length;
  const totalRead = allRecords.filter(r => r.read_book).length;
  const totalJobSearch = allRecords.filter(r => r.job_search).length;
  const totalExercised = allRecords.filter(r => r.exercised).length;
  const totalWater = allRecords.filter(r => r.water_goal).length;
  const totalCustom1 = allRecords.filter(r => r.custom_1).length;
  const totalCustom2 = allRecords.filter(r => r.custom_2).length;
  const totalCustom3 = allRecords.filter(r => r.custom_3).length;
  const totalCustom4 = allRecords.filter(r => r.custom_4).length;

  function getPlantStage(count: number) {
    if (count === 0) return { name: '尚未種植', emoji: '🫘' };
    if (count >= 300) return { name: '巨樹', emoji: '🌳' };
    if (count >= 100) return { name: '大樹', emoji: '🌲' };
    if (count >= 30) return { name: '小樹', emoji: '🌴' };
    if (count >= 10) return { name: '幼苗', emoji: '🌱' };
    return { name: '種子期', emoji: '🫘' };
  }

  function calculateStreak() {
    let streak = 0;
    const today = new Date();
    for (let i = 0; i < allRecords.length; i++) {
      const checkDate = new Date();
      checkDate.setDate(today.getDate() - i);
      const dateStr = checkDate.toISOString().split('T')[0];
      const found = allRecords.find(r => r.record_date === dateStr);
      if (found && (found.studied || found.coded || found.read_book ||
        found.exercised || found.job_search || found.water_goal || found.custom_1 ||
        found.custom_2 || found.custom_3 || found.custom_4)) {
        streak++;
      } else if (i > 0) {
        break;
      }
    }
    return streak;
  }

  const currentStreak = calculateStreak();

  if (loading) {
    return (
      <div className="min-h-[300px] flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-200 rounded-3xl">
        載入中... 成長森林準備中...
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-emerald-50/80 via-teal-50/50 to-cyan-50/80 dark:from-slate-900 dark:via-emerald-950/30 dark:to-slate-900 p-6 md:p-8 rounded-3xl text-slate-800 dark:text-slate-100 relative shadow-xl border border-emerald-100 dark:border-slate-800 transition-colors">
      {/* 右上角: 本機儲存狀態 */}
      <div className="flex items-center gap-2 flex-wrap justify-center mb-4 md:absolute md:top-6 md:right-6 md:mb-0 md:justify-end z-10">
        <div className="flex items-center gap-1.5 bg-white/95 dark:bg-slate-800/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm border border-emerald-100 dark:border-slate-700 text-xs font-medium text-emerald-800 dark:text-emerald-300">
          {savingStatus === 'saving' ? (
            <>
              <Cloud className="w-4 h-4 text-amber-500 animate-pulse" />
              <span>儲存中...</span>
            </>
          ) : (
            <>
              <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>已儲存在本機</span>
            </>
          )}
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        {/* 標題與導覽列 */}
        <div className="text-center space-y-2 pt-4">
          <h3 className="text-2xl font-bold tracking-tight text-emerald-900 dark:text-emerald-300 flex items-center justify-center gap-2">
            <TreePine className="w-7 h-7 text-emerald-600 dark:text-emerald-400" /> 成長森林
          </h3>
          <p className="text-sm text-emerald-700 dark:text-emerald-400/80">
            今天是{todayStr}，你今天也很努力了喔！
          </p>
        </div>

        {/* 溫馨陪伴風隱私聲明小卡 */}
        <div className="bg-emerald-900/5 dark:bg-emerald-500/10 border border-emerald-200/60 dark:border-emerald-500/20 rounded-2xl p-4 flex items-start gap-3 backdrop-blur-sm">
          <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-emerald-900/80 dark:text-emerald-200/90 leading-relaxed">
            <span className="font-semibold text-emerald-900 dark:text-emerald-300">Nara的溫馨提醒：</span>
            這是由Nara親手打造的個人成長森林。你的所有紀錄與心事都僅存放在你的裝置中，是你自己的秘密基地，請安心灌溉。
          </div>
        </div>

        {/* 頁籤切換按鈕 */}
        <div className="flex justify-center gap-2 bg-white/80 dark:bg-slate-800/80 p-1.5 rounded-2xl shadow-sm border border-emerald-100 dark:border-slate-700 max-w-md mx-auto">
          <button
            onClick={() => setActiveTab('forest')}
            className={`flex-1 py-2 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center ${activeTab === 'forest' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700'}`}
          >
            <span>森林</span>
            <span>走走</span>
          </button>
          <button
            onClick={() => setActiveTab('proof')}
            className={`flex-1 py-2 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center ${activeTab === 'proof' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700'}`}
          >
            <span>進度</span>
            <span>說明</span>
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`flex-1 py-2 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center ${activeTab === 'timeline' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700'}`}
          >
            <span>努力</span>
            <span>足跡</span>
          </button>
          <button
            onClick={() => setActiveTab('report')}
            className={`flex-1 py-2 px-1 rounded-xl text-xs sm:text-sm font-medium transition-all flex flex-col sm:flex-row items-center justify-center ${activeTab === 'report' ? 'bg-emerald-600 text-white shadow' : 'text-slate-600 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-700'}`}
          >
            <span>成就</span>
            <span>滿滿</span>
          </button>
        </div>

        {/* === PAGE 1: 森林打卡 === */}
        {activeTab === 'forest' && (
          <div className="space-y-6 animate-fadeIn">
            {/* 心情滑桿 */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur shadow-sm rounded-2xl p-6 border border-emerald-100 dark:border-slate-700 space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                  <Smile className="w-5 h-5 text-amber-500" /> 今日心情指數
                </span>
                <span className="text-lg font-bold text-amber-600 dark:text-amber-400">{todayRecord.mood} 分</span>
              </div>
              <input
                type="range" min="1" max="10" step="1"
                value={todayRecord.mood}
                onChange={(e) => updateRecord({ mood: Number(e.target.value) })}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* 習慣打卡區 */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur shadow-sm rounded-2xl p-6 border border-emerald-100 dark:border-slate-700 space-y-4">
              <h4 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-2">今日森林灌溉</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {/* 休息 */}
                <button
                  onClick={() => updateRecord({ studied: !todayRecord.studied })}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${todayRecord.studied ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="flex items-center gap-2 font-medium"><Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" /> 好好休息／放鬆</span>
                  {todayRecord.studied ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                </button>
                {/* 喝水 */}
                <button
                  onClick={() => updateRecord({ job_search: !todayRecord.job_search })}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${todayRecord.job_search ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="flex items-center gap-2 font-medium"><Droplets className="w-5 h-5 text-indigo-500 dark:text-indigo-400" /> 喝水</span>
                  {todayRecord.job_search ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                </button>
                {/* 寫作業/工作 */}
                <button
                  onClick={() => updateRecord({ coded: !todayRecord.coded })}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${todayRecord.coded ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="flex items-center gap-2 font-medium"><Code className="w-5 h-5 text-teal-600 dark:text-teal-400" /> 寫作業／工作</span>
                  {todayRecord.coded ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                </button>
                {/* 閱讀 */}
                <button
                  onClick={() => updateRecord({ read_book: !todayRecord.read_book })}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${todayRecord.read_book ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="flex items-center gap-2 font-medium"><BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> 閱讀／學習</span>
                  {todayRecord.read_book ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                </button>
                {/* 運動 */}
                <button
                  onClick={() => updateRecord({ exercised: !todayRecord.exercised })}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${todayRecord.exercised ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="flex items-center gap-2 font-medium"><Dumbbell className="w-5 h-5 text-orange-500 dark:text-orange-400" /> 運動／散步</span>
                  {todayRecord.exercised ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                </button>
                {/* 求職 */}
                <button
                  onClick={() => updateRecord({ water_goal: !todayRecord.water_goal })}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${todayRecord.water_goal ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
                >
                  <span className="flex items-center gap-2 font-medium"><Briefcase className="w-5 h-5 text-blue-500 dark:text-blue-400" /> 求職</span>
                  {todayRecord.water_goal ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                </button>
                {/* 自訂項目 1 */}
                <div className={`flex items-center justify-between p-3 rounded-xl border transition-all ${todayRecord.custom_1 ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'}`}>
                  <div className="flex items-center gap-2 flex-1 mr-2">
                    <Plus className="w-5 h-5 text-cyan-500 shrink-0" />
                    <input
                      type="text"
                      value={todayRecord.custom_1_name}
                      onFocus={() => { if (todayRecord.custom_1_name === '輸入自訂項目') updateRecord({ custom_1_name: '' }) }}
                      onChange={(e) => updateRecord({ custom_1_name: e.target.value })}
                      className="bg-transparent border-b border-dashed border-slate-300 dark:border-slate-600 focus:border-emerald-500 focus:outline-none text-sm font-medium w-full text-slate-800 dark:text-slate-200 px-1 py-0.5"
                    />
                  </div>
                  <button onClick={() => updateRecord({ custom_1: !todayRecord.custom_1 })} className="shrink-0 p-1">
                    {todayRecord.custom_1 ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                  </button>
                </div>
                {/* 自訂項目 2 */}
                <div className={`flex items-center justify-between p-3 rounded-xl border transition-all ${todayRecord.custom_2 ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'}`}>
                  <div className="flex items-center gap-2 flex-1 mr-2">
                    <Plus className="w-5 h-5 text-rose-500 shrink-0" />
                    <input
                      type="text"
                      value={todayRecord.custom_2_name}
                      onFocus={() => { if (todayRecord.custom_2_name === '輸入自訂項目') updateRecord({ custom_2_name: '' }) }}
                      onChange={(e) => updateRecord({ custom_2_name: e.target.value })}
                      className="bg-transparent border-b border-dashed border-slate-300 dark:border-slate-600 focus:border-emerald-500 focus:outline-none text-sm font-medium w-full text-slate-800 dark:text-slate-200 px-1 py-0.5"
                    />
                  </div>
                  <button onClick={() => updateRecord({ custom_2: !todayRecord.custom_2 })} className="shrink-0 p-1">
                    {todayRecord.custom_2 ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                  </button>
                </div>
                {/* 自訂項目 3 */}
                <div className={`flex items-center justify-between p-3 rounded-xl border transition-all ${todayRecord.custom_3 ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'}`}>
                  <div className="flex items-center gap-2 flex-1 mr-2">
                    <Plus className="w-5 h-5 text-amber-500 shrink-0" />
                    <input
                      type="text"
                      value={todayRecord.custom_3_name}
                      onFocus={() => { if (todayRecord.custom_3_name === '輸入自訂項目') updateRecord({ custom_3_name: '' }) }}
                      onChange={(e) => updateRecord({ custom_3_name: e.target.value })}
                      className="bg-transparent border-b border-dashed border-slate-300 dark:border-slate-600 focus:border-emerald-500 focus:outline-none text-sm font-medium w-full text-slate-800 dark:text-slate-200 px-1 py-0.5"
                    />
                  </div>
                  <button onClick={() => updateRecord({ custom_3: !todayRecord.custom_3 })} className="shrink-0 p-1">
                    {todayRecord.custom_3 ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                  </button>
                </div>
                {/* 自訂項目 4 */}
                <div className={`flex items-center justify-between p-3 rounded-xl border transition-all ${todayRecord.custom_4 ? 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-700' : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700'}`}>
                  <div className="flex items-center gap-2 flex-1 mr-2">
                    <Plus className="w-5 h-5 text-violet-500 shrink-0" />
                    <input
                      type="text"
                      value={todayRecord.custom_4_name}
                      onFocus={() => { if (todayRecord.custom_4_name === '輸入自訂項目') updateRecord({ custom_4_name: '' }) }}
                      onChange={(e) => updateRecord({ custom_4_name: e.target.value })}
                      className="bg-transparent border-b border-dashed border-slate-300 dark:border-slate-600 focus:border-emerald-500 focus:outline-none text-sm font-medium w-full text-slate-800 dark:text-slate-200 px-1 py-0.5"
                    />
                  </div>
                  <button onClick={() => updateRecord({ custom_4: !todayRecord.custom_4 })} className="shrink-0 p-1">
                    {todayRecord.custom_4 ? <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" /> : <Circle className="w-6 h-6 text-slate-300 dark:text-slate-600" />}
                  </button>
                </div>
              </div>
            </div>

            {/* 筆記區 */}
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur shadow-sm rounded-2xl p-6 border border-emerald-100 dark:border-slate-700 space-y-3">
              <label className="font-semibold text-emerald-900 dark:text-emerald-300 block">今日心得與筆記</label>
              <textarea
                value={todayRecord.note}
                onChange={(e) => updateRecord({ note: e.target.value })}
                placeholder="今天辛苦你了～要寫下你今天的心情、收穫、小感謝或想對自己說的話嗎?"
                className="w-full h-28 p-3 rounded-xl border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm bg-slate-50/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-100"
              />
            </div>
          </div>
        )}

        {/* === PAGE 2: 進度證明 === */}
        {activeTab === 'proof' && (
          <div className="space-y-6 animate-fadeIn">
            {/* 溫和卡片 1 */}
            <div className="bg-gradient-to-r from-emerald-500/80 to-teal-600/80 dark:from-emerald-950/60 dark:to-teal-900/60 rounded-2xl p-6 text-white text-center space-y-2 shadow-md border border-emerald-300/30 dark:border-emerald-800/30 backdrop-blur">
              <h4 className="text-xl font-bold">當你懷疑自己時，請看看這些你努力過的證明</h4>
              <p className="text-emerald-100 dark:text-emerald-200/80 text-sm">你已經很棒了喔！</p>
            </div>
            {/* 溫和卡片 2 */}
            <div className="bg-gradient-to-r from-amber-400/80 to-orange-400/80 dark:from-amber-950/60 dark:to-orange-900/60 rounded-2xl p-5 text-white shadow-sm flex items-center justify-between border border-amber-300/30 dark:border-amber-800/30 backdrop-blur">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔥</span>
                <div>
                  <div className="text-sm font-medium text-amber-100 dark:text-amber-200/80">目前連續打卡</div>
                  <div className="text-2xl font-bold">{currentStreak} 天</div>
                </div>
              </div>
              <div className="text-right text-xs bg-white/20 dark:bg-white/10 px-3 py-1.5 rounded-xl backdrop-blur">
                持續發光中，森林正在茁壯
              </div>
            </div>
            {/* 植物卡片網格 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">😌 好好休息／放鬆</span>
                  <span className="text-xl">{getPlantStage(totalStudied).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalStudied} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">次</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalStudied).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">💧 喝水</span>
                  <span className="text-xl">{getPlantStage(totalJobSearch).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalJobSearch} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">次</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalJobSearch).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">✍🏼 寫作業／工作</span>
                  <span className="text-xl">{getPlantStage(totalCoded).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalCoded} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">次</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalCoded).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">📖 閱讀／學習</span>
                  <span className="text-xl">{getPlantStage(totalRead).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalRead} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">天</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalRead).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">💪🏼 運動／散步</span>
                  <span className="text-xl">{getPlantStage(totalExercised).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalExercised} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">天</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalExercised).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300">💻 求職</span>
                  <span className="text-xl">{getPlantStage(totalWater).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalWater} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">天</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalWater).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300 truncate mr-2">{todayRecord.custom_1_name}</span>
                  <span className="text-xl">{getPlantStage(totalCustom1).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalCustom1} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">次</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段:{getPlantStage(totalCustom1).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300 truncate mr-2">{todayRecord.custom_2_name}</span>
                  <span className="text-xl">{getPlantStage(totalCustom2).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalCustom2} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">次</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalCustom2).name}</div>
              </div>
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300 truncate mr-2">{todayRecord.custom_3_name}</span>
                  <span className="text-xl">{getPlantStage(totalCustom3).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">{totalCustom3} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">次</span></div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">階段：{getPlantStage(totalCustom3).name}</div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white/90 dark:bg-slate-800/90 p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-emerald-900 dark:text-emerald-300 truncate mr-2">{todayRecord.custom_4_name}</span>
                  <span className="text-xl">{getPlantStage(totalCustom4).emoji}</span>
                </div>
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400">
                  {totalCustom4} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">次</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg inline-block">
                  階段:{getPlantStage(totalCustom4).name}
                </div>
              </div>
              {/* 雞湯卡片 */}
              <div className="sm:col-span-2 bg-gradient-to-r from-emerald-500/80 to-teal-600/80 dark:from-emerald-950/60 dark:to-teal-900/60 text-white p-5 rounded-2xl border border-emerald-300/30 dark:border-emerald-800/30 shadow-md backdrop-blur flex flex-col transition-all">
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={getRandomQuote}
                    className="px-2.5 py-1 bg-white/20 hover:bg-white/30 dark:bg-slate-800/40 dark:hover:bg-slate-800/60 rounded-lg text-xs font-medium backdrop-blur transition-all flex items-center gap-1 cursor-pointer"
                  >
                    <RefreshCw className="w-3 h-3" /> 換一句
                  </button>
                </div>
                <p className="text-sm md:text-base font-medium leading-relaxed my-auto text-emerald-50 text-center">
                  「{quoteList[currentQuoteIndex]}」
                </p>
              </div>
            </div>
          </div>
        )}

        {/* === PAGE 3: 努力足跡 === */}
        {activeTab === 'timeline' && (
          <div className="space-y-6 animate-fadeIn">
            <h4 className="text-lg font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> 歷史足跡時間軸
            </h4>
            {allRecords.length === 0 ? (
              <div className="text-center py-12 text-slate-400 dark:text-slate-500 bg-white/50 dark:bg-slate-800/50 rounded-2xl">
                尚無歷史打卡紀錄，快去森林打卡灌溉吧！
              </div>
            ) : (
              <div className="space-y-4">
                {allRecords.map((record) => (
                  <div key={record.id || record.record_date} className="bg-white/90 dark:bg-slate-800/90 backdrop-blur p-5 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-3">
                    <div className="flex items-center justify-between border-b border-emerald-50 dark:border-slate-700/50 pb-2">
                      <span className="font-bold text-emerald-900 dark:text-emerald-300">{record.record_date}</span>
                      <span className="text-xs font-medium bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-full">
                        心情:{record.mood}分
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs">
                      {record.relax && <span className="bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 px-2.5 py-1 rounded-lg font-medium">好好休息／放鬆</span>}
                      {record.water && <span className="bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 px-2.5 py-1 rounded-lg font-medium">喝水</span>}
                      {record.work && <span className="bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 px-2.5 py-1 rounded-lg font-medium">寫作業／工作</span>}
                      {record.lerned && <span className="bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 px-2.5 py-1 rounded-lg font-medium">閱讀／學習</span>}
                      {record.exercised && <span className="bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 px-2.5 py-1 rounded-lg font-medium">運動／散步</span>}
                      {record.job_serch && <span className="bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 px-2.5 py-1 rounded-lg font-medium">求職</span>}
                      {record.custom_1 && <span className="bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 px-2.5 py-1 rounded-lg font-medium">{record.custom_1_name}</span>}
                      {record.custom_2 && <span className="bg-cyan-50 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-300 px-2.5 py-1 rounded-lg font-medium">{record.custom_2_name}</span>}
                      {record.custom_3 && <span className="bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-lg font-medium">{record.custom_3_name}</span>}
                      {record.custom_4 && <span className="bg-violet-50 dark:bg-violet-950/50 text-violet-700 dark:text-violet-300 px-2.5 py-1 rounded-lg font-medium">{record.custom_4_name}</span>}
                    </div>
                    {record.note && (
                      <p className="text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
                        {record.note}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* === PAGE 4: 成就滿滿 === */}
        {activeTab === 'report' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur p-6 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-3">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /> 成長週報摘要
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                本週累積總紀錄天數: <span className="font-bold text-emerald-700 dark:text-emerald-400">{allRecords.length}天</span>
              </p>
              <div className="p-3 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-emerald-200 rounded-xl text-sm font-medium">
                你正在穩定成長中,每一步都有跡可循!
              </div>
            </div>
            <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur p-6 rounded-2xl border border-emerald-100 dark:border-slate-700 shadow-sm space-y-4">
              <h4 className="font-bold text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" /> 成就徽章解鎖
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border border-emerald-100 dark:border-slate-700 bg-emerald-50/50 dark:bg-emerald-950/30 flex items-center gap-3">
                  <span className="text-2xl">🌱</span>
                  <div>
                    <div className="text-sm font-bold text-emerald-900 dark:text-emerald-300">初露頭角</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">完成第一筆森林灌溉紀錄</div>
                  </div>
                </div>
                <div className="p-3 rounded-xl border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 flex items-center gap-3 opacity-60">
                  <span className="text-2xl">🔥</span>
                  <div>
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300">連續發光</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">達成連續打卡7天(目前{currentStreak}天)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// 主頁面元件
export default function Home() {
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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

      <main className="max-w-6xl mx-auto px-6 space-y-32 py-12">
        {/* 1. About/主視覺 Section */}
        <section id="about" className="min-h-[calc(100vh-5rem)] flex flex-col justify-between py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end my-auto">
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
                  Hi, I'm <span className="text-amber-700 dark:text-violet-400">Nara</span>.
                </h1>
                <p className="text-xl md:text-2xl font-medium text-stone-600 dark:text-slate-300">
                  Bridging ideas and reality with thoughtful design.
                </p>
              </div>
              <p className="max-w-2xl text-base text-stone-600 dark:text-slate-400 leading-relaxed">
                從跨國專案營運到數位產品創作，我習慣用嚴謹的邏輯拆解問題，再用簡潔的介面與程式將想法實現。熱衷於探索AI協作開發與極簡視覺，致力於打造直覺且富有價值的數位體驗。
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

        {/* 2. Experience/經歷 Section */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">Career History</h2>
            <h3 className="text-2xl font-bold">Experience</h3>
          </div>
          <div className="space-y-8 border-l-2 border-stone-200 dark:border-slate-800 pl-6">
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <h4 className="text-lg font-bold">Digital Product Creator | UI/UX Designer & Front-End Developer</h4>
                <span className="text-xs text-stone-500 dark:text-slate-400">2025 - Present</span>
              </div>
              <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Freelancer</p>
              <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
                運用 AI 協作工具與 Next.js 現代網頁技術，獨立進行數位產品開發與 UI/UX 介面實作，專注於打造極簡且高效能的網頁體驗。
              </p>
            </div>
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <h4 className="text-lg font-bold">Project Operations & Executive Secretary</h4>
                <span className="text-xs text-stone-500 dark:text-slate-400">2023 - 2024</span>
              </div>
              <p className="text-xs font-medium text-amber-700 dark:text-violet-400">AFRY (Thailand) Ltd.</p>
              <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
                統籌工程專案辦公室營運與預算數據維護，執行嚴謹的文件版控 （Document Control），並支援外籍工程團隊在地化營運，維護跨國團隊高效合作。
              </p>
            </div>
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <h4 className="text-lg font-bold">Project Operations Manager & Executive Admin</h4>
                <span className="text-xs text-stone-500 dark:text-slate-400">2022 - 2023</span>
              </div>
              <p className="text-xs font-medium text-amber-700 dark:text-violet-400">GE Vernova</p>
              <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
                擔任 GE 通霄電廠專案行政主管，運用數據分析輔助管理層預算維護與營運決策；優化供應商採購流程並統籌外籍工程團隊後勤，顯著提升跨國團隊合作效率。
              </p>
            </div>
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <h4 className="text-lg font-bold">Mechanical Project Assistant</h4>
                <span className="text-xs text-stone-500 dark:text-slate-400">2021 - 2022</span>
              </div>
              <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Marubeni Corporation</p>
              <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
                擔任機械工程團隊行政，負責每日技術文件控管與現場施工紀錄彙整；作為日商團隊與外包廠商之溝通橋樑，精準傳遞工程資訊並協助主管掌握施工進度。
              </p>
            </div>
            <div className="relative space-y-2">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-amber-700 dark:bg-violet-500 border-4 border-stone-50 dark:border-slate-950"></div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                <h4 className="text-lg font-bold">Assistant Property Operations Manager</h4>
                <span className="text-xs text-stone-500 dark:text-slate-400">2020 - 2021</span>
              </div>
              <p className="text-xs font-medium text-amber-700 dark:text-violet-400">Property Management</p>
              <p className="text-sm text-stone-600 dark:text-slate-400 leading-relaxed">
                負責社區總體營運、財務收支報告與廠商合約管理；作為住戶與管委會之溝通樞紐，協調各方訴求並統籌活動規劃，確保服務品質與住戶滿意度。
              </p>
            </div>
          </div>
        </section>

        {/* 3. Portfolio/互動小工具 Section */}
        <section id="portfolio" className="scroll-mt-24 space-y-12">
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">Interactive Project</h2>
            <h3 className="text-2xl font-bold">幫助使用者透過這個屬於自己的秘密基地累積打卡證明建立成就感、自信心與安全感，希望大家不要忽略自己每天的小小努力。</h3>
          </div>

          {/* 成長森林 */}
          <GrowthForestSection />

          {/* What Should I Eat 抽籤工具 */}
          <div className="space-y-2">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-700 dark:text-violet-400">Interactive Project</h2>
            <h3 className="text-2xl font-bold">幫大（ㄗˋ）家（ㄐㄧˇ）解開世紀難題</h3>
          </div>
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

        {/* Contact Section */}
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