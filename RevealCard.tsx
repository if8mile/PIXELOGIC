'use client'; // Next.js 需要這行才能在瀏覽器端執行滑動監聽

import { useEffect, useRef, useState, ReactNode } from 'react';

// 定義 props 的型別
interface RevealCardProps {
  children: ReactNode;
}

export default function RevealCard({ children }: RevealCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 使用瀏覽器內建的 IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 只要浮現過一次就停止監聽，保持效能
        }
      },
      { threshold: 0.15 } // 參數 0.15 代表卡片露出 15% 時就會觸發動畫
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      // duration-700 控制動畫長度，ease-out 讓動作有自然的減速感
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8' // 還沒滑到時，透明度 0 且往下沉一點點 (translate-y-8)
      }`}
    >
      {children}
    </div>
  );
}