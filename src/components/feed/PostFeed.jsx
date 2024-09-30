// components/Feed.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAPI from "../../hooks/useAPI";
import EmptyFeed from "./EmptyFeed";
import PostItem from "./PostItem";

export default function Feed() {
  const [feed, setFeed] = useState([]);
  const { get } = useAPI();

  // 피드 데이터 가져오기 함수 (현재 데이터가 없어서 주석처리하고 목데이터 사용)
  // const getFeed = async () => {
  //   const token = localStorage.getItem('token');
  //   {
  //     const response = await get(`${import.meta.env.VITE_API_URL}/post/feed`,
  //       'application/json',
  //       token
  //     );
  //     setFeed(response.payload.posts);
  //   }
  // };

  useEffect(() => {
    getFeed();
  }, []);

  // 목데이터 정의
  const mockData = [
    {
      id: 1,
      author: {
        username: "johndoe",
        accountname: "john123",
        image: "https://via.placeholder.com/42",
      },
      content: "이것은 첫 번째 게시물입니다.",
      image: "https://via.placeholder.com/300",
      createdAt: "2023-09-25T10:00:00Z",
    },
    {
      id: 2,
      author: {
        username: "janedoe",
        accountname: "jane456",
        image: "https://via.placeholder.com/42",
      },
      content: "여기 두 번째 게시물이 있습니다.",
      image: "",
      createdAt: "2023-09-26T14:30:00Z",
    },
    {
      id: 3,
      author: {
        username: "bobby",
        accountname: "bobby789",
        image: "https://via.placeholder.com/42",
      },
      content: "세 번째 게시물입니다!",
      image: "https://via.placeholder.com/300",
      createdAt: "2023-09-27T16:00:00Z",
    },
  ];

  // 목데이터로 피드 설정
  const getFeed = () => {
    setFeed(mockData);
  };

  return (
    <div>
      {feed.length === 0 ? (
        <EmptyFeed />
      ) : (
        <ul>
          {feed.map((post) => (
            <li key={post.id}>
              <Link to={`/detail/${post.id}`}>
                <PostItem post={post} />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
