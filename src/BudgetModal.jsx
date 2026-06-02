import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { communityPosts } from './data';

const BudgetModal = ({ onClose }) => {
  const [budget, setBudget] = useState(8000);
  const navigate = useNavigate();

  const finalRecommendations = communityPosts
    .filter(post => post.category === '레시피' && post.price <= budget);

  const handleRecipeClick = (post) => {
    onClose();
    navigate(`/community/${post.id}`);
    window.scrollTo(0, 0);
  };

  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-[#FFF9E7] w-full max-w-2xl rounded-[40px] p-8 shadow-2xl animate-in zoom-in duration-200"
        onClick={handleModalClick}
      >
        <h2 className="text-3xl font-black text-center text-[#5D4037] mb-8">[적정가 한도 설정]</h2>

        <div className="mb-8 px-4">
          <input
            type="range" min="0" max="100000" step="1000"
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer accent-[#8D6E63]"
          />
          <div className="flex justify-between text-gray-800 font-bold mt-2 px-1 text-sm">
            <span>0</span>
            <span>100,000</span>
          </div>
        </div>

        <div className="flex justify-center mb-10">
          <div className="bg-white px-8 py-3 rounded-full shadow-[0_0_20px_rgba(251,192,45,0.4)] border border-orange-100">
            <span className="text-xl font-bold text-gray-800">
              내가 설정한 금액: <span className="text-[#A1887F] text-2xl ml-1">{budget.toLocaleString()}원</span>
            </span>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="font-bold text-gray-800 mb-4">이 한도 내에서 추천하는 메뉴들:</h3>
          
          {finalRecommendations.length > 0 ? (
            <div className="flex flex-col gap-3 max-h-[300px] overflow-y-auto pr-2 scrollbar-hide">
              {finalRecommendations.map((post) => (
                <div 
                  key={post.id} 
                  onClick={() => handleRecipeClick(post)}
                  className="bg-white p-3 rounded-2xl shadow-sm border border-orange-50 flex items-center gap-4 cursor-pointer hover:bg-orange-50 transition-all group"
                >
                  {/* 💡 이미지 조건부 처리: 이미지가 없으면 회색 박스를 보여줍니다. */}
                  {post.img ? (
                    <img src={post.img} alt={post.title} className="w-20 h-20 rounded-xl object-cover" />
                  ) : (
                    <div className="w-20 h-20 rounded-xl bg-gray-100 flex items-center justify-center text-[10px] text-gray-400 p-1 text-center">
                      이미지 없음
                    </div>
                  )}
                  
                  <div className="flex flex-col justify-center flex-grow min-w-0">
                    <p className="font-extrabold text-gray-800 text-sm truncate">{post.title}</p>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">{post.content}</p>
                    <p className="text-[10px] text-orange-400 font-bold mt-1">by {post.author} | {post.price?.toLocaleString()}원</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="min-h-[180px] bg-white rounded-2xl border border-orange-50 flex flex-col items-center justify-center text-gray-500">
              <span className="text-3xl mb-2">🤔</span>
              <p className="font-bold text-sm">해당 금액으로 만들 수 있는 레시피가 없어요.</p>
            </div>
          )}
        </div>

        <div className="flex justify-center gap-4">
          <button onClick={onClose} className="px-10 py-3 rounded-full font-bold text-white bg-gray-400 hover:bg-gray-500 transition-colors">취소</button>
          <button onClick={onClose} className="px-10 py-3 rounded-full font-bold text-white bg-[#D67A3B] hover:bg-[#C06020] transition-colors shadow-md">설정 완료</button>
        </div>
      </div>
    </div>
  );
};

export default BudgetModal;