import React, { useState } from 'react';
// 💡 모바일 메뉴를 위한 Menu, X 아이콘 추가
import { Search, Bell, UserCircle, LogIn, Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; 
import BudgetModal from './BudgetModal'; 

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  // 💡 모바일 햄버거 메뉴 열림/닫힘 상태
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); 
  
  const navigate = useNavigate(); 

  const handleBudgetClick = () => {
    navigate('/'); 
    window.scrollTo(0, 0); 
    setShowBudgetModal(true); 
    setIsMobileMenuOpen(false); // 모바일 메뉴에서 클릭했을 때 드롭다운 닫기
  };

  return (
    <>
      {/* z-index를 높여 스크롤 시에도 다른 컨텐츠 위로 올라오게 설정 */}
      <nav className="w-full bg-[#FBC02D] text-white shadow-md relative z-40">
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-10 py-4 flex items-center justify-between">
          
          {/* 왼쪽: 로고 */}
          <Link to="/" className="flex items-center gap-2 cursor-pointer shrink-0 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
              <span className="text-[#FBC02D] text-xl">🥗</span>
            </div>
            {/* 모바일 화면이 너무 작을 땐 글자 숨김 */}
            <h1 className="text-2xl font-extrabold tracking-tighter hidden sm:block">자취영양사</h1>
          </Link>

          {/* 가운데: PC 화면용 메뉴 */}
          <ul className="hidden lg:flex gap-8 font-bold list-none text-sm xl:text-base items-center"> 
            <li>
              <Link to="/recipe" className="hover:text-orange-100 whitespace-nowrap transition-colors">레시피 추천</Link>
            </li>
            <li>
              <Link to="/community" className="hover:text-orange-100 whitespace-nowrap transition-colors">커뮤니티</Link>
            </li>
            <li>
              <button 
                type="button" 
                onClick={handleBudgetClick}
                className="hover:text-orange-100 whitespace-nowrap transition-colors font-bold"
              >
                적정가 한도
              </button>
            </li>
          </ul>

          {/* 오른쪽: 아이콘 및 유저 영역 */}
          <div className="flex items-center gap-2 sm:gap-3 xl:gap-6 shrink-0">
            {/* 접근성을 위한 aria-label 추가 */}
            <button aria-label="검색" className="p-1.5 hover:bg-white/20 rounded-full transition-colors hidden sm:block">
              <Search size={20} />
            </button>
            <button aria-label="알림" className="p-1.5 hover:bg-white/20 rounded-full relative transition-colors">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {isLoggedIn ? (
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 sm:px-4 py-2 rounded-full transition-all border border-white/30">
                <UserCircle size={20} />
                <span className="font-bold hidden sm:inline text-sm sm:text-base">내 정보</span>
              </button>
            ) : (
              <button className="flex items-center gap-2 bg-white/20 hover:bg-white/30 px-3 sm:px-4 py-2 rounded-full transition-all border border-white/30">
                <LogIn size={20} />
                <span className="font-bold hidden sm:inline text-sm sm:text-base">로그인</span>
              </button>
            )}

            {/* 💡 모바일 햄버거 메뉴 버튼 (lg 이하 화면에서만 표시) */}
            <button 
              aria-label="메뉴 열기"
              className="lg:hidden p-1.5 hover:bg-white/20 rounded-full transition-colors ml-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
        </div>

        {/* 💡 모바일 메뉴 드롭다운 (햄버거 버튼 클릭 시 렌더링) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-[#FBC02D] shadow-lg flex flex-col font-bold text-center border-t border-yellow-400">
            <Link 
              to="/recipe" 
              className="py-4 hover:bg-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              레시피 추천
            </Link>
            <Link 
              to="/community" 
              className="py-4 border-t border-yellow-400 hover:bg-yellow-500 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              커뮤니티
            </Link>
            <button 
              type="button" 
              onClick={handleBudgetClick}
              className="py-4 border-t border-yellow-400 hover:bg-yellow-500 transition-colors"
            >
              적정가 한도
            </button>
          </div>
        )}
      </nav>

      {/* 모달창 */}
      {showBudgetModal && <BudgetModal onClose={() => setShowBudgetModal(false)} />}
    </>
  );
};

export default Navbar;