import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./BottomNavigation.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../../../redux/bottomSlice";
import homeIcon from "../../../assets/images/tab_icon_home.svg";
import chatIcon from "../../../assets/images/tab_icon_chat.svg";
import postIcon from "../../../assets/images/tab_icon_post.svg";
import profileIcon from "../../../assets/images/tab_icon_profile.svg";

const tabItem = [
  { path: "/home", text: "홈", icon: homeIcon, tab: "home" },
  { path: "/chat", text: "코드챗", icon: chatIcon, tab: "chat" },
  { path: "/post/create", text: "게시물 작성", icon: postIcon, tab: "post" },
  { path: "/profile", text: "프로필", icon: profileIcon, tab: "profile" },
];

const BottomTab = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const activeTab = useSelector((state) => state.bottom.activeTab);

  // URL 변경 시 activeTab 업데이트
  useEffect(() => {
    const currentTab = tabItem.find(
      (item) => item.path === location.pathname
    )?.tab;
    if (currentTab && currentTab !== activeTab) {
      dispatch(setActiveTab(currentTab));
    }
  }, [location, dispatch, activeTab]);

  return (
    <nav className={styles.content}>
      <ul className={styles.tab}>
        {tabItem.map(({ path, text, icon, tab }) => (
          <li key={tab} className={styles.listItem}>
            <Link
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
              <span
                className={`${styles.text} ${
                  activeTab === tab ? styles.activeText : ""
                }`}
              >
                {text}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomTab;
