import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MessageCircle, User, ArrowLeft, Send } from 'lucide-react';

// 💡 1. 통합 데이터 베이스(data.js)를 불러옵니다.
import { communityPosts } from './data';

const RecipeDetail = () => {
  const { id } = useParams(); // 주소창에서 id를 가져옵니다.
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 💡 2. 가져온 id와 일치하는 데이터를 찾습니다.
  const recipeData = communityPosts.find(post => post.id.toString() === id);

  // 💡 3. 데이터가 없을 때를 방어하는 코드
  if (!recipeData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-2xl font-bold text-gray-500 mb-4">게시글을 찾을 수 없습니다. 🤔</h2>
        <button onClick={() => navigate(-1)} className="px-6 py-2 bg-orange-400 text-white rounded-full font-bold">뒤로 가기</button>
      </div>
    );
  }

  // 데이터가 확인되었으니 댓글창을 위한 State를 연결합니다.
  const [inputText, setInputText] = useState('');
  const [commentList, setCommentList] = useState(recipeData.comments || []);

  const handleAddComment = () => {
    if (inputText.trim() === '') return; 
    const newComment = {
      id: Date.now(), 
      user: "나(현재 유저)", 
      text: inputText,
      rating: 5 
    };
    setCommentList([...commentList, newComment]);
    setInputText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleAddComment();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 pt-10 animate-in fade-in duration-300">
      
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-gray-500 mb-6 hover:text-orange-600 transition-colors font-bold">
        <ArrowLeft size={20} /> <span>목록으로 돌아가기</span>
      </button>

      <div className="bg-white rounded-[30px] sm:rounded-[40px] shadow-sm border border-orange-50 overflow-hidden">
        
        {/* 💡 수정된 부분: 이미지가 존재하고 빈 문자열이 아닐 때만 렌더링 */}
        {recipeData.img && recipeData.img.length > 0 ? (
          <img src={recipeData.img} alt={recipeData.title} className="w-full h-64 sm:h-80 object-cover" />
        ) : (
          <div className="w-full h-64 sm:h-80 bg-gray-100 flex items-center justify-center text-gray-400 font-bold">
            이미지가 없는 게시글입니다.
          </div>
        )}
        
        <div className="p-6 sm:p-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black text-gray-800 mb-2">{recipeData.title}</h1>
              <div className="flex items-center gap-3 text-sm sm:text-base text-gray-500 font-medium">
                <span className="flex items-center gap-1 text-orange-400 font-bold">
                  <Star size={18} fill="currentColor" /> {recipeData.rating}
                </span>
                <span>|</span>
                <span className="flex items-center gap-1"><User size={16} /> {recipeData.author}</span>
              </div>
            </div>
            
            {recipeData.category === '레시피' && (
              <div className="text-xl sm:text-2xl font-bold text-orange-600 bg-orange-50 px-4 py-2 rounded-xl">
                예상 비용: {(recipeData.price || 0).toLocaleString()}원
              </div>
            )}
          </div>

          <hr className="my-8 border-gray-100" />
          
          <div className="text-gray-700 leading-relaxed text-base sm:text-lg mb-10 break-keep">
            {recipeData.content}
          </div>

          <div className="bg-[#FFF9E7]/50 rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <MessageCircle size={22} /> 댓글 ({commentList.length})
            </h3>

            <div className="space-y-4 sm:space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
              {commentList.map(comment => (
                <div key={comment.id} className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-orange-50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-gray-800 text-sm sm:text-base">{comment.user}</span>
                    <div className="flex text-yellow-400">
                      {[...Array(comment.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">{comment.text}</p>
                </div>
              ))}
            </div>

            <div className="relative flex items-center">
              <input 
                type="text" 
                placeholder="칭찬 한마디를 남겨주세요!" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown} 
                className="w-full p-4 pr-16 rounded-2xl border border-orange-100 focus:outline-none focus:border-orange-300 focus:ring-2 focus:ring-orange-100 transition-all text-sm sm:text-base"
              />
              <button 
                onClick={handleAddComment} 
                className="absolute right-2 p-2.5 bg-[#FBC02D] text-white rounded-xl hover:bg-[#F9A825] transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;