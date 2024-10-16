import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import PostForm from "../../components/post/PostForm";
import useAPI from "../../hooks/useAPI";

export default function PostEditPage() {
  const { id } = useParams();
  const { get, put, token } = useAPI();
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [author, setAuthor] = useState();

  const navigate = useNavigate();

  // 게시물 상세 정보 가져오기 함수
  const getPostDetail = async () => {
    const response = await get(
      `${import.meta.env.VITE_API_URL}/post/${id}`,
      "application/json",
      token
    );

    setContent(response.payload.post.content);
    const postImages = response.payload.post.image.split(",").map((img) => {
      return img.startsWith("http")
        ? img
        : `${import.meta.env.VITE_API_URL}/${img}`;
    });
    setImages(postImages);
    setPreviews(postImages);
    setAuthor(response.payload.post.author);
  };

  useEffect(() => {
    getPostDetail();
  }, [id]);

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

  // 게시물 수정 로직
  const handleUpdatePost = async (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!content.trim() && images.length === 0) {
      alert("게시글 내용 또는 이미지를 입력해 주세요.");
      return;
    }

    // 새로 업로드할 이미지와 기존 이미지 분리
    const newImages = images.filter((img) => typeof img !== "string");
    const existingImages = images.filter((img) => typeof img === "string");

    // 새로 추가된 이미지 업로드
    let newImageString = "";
    if (newImages.length > 0) {
      newImageString = await uploadImages(newImages);
    }

    const imageString = [...existingImages, ...newImageString.split(",")]
      .filter(Boolean)
      .join(",");

    const response = await put(
      `${import.meta.env.VITE_API_URL}/post/${id}`,
      {
        post: {
          content: content,
          image: imageString,
        },
      },
      "application/json",
      token
    );
    if (response.meta?.rejectedWithValue) {
      if (response.payload === "HTTP error.! status: 403") {
        alert("잘못된 요청입니다. 로그인 정보를 확인하세요.");
        navigate("/home");
      } else if (response.payload === "HTTP error.! status: 404") {
        alert("존재하지 않는 게시글입니다.");
        navigate("/home");
      } else {
        alert(`${response.payload.message || "게시글 수정에 실패했습니다."}`);
      }
    } else {
      alert("수정되었습니다.");
      navigate(-1);
    }
  };

  return (
    <>
      {content ? (
        <PostForm
          onSubmit={handleUpdatePost}
          content={content}
          setContent={setContent}
          images={images}
          setImages={setImages}
          previews={previews}
          setPreviews={setPreviews}
          author={author}
        />
      ) : (
        <p>게시물 정보를 로딩 중입니다...</p>
      )}
    </>
  );
}
