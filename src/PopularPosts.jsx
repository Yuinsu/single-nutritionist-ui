import React from 'react';
import { MessageCircle, Star, ThumbsUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { communityPosts } from './data'; 

const PopularPosts = () => {
  const navigate = useNavigate();
  
  // 💡 [핵심] 데이터를 정렬하고 상위 5개만 뽑는 로직을 한 번에 처리합니다.
  const posts = [...communityPosts]
    .sort((a, b) => {
      // 1. 추천(likes)이 높은 순으로 정렬
      if (b.likes !== a.likes) {
        return b.likes - a.likes; 
      }
      // 2. 추천 수가 같다면 별점(rating)이 높은 순으로 정렬
      return b.rating - a.rating; 
    })
    .slice(0, 5); // 정렬된 결과에서 상위 5개만 추출

  const handlePostClick = (postId) => {
    navigate(`/community/${postId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="w-full">
      {/* 헤더 부분 */}
      <div className="flex justify-end gap-8 mb-4 px-6 text-[#A1887F] font-bold">
        <div className="flex items-center gap-1"><MessageCircle size={18}/> 댓글</div>
        <div className="flex items-center gap-1"><Star size={18}/> 리뷰</div>
        <div className="flex items-center gap-1"><ThumbsUp size={18}/> 추천</div>
      </div>

      {/* 게시물 목록 렌더링 부분 */}
      <div className="flex flex-col gap-3">
        {posts.map((post, index) => (
          <div 
            key={post.id} 
            onClick={() => handlePostClick(post.id)}
            className="group flex items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-orange-50 gap-4 cursor-pointer hover:bg-[#FFF9E7] hover:border-orange-200 hover:shadow-md transition-all duration-200"
          >
            {/* 왼쪽: 순위와 제목 */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
               <span className={`text-xl font-black w-6 shrink-0 text-center ${index < 3 ? 'text-orange-500' : 'text-orange-300'}`}>
                {index + 1}
              </span>
              <div className="flex items-center gap-2 min-w-0">
                <span className="text-gray-400 font-bold text-xs shrink-0">[{post.category}]</span>
                <span className="text-gray-800 font-semibold text-base truncate group-hover:text-orange-600 transition-colors">
                  {post.title}
                </span>
              </div>
            </div>

            {/* 오른쪽: 아이콘들 */}
            <div className="flex items-center gap-4 text-gray-500 text-sm shrink-0 font-medium">
              <div className="flex items-center gap-1"><MessageCircle size={16} /> {post.comments?.length || 0}</div>
              <div className="flex items-center gap-1"><Star size={16} className="text-orange-400 fill-orange-400" /> {post.rating}</div>
              <div className="flex items-center gap-1"><ThumbsUp size={16} /> {post.likes}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* 전체 보기 버튼 */}
      <div className="mt-8 flex justify-center">
        <button 
          onClick={() => {
            navigate('/community');
            window.scrollTo(0, 0);
          }}
          className="text-[#A1887F] font-bold text-sm hover:text-[#5D4037] underline underline-offset-4 decoration-2 transition-colors"
        >
          전체 게시글 보러 가기
        </button>
      </div>
    </div>
  );
};

export default PopularPosts;