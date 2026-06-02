import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'; // 💡 더보기 화살표 아이콘

import UploadCard from './UploadCard';
import AnalysisCard from './AnalysisCard';
import PopularPosts from './PopularPosts';

const Home = () => {
  const navigate = useNavigate();

  return (
    // 💡 App.jsx에 이미 <main>이 있으므로 <div>로 변경. 모바일 화면을 위해 반응형 여백(p-4 md:p-10) 적용
    <div className="w-full max-w-[1400px] mx-auto p-4 md:p-10 flex flex-col gap-8 md:gap-12 animate-in fade-in duration-500">
      
      {/* 상단 2분할 레이아웃 (데이터 업로드 & 영양 분석 리포트) */}
      {/* 💡 모바일은 1열, PC 화면(xl)에서는 2열로 배치되도록 그리드 반응형 강화 */}
      <section className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 w-full">
        <UploadCard />
        <AnalysisCard />
      </section>

      {/* 하단 인기 게시판 영역 (요약본) */}
      <section className="bg-[#FFEBB7] p-6 md:p-10 rounded-[40px] md:rounded-[50px] shadow-sm w-full border border-orange-100">
        
        {/* 💡 헤더 영역: 제목과 '더보기' 버튼을 양옆으로 배치 */}
        <div className="flex justify-between items-end mb-6 md:mb-8 px-2">
          <h2 className="text-2xl md:text-4xl font-black text-[#5D4037] font-sans">
            인기 게시판 🔥
          </h2>
          
          {/* 커뮤니티 페이지로 바로 이동하는 버튼 */}
          <button 
            onClick={() => {
              navigate('/community');
              window.scrollTo(0, 0);
            }}
            className="flex items-center gap-1 text-sm md:text-base font-bold text-orange-600 hover:text-orange-700 transition-colors"
          >
            더보기 <ChevronRight size={18} strokeWidth={3} />
          </button>
        </div>

        <PopularPosts />
      </section>
      
    </div>
  );
};

export default Home;