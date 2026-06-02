import React, { useState } from 'react';
import { Search, Edit3, MessageCircle, ThumbsUp, Flame } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// 💡 1. 방금 만든 통합 데이터를 불러옵니다.
import { communityPosts } from './data'; 

const CommunityBoard = () => {
  const [activeTab, setActiveTab] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const tabs = ['전체', '레시피', '가성비TIP', '자취후기', '질문'];

  // 💡 2. 불러온 communityPosts로 필터링을 진행합니다.
  const filteredPosts = communityPosts.filter(post => {
    const matchTab = activeTab === '전체' || post.category === activeTab;
    const matchSearch = post.title.includes(searchQuery) || post.author.includes(searchQuery);
    return matchTab && matchSearch;
  });

  const handlePostClick = (postId) => {
    navigate(`/community/${postId}`);
    window.scrollTo(0, 0); 
  };

  return (
    <div className="bg-white p-10 rounded-[50px] shadow-sm border border-orange-100 w-full min-h-[600px] flex flex-col">
      {/* ... (상단 헤더와 검색창 코드는 기존과 동일합니다) ... */}
      
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold text-[#5D4037] mb-2">커뮤니티</h2>
        <p className="text-gray-500 font-medium">자취생들의 꿀팁과 레시피를 공유해보세요!</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all duration-200 whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-[#FBC02D] text-white shadow-md' 
                  : 'bg-gray-100 text-gray-500 hover:bg-orange-50 hover:text-orange-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-grow md:flex-grow-0">
            <input 
              type="text" 
              placeholder="게시글 검색..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-48 pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm outline-none focus:border-orange-300 focus:bg-white transition-colors"
            />
            <Search size={18} className="absolute left-3.5 top-3 text-gray-400" />
          </div>
          <button className="flex items-center gap-2 bg-[#A1887F] hover:bg-[#8D6E63] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-colors shrink-0">
            <Edit3 size={18} />
            <span className="hidden sm:inline">글쓰기</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex text-sm font-bold text-gray-400 border-b-2 border-orange-100 pb-3 mb-2 px-4">
          <div className="w-20 text-center">분류</div>
          <div className="flex-1">제목</div>
          <div className="w-24 text-center hidden md:block">작성자</div>
          <div className="w-20 text-center hidden sm:block">날짜</div>
          <div className="w-16 text-center hidden lg:block">조회</div>
        </div>

        {filteredPosts.map((post) => (
          <div 
            key={post.id} 
            onClick={() => handlePostClick(post.id)} 
            className="group flex items-center py-4 px-4 border-b border-gray-100 hover:bg-[#FFF9E7] transition-colors cursor-pointer rounded-xl"
          >
            <div className="w-20 text-center">
              <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${
                post.category === '레시피' ? 'bg-orange-100 text-orange-600' :
                post.category === '질문' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
              }`}>
                {post.category}
              </span>
            </div>

            <div className="flex-1 px-4 min-w-0 flex items-center gap-2">
              <span className="font-bold text-gray-800 group-hover:text-orange-600 transition-colors truncate">
                {post.title}
              </span>
              {post.isHot && <Flame size={16} className="text-red-500 fill-red-500 shrink-0" />}
              
              <div className="flex md:hidden items-center gap-2 text-xs text-gray-400 ml-2 shrink-0">
                {/* 💡 기존 post.comments 대신 post.comments.length(배열의 개수)를 씁니다 */}
                <span className="flex items-center gap-0.5"><MessageCircle size={12}/>{post.comments.length}</span>
                <span className="flex items-center gap-0.5"><ThumbsUp size={12}/>{post.likes}</span>
              </div>
            </div>

            <div className="w-24 text-center text-sm font-medium text-gray-600 hidden md:block truncate">
              {post.author}
            </div>
            <div className="w-20 text-center text-sm text-gray-400 hidden sm:block">
              {post.date}
            </div>
            <div className="w-16 text-center text-sm text-gray-400 hidden lg:block">
              {post.views}
            </div>

            <div className="w-24 hidden md:flex justify-end gap-3 text-sm font-medium text-gray-500 pr-2">
              <span className="flex items-center gap-1 group-hover:text-orange-500 transition-colors"><ThumbsUp size={16}/>{post.likes}</span>
              <span className="flex items-center gap-1 group-hover:text-blue-500 transition-colors"><MessageCircle size={16}/>{post.comments.length}</span>
            </div>
          </div>
        ))}

        {filteredPosts.length === 0 && (
          <div className="py-20 flex flex-col items-center text-gray-400">
            <Search size={48} className="mb-4 opacity-50" />
            <p className="font-bold text-lg text-gray-500 mb-1">앗, 결과가 없어요!</p>
            <p className="text-sm">다른 검색어를 입력하거나 탭을 변경해 보세요.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunityBoard;