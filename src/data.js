export const communityPosts = [
  // --- 기존 레시피 데이터 (id 1~8) ---
  {
    id: 1,
    category: '레시피',
    title: '5000원 김치찌개 - 자취생의 든든한 한끼',
    author: '가성비_달인',
    date: '10분 전',
    views: 1205,
    likes: 120,
    isHot: true,
    rating: 4.8,
    price: 5000,
    img: "https://homecuisine.co.kr/files/attach/images/140/447/107/91e26cbc3594c06676e703301f6a9889.jpg",
    content: "자취생도 집에서 깊은 맛을 낼 수 있는 비법! 편의점 김치와 참치캔 하나면 끝납니다. 먼저 김치를 볶다가 물을 붓고, 참치 기름까지 모두 넣어주세요. 마지막에 청양고추를 썰어 넣으면 파는 것 부럽지 않습니다.",
    comments: [
      { id: 1, user: "요리초보", text: "진짜 맛있어요! 딱 5천 원 나오네요.", rating: 5 },
      { id: 2, user: "자취생A", text: "생각보다 양이 많아서 두 끼 먹었습니다.", rating: 4 },
    ]
  },
  {
    id: 2,
    category: '레시피',
    title: '맛도리 팬 케이크',
    author: '자취10년차',
    date: '1시간 전',
    views: 122,
    likes: 31,
    isHot: false,
    rating: 4.5,
    price: 8000, 
    img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&q=80",
    content: "매일 태워먹으시던 팬케이크 안태우고 10분만에 디저트 완성하는법 알려드림",
    comments: [
      { id: 1, user: "꿀은 어떤걸 쓰셧는지 궁금합니다!", rating: 4 }
    ]
  },
  {
    id: 3,
    category: '자취후기',
    title: '이웃 때문에 미치겠다',
    author: '건강챙기기',
    date: '04.14',
    views: 402,
    likes: 126,
    isHot: true,
    rating: 4.9,
    price: null,
    img: "https://img.hankyung.com/photo/202402/01.35802176.1.jpg",
    content: "위층 할머니는 주차장에다가 쓰레기랑 페지만 겁나 쌓아두고 옆집은 젋은 여자있는데 처음에는 정상인인줄알았는데 조현병 환자인건지 밤에 잘때마다 울어재낀다 이사가야하냐 입주한지 1달도 안됐는데... 조언좀 ㅠㅠ",
    comments: [
      { id: 1, user: "치킨매니아", text: "고백으로 혼내주자"},
      { id: 2, user: "헬창", text: "그래서 옆집 이쁨?"},
      { id: 3, user: "자취맨0265", text: "ㄹㅇ 헬이네"},
      { id: 4, user: "자취맨0269", text: "알아보고 들어가지 그랬냐"},
      { id: 5, user: "자취맨075", text: "불쌍"},
      { id: 6, user: "자취맨065", text: "복수 ㄱㄱ 밤에 비의랩소디 부르자"},
      { id: 7, user: "자취맨0285", text: "와.. 나랑 비슷하네"}
    ]
  },
  {
    id: 4,
    category: '레시피',
    title: '2000원 비빔밥 - 빠르고 건강하게!',
    author: '영양사_Park',
    date: '2시간 전',
    views: 650,
    likes: 310,
    isHot: true,
    rating: 4.7,
    price: 2000,
    img: "https://img1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/80v4/image/l_vI_rE_P84p5blbaOtO9XUuI3U.png",
    content: "저는 애호박이랑 양파 넣어서 비볐는데요 야채남는거 있으면 넣으면 더 좋구요 양념장이 킥 입니다 양념장 레시피 알려드릴께요",
    comments: [
      { id: 1, user: "다이어터", text: "글 쓰다 말았노", rating: 5 },
      { id: 2, user: "자취생C", text: "빨리 알려주삼", rating: 4 }
    ]
  },
  {
    id: 5,
    category: '레시피',
    title: '초간단 간장계란밥 (단돈 1500원!)',
    author: '자취10년차',
    date: '4시간 전',
    views: 450,
    likes: 85,
    isHot: false,
    rating: 4.9,
    price: 1500,
    img: "https://semie.cooking/image/board/cooking/ri/wd/zkasgqkv/159694145hbcn.jpg",
    content: "귀찮을 땐 역시 간장계란밥! 버터 반 숟가락과 참기름 한 방울이 맛의 차이를 만듭니다. 계란은 꼭 반숙으로 하세요!",
    comments: [
      { id: 1, user: "귀차니즘", text: "오늘 저녁은 이거다", rating: 5 }
    ]
  },
  {
    id: 6,
    category: '레시피',
    title: '홈메이드 스테이크 (가성비 소고기)',
    author: '고기러버',
    date: '6시간 전',
    views: 920,
    likes: 150,
    isHot: true,
    rating: 4.8,
    price: 18000,
    img: "https://cdnweb01.wikitree.co.kr/webdata/editor/202602/24/img_20260224161207_fdb96459.webp",
    content: "특별한 날, 집에서 즐기는 스테이크! 호주산 소고기 등심을 사용하면 2만원 이하로 레스토랑 분위기를 낼 수 있습니다. 시즈닝을 충분히 하고 올리브유에 튀기듯 굽는 게 포인트예요.",
    comments: [
      { id: 1, user: "미식가", text: "가성비 소고기 정보 좀 부탁드려요!", rating: 5 }
    ]
  },
  {
    id: 7,
    category: '레시피',
    title: '연어 덮밥 (사케동)',
    author: '일식셰프꿈나무',
    date: '8시간 전',
    views: 310,
    likes: 55,
    isHot: false,
    rating: 4.6,
    price: 12000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXoq-mXTb_V--MTMFb_aj1vPtNML1dKqAGNg&s",
    content: "냉동 연어 필렛을 사서 직접 손질하면 훨씬 저렴합니다. 간장 소스에 양파를 절여 밥 위에 올리고 연어를 얹으면 끝! 비린내 잡는 법도 알려드려요.",
    comments: []
  },
  {
    id: 8,
    category: '레시피',
    title: '매콤 로제 파스타',
    author: '파스타장인',
    date: '12시간 전',
    views: 520,
    likes: 70,
    isHot: false,
    rating: 4.7,
    price: 9000,
    img: "https://recipe1.ezmember.co.kr/cache/recipe/2025/01/07/dce2999136bb0fd1d8222c17f20ed9691.jpg",
    content: "시판 토마토 소스와 우유(또는 생크림)를 1:1로 섞고 고추장 반 스푼만 넣으면 한국인 입맛 저격 로제 파스타 완성!",
    comments: [
      { id: 1, user: "자취생D", text: "고추장 넣는 건 처음인데 완전 꿀팁이네요!", rating: 5 }
    ]
  },
  // --- 신규 추가 데이터 ---
  {
    id: 9,
    category: '가성비TIP',
    title: '대형마트 폐점 2시간 전 떨이 공략',
    author: '알뜰살뜰',
    date: '5시간 전',
    views: 890,
    likes: 210,
    isHot: true,
    rating: 4.9,
    price: null,
    img: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
    content: "신선식품 50% 할인으로 일주일치 장보기 꿀팁!",
    comments: []
  },
  {
    id: 10,
    category: '가성비TIP',
    title: '배달비 0원 만들기 프로젝트',
    author: '프로배달러',
    date: '7시간 전',
    views: 540,
    likes: 130,
    isHot: false,
    rating: 4.7,
    price: null,
    img: "https://images.unsplash.com/photo-1617347454431-f19470295627?w=800",
    content: "가까운 거리면 포장하세요! 쿠폰 중복 적용 팁 포함",
    comments: []
  },
  {
    id: 11,
    category: '가성비TIP',
    title: '편의점 1+1 상품 냉동 보관 꿀팁',
    author: '편순이',
    date: '9시간 전',
    views: 430,
    likes: 95,
    isHot: false,
    rating: 4.8,
    price: null,
    img: "https://images.unsplash.com/photo-1556742049-0cfec4f6a45d?w=800",
    content: "음료수나 간편식 1+1 쟁여두고 오래 먹는 법",
    comments: []
  },
  {
    id: 12,
    category: '자취후기',
    title: '첫 자취방 구하기 대성공 후기',
    author: '새내기',
    date: '3시간 전',
    views: 180,
    likes: 45,
    isHot: false,
    rating: 4.8,
    price: null,
    img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    content: "햇빛 잘 드는 방 구하는 법과 부동산 체크리스트!",
    comments: []
  },
  {
    id: 13,
    category: '자취후기',
    title: '에어프라이어 vs 전자레인지 비교',
    author: '프로자취러',
    date: '11시간 전',
    views: 310,
    likes: 88,
    isHot: false,
    rating: 4.7,
    price: null,
    img: "",
    content: "자취생 필수 가전, 무엇을 먼저 살까?",
    comments: []
  }
];