import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// 컴포넌트 임포트
import Navbar from './Navbar';
import Home from './Home'; 
import CommunityBoard from './CommunityBoard'; 
import RecipeDetail from './RecipeDetail';

function App() {
  return (
    <Router>
      {/* flex 속성을 추가하여 내부 컨텐츠가 적어도 화면 전체 높이를 채우도록 보완 */}
      <div className="min-h-screen bg-[#FFF9E7] pb-20 flex flex-col">
        
        {/* 네비게이션 바: 상단 고정 또는 항상 렌더링되는 영역 */}
        <Navbar />

        {/* 메인 컨텐츠 영역: 시맨틱 태그인 <main>을 사용하고, flex-1로 남은 공간을 모두 차지하게 함 */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/community" element={<CommunityBoard />} />
            <Route path="/community/:id" element={<RecipeDetail />} />
            <Route path="/recipe/:id" element={<RecipeDetail />} />
            {/* 404 페이지 (예외 처리) - 잘못된 URL로 접속했을 때 보여줄 페이지 */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;