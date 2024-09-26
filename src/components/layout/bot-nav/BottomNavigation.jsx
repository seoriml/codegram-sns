import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styles from "./BottomNavigation.module.scss";
// 리덕스
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";
import { setActiveTab } from "../../../redux/actions";
import store from "../../../redux/store";
// 아이콘
import homeIcon from "../../../assets/images/tab_icon_home.svg";
import chatIcon from "../../../assets/images/tab_icon_chat.svg";
import postIcon from "../../../assets/images/tab_icon_post.svg";
import profileIcon from "../../../assets/images/tab_icon_profile.svg";
// 페이지 컴포넌트
import Home from "../../../pages/home/Home";
// import Chat from ""; // 채팅 구현X
import Post from "../../../pages/post/Post";
import Profile from "../../../pages/profile/MyProfile";

// 하단 탭 구성 요소 배열
const tabItem = [
  { path: "/home", text: "홈", icon: homeIcon, tab: "home" },
  { path: "/chat", text: "채팅", icon: chatIcon, tab: "chat" },
  { path: "/post", text: "게시물 작성", icon: postIcon, tab: "post" },
  { path: "/profile", text: "프로필", icon: profileIcon, tab: "profile" },
];

// 하단 탭 컴포넌트 정의
const BottomTab = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);

  // 하단 탭 내용 정의
  return (
    <div className={styles.tab}>
      {tabItem.map(({ path, text, icon, tab }) => (
        <Link
          key={tab}
          to={path}
          onClick={() => dispatch(setActiveTab(tab))}
          className={styles.link}
        >
          <img
            src={icon}
            alt={text}
            className={`${styles.icon} ${
              activeTab === tab ? styles.activeIcon : ""
            }`}
          />
          <div
            className={`${styles.text} ${
              activeTab === tab ? styles.activeText : ""
            }`}
          >
            {text}
          </div>
        </Link>
      ))}
    </div>
  );
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
