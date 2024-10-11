import React, { useState } from "react";
import PostForm from "../../components/post/PostForm";
import useAPI from "../../hooks/useAPI";

export default function PostCreatePage() {
  const { post, token } = useAPI();
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // 이미지 업로드 함수
  const uploadImages = async (images) => {
    if (!Array.isArray(images) || images.length === 0) {
      console.error("이미지가 없습니다", images);
      return "";
    }

    const formData = new FormData();
    images.forEach((image) => {
      formData.append("image", image);
    });

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/image/uploadfiles`,
      {
        method: "POST",
        body: formData,
      }
    );
    const json = await response.json();
    return json.map((img) => img.filename).join(",") || "";
  };

  // 게시글 업로드 함수
  const handleUploadPost = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!content.trim() && images.length === 0) {
      alert("게시글 내용 또는 이미지를 입력해 주세요.");
      return;
    }

    const imageString = await uploadImages(images);

    const response = await post(
      `${import.meta.env.VITE_API_URL}/post`,
      {
        post: {
          content: content,
          image: imageString,
        },
      },
      "application/json",
      token
    );

    if (response.meta.rejectedWithValue) {
      alert(`error: ${response.payload}`);
    } else {
      alert("게시글이 업로드되었습니다.");
    }

    setContent("");
    setImages([]);
    setPreviews([]);
  };

  return (
    <div>
      <PostForm
        onSubmit={handleUploadPost}
        content={content}
        setContent={setContent}
        images={images}
        setImages={setImages}
        previews={previews}
        setPreviews={setPreviews}
      />
    </div>
  );
}
