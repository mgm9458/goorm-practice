import { StrictMode } from "react";
// StrictMode 리액트에서 제공하는 도구, 개발 환경에서만 활성화
// 목적은 잠재적인 오류 감지, 오래된 리액트 API 사용 방지, 리액트 컴포넌트와 관련된 경고를 콘솔에 표시
import { createRoot } from "react-dom/client";
// createRoot 리액트 18부터 사용하는 함수, 리액트 애플리케이션을 DOM에 렌더링하는 새로운 방식
// 이전에는 ReactDOM.render()를 사용했지만 현재는 createRoot를 권장
import "./index.css";
// index.css를 가져오는데 여기서 애플리케이션 전체에 적용되는 기본 스타일이 정의됨
import App from "./App.jsx";
// App.jsx 파일에서 기본 컴포넌트인 App을 가져옴
// App은 리액트 애플리케이션의 핵심 구성 요소. 이 파일에서 화면에 표시되는 내용을 정의함

// document에서 id가 root로 지정된 요소를 가져와서 렌더해서 createRoot할게
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
// 여기서 App을 렌더링하겠다고 선언했으니 App.jsx에 무엇이 적히든 그게 브라우저 화면에 표시된다

// react 패키지에서 strictmode를 불러와서 오류 등을 확인하고
// react-dom/client에서 createRoot를 불러오는거고(DOM에 리액트 컴포넌트를 렌더링 하기 위해 필요한 기능)
// 이거는 document에서 id가 root인 걸 가져와서 App을 strictmode로 검사 후  렌더해서 createRoot할게

// DOM에 리액트 컴포넌트를 렌더링 하기 위해 react-dom/client에서 createRoot를 불러오는 거고 이 createRoot 안에는 strictmode로 감싸진 App이 있는거고 이 App은 App.jsx에서 불러온거라는 걸로 이해하면 될까?
