// components/Feed.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link 컴포넌트 추가
import useAPI from "../../hooks/useAPI";
import EmptyFeed from "./EmptyFeed";
import PostItem from "./PostItem";
import searchIcon from "../../assets/images/icon_search.svg";

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const { get, post } = useAPI();

  //테스트용 팔로우함수
  // const follow = async () => {
  //   const token = localStorage.getItem("userToken");
  //   const testUserId = "String2";

  //   const response = await post(
  //     `${import.meta.env.VITE_API_URL}/profile/${testUserId}/follow`,
  //     "application/json",
  //     token
  //   );

  //   if (response.meta?.rejectedWithValue) {
  //     console.error(`Error following: ${response.payload}`);
  //   } else {
  //     console.log("팔로우 되었습니다.");
  //   }
  // };

  //피드 데이터 가져오기 함수
  const getFeed = async () => {
    const token = localStorage.getItem("userToken");
    {
      const response = await get(
        `${import.meta.env.VITE_API_URL}/post/feed`,
        "application/json",
        token
      );
      setFeed(response.payload.posts);
    }
  };

  useEffect(() => {
    // follow();
    getFeed();
  }, []);

  return (
    <div>
      <div>
        <h1>코드그램 피드</h1>
        <Link to="/search">
          <img src={searchIcon} alt="검색버튼" />
        </Link>
      </div>
      {feed && feed.length === 0 ? (
        <EmptyFeed />
      ) : (
        <ul>
          {Array.isArray(feed) &&
            feed.map((post) => (
              <li key={post.id}>
                <PostItem post={post} />
              </li>
            ))}
        </ul>
      )}
    </div>
  );
}
