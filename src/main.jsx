import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// 💡 방금 전에 스크롤바와 폰트를 예쁘게 꾸민 전역 CSS 파일 불러오기
import './index.css'; 

// 💡 모든 페이지 라우팅과 화면이 담겨있는 최상위 컴포넌트 불러오기
import App from './App.jsx';

// HTML 파일(index.html)에 있는 <div id="root"></div>를 찾아서 
// 그 안에 우리의 리액트 앱(App.jsx)을 화면에 그려넣는(render) 핵심 코드입니다.
createRoot(document.getElementById('root')).render(
  // 💡 StrictMode는 개발 중에 발생할 수 있는 잠재적인 버그를 경고해 주기 위해 
  // 컴포넌트를 일부러 두 번씩 실행해 보는 안전장치입니다. (실제 배포 시에는 정상적으로 한 번만 작동합니다!)
  <StrictMode>
    <App />
  </StrictMode>
);