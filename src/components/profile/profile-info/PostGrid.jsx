import React from "react";
import iconImageLayers from "../../../assets/images/icon_image_layers.svg";
import { useNavigate } from "react-router-dom";

const PostGrid = ({ posts }) => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundColor: posts.length === 0 ? "#F2F2F2" : "#ffffff",
        width: "100%",
        minHeight: "50vh",
        marginBottom: "-40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          padding: "16px",
        }}
      >
        {posts.length > 0 &&
          posts
            .filter((post) => post.image)
            .map((post) => {
              const imageArray = post.image.split(",");
              return (
                <div
                  key={post.id}
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    width: "144px",
                    height: "144px",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate(`/detail/${post.id}`)}
                >
                  <img
                    src={
                      imageArray[0].startsWith("http")
                        ? imageArray[0]
                        : `${import.meta.env.VITE_API_URL}/${imageArray[0]}`
                    }
                    alt={`게시물 이미지 ${post.id}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                    }}
                  />
                  {imageArray.length > 1 && (
                    <img
                      src={iconImageLayers}
                      alt="여러 이미지 아이콘"
                      style={{
                        position: "absolute",
                        top: "8px",
                        right: "8px",
                        width: "24px",
                        height: "24px",
                      }}
                    />
                  )}
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default PostGrid;
