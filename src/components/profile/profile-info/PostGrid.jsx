import React from "react";
import iconImageLayers from "../../../assets/images/icon_image_layers.svg";
import EmptyFeed from "../../feed/EmptyFeed";
import { useNavigate } from "react-router-dom";

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
    image:
      "https://via.placeholder.com/300, https://via.placeholder.com/301, https://via.placeholder.com/302",
    createdAt: "2023-09-27T16:00:00Z",
  },
  {
    id: 4,
    author: {
      username: "emily",
      accountname: "emily123",
      image: "https://via.placeholder.com/42",
    },
    content: "네 번째 게시물입니다!",
    image:
      "https://via.placeholder.com/300, https://via.placeholder.com/301, https://via.placeholder.com/302",
    createdAt: "2023-09-28T18:00:00Z",
  },
];

const PostGrid = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "10px",
        padding: "20px",
      }}
    >
      {mockData.length > 0 ? (
        mockData
          .filter((post) => post.image) // 이미지가 없는 게시물은 필터링
          .map((post, index) => {
            const imageArray = post.image.split(","); // 이미지 여러 장 처리
            return (
              <div
                key={index}
                style={{ position: "relative", cursor: "pointer" }}
                onClick={() => navigate(`/detail/${post.id}`)}
              >
                <img
                  src={
                    imageArray[0].startsWith("http")
                      ? imageArray[0]
                      : `${import.meta.env.VITE_API_URL}/${imageArray[0]}`
                  }
                  alt={`게시물 이미지 ${index + 1}`}
                  style={{ width: "100%", height: "auto" }}
                />
                {imageArray.length > 1 && (
                  <img
                    src={iconImageLayers}
                    alt="여러 이미지 아이콘"
                    style={{
                      position: "absolute",
                      top: "5px",
                      right: "5px",
                      width: "20px",
                    }}
                  />
                )}
              </div>
            );
          })
      ) : (
        <EmptyFeed />
      )}
    </div>
  );
};

export default PostGrid;

//
// <post 데이터 사용시>
// const PostGrid = ({ posts }) => {
//   const navigate = useNavigate();
//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(3, 1fr)",
//         gap: "10px",
//         padding: "20px",
//       }}
//     >
//       {posts.length > 0 ? (
//         posts
//           .filter((post) => post.image) // 이미지가 없는 게시물은 필터링
//           .map((post, index) => {
//             const imageArray = post.image.split(","); // 이미지 여러 장 처리
//             return (
//               <div
//                 key={index}
//                 style={{ position: "relative", overflow: "hidden" }}
//                 onClick={() => navigate(`/post/${post.id}`)} // 게시글 클릭 시 상세 페이지로 이동
//               >
//                 <img
//                   src={
//                     imageArray[0].startsWith("http")
//                       ? imageArray[0]
//                       : `${import.meta.env.VITE_API_URL}/${imageArray[0]}`
//                   }
//                   alt={`게시물 이미지 ${index + 1}`}
//                   style={{ width: "100%", height: "auto", display: "block" }}
//                 />
//                 {imageArray.length > 1 && (
//                   <img
//                     src={iconImageLayers}
//                     alt="여러 이미지 아이콘"
//                     style={{
//                       position: "absolute",
//                       top: "8px",
//                       right: "8px",
//                       width: "24px",
//                       height: "24px",
//                     }}
//                   />
//                 )}
//               </div>
//             );
//           })
//       ) : (
//         <EmptyFeed />
//       )}
//     </div>
//   );
// };

// export default PostGrid;
