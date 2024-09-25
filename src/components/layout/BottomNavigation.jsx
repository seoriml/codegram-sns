import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { setActiveTab } from "./redux/actions";
import store from "../../redux/store";
// 아이콘
import homeIcon from "../../assets/images/tab_icon_home.svg";
import chatIcon from "../../assets/images/tab_icon_chat.svg";
import postIcon from "../../assets/images/tab_icon_post.svg";
import profileIcon from "../../assets/images/tab_icon_profile.svg";
// 페이지 컴포넌트
import Home from "../../pages/home/Home";
import Chat from ""; // 채팅 구현X
import Post from "../../pages/post/Post";
import Profile from "../../pages/profile/MyProfile";

// 하단 탭 컴포넌트 정의
const BottomTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);

  // 하단 탭 내용 정의
  return (
    <div style={tabStyle}>
      <Link
        to="/home"
        onClick={() => dispatch(setActiveTab("home"))}
        style={linkStyle}
      >
        <img
          src={homeIcon}
          alt="Home"
          style={iconStyle(activeTab === "home")}
        />
        <div style={textStyle(activeTab === "home")}>홈</div>
      </Link>
      <Link
        to="/chat"
        onClick={() => dispatch(setActiveTab("chat"))}
        style={linkStyle}
      >
        <img
          src={chatIcon}
          alt="Chat"
          style={iconStyle(activeTab === "chat")}
        />
        <div style={textStyle(activeTab === "chat")}>채팅</div>
      </Link>
      <Link
        to="/post"
        onClick={() => dispatch(setActiveTab("post"))}
        style={linkStyle}
      >
        <img
          src={postIcon}
          alt="Post"
          style={iconStyle(activeTab === "post")}
        />
        <div style={textStyle(activeTab === "post")}>게시물 작성</div>
      </Link>
      <Link
        to="/profile"
        onClick={() => dispatch(setActiveTab("profile"))}
        style={linkStyle}
      >
        <img
          src={profileIcon}
          alt="Profile"
          style={iconStyle(activeTab === "profile")}
        />
        <div style={textStyle(activeTab === "profile")}>프로필</div>
      </Link>
    </div>
  );
};

// 하단 탭 전체 스타일
const tabStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  position: "fixed",
  bottom: 0,
  width: "100%",
  backgroundColor: "#ffffff",
  borderTop: "1px solid #DBDBDB",
  color: "#767676",
  textDecorationLine: "none",
  padding: "10px 0",
  margin: "0 auto",
};

// 아이콘 스타일
const iconStyle = (isActive) => ({
  width: "24px",
  height: "24px",
  filter: isActive
    ? "invert(30%) sepia(91%) saturate(6400%) hue-rotate(200deg) brightness(90%) contrast(102%)"
    : "none",
});

// 텍스트 스타일
const textStyle = (isActive) => ({
  fontSize: "10px",
  color: isActive ? "#0088FF" : "#767676",
});

// link 컴포넌트 설정 (밑줄 제거)
const linkStyle = {
  textDecoration: "none",
  textAlign: "center",
};

// 라우팅
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/post" element={<Post />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <BottomTab />
    </Router>
  );
};

// 리덕스
export default function BottomNavigation() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
