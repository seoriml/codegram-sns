import React from "react";
import PostItem from "../../feed/PostItem";
import EmptyFeed from "../../feed/EmptyFeed";

// 목데이터 사용
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

const PostList = () => {
  return (
    <div>
      {mockData.length > 0 ? (
        mockData.map((post) => <PostItem key={post.id} post={post} />)
      ) : (
        <EmptyFeed />
      )}
    </div>
  );
};

export default PostList;

// <Post 데이터 사용시>
// const PostList = ({ posts }) => {
//   return (
//     <div>
//       {posts.length > 0 ? (
//         posts.map((post) => <PostItem key={post.id} post={post} />)
//       ) : (
//         <EmptyFeed />
//       )}
//     </div>
//   );
// };

// export default PostList;
