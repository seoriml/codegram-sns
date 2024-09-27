import React, { useState, useEffect } from "react";
import BackButton from "../ui/button/BackButton";
import ImageUploadButton from "../ui/button/ImageUploadButton";
import useAPI from "../../hooks/useAPI";

const PostForm = ({ onSubmit }) => {
  const { data, loading, error, post } = useAPI();

  // 상태 관리: 게시글 내용, 이미지 배열, 이미지 미리보기 배열
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // 로그인 함수
  const loginUser = async () => {
    try {
      const response = await post(
        `${import.meta.env.VITE_API_URL}/user/login`,
        {
          user: {
            email: "test@test2.com",
            password: "String21312",
          },
        }
      );

      console.log("응답 데이터:", response);

      if (response && response.payload.user && response.payload.user.token) {
        const userData = response.payload.user;
        localStorage.setItem("token", userData.token);
      } else {
        console.error("로그인 실패: 토큰이 없습니다.", response.user);
      }
    } catch (err) {
      console.error("로그인 중 오류 발생:", err);
    }
  };
  useEffect(() => {
    loginUser();
  }, []);

  // 게시글 업로드 함수
  const uploadPost = async () => {
    const token = localStorage.getItem("token");

    const imageString = images
      .map((image) => URL.createObjectURL(image))
      .join(",");

    try {
      // 게시글 업로드 요청
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
      const json = await response.json();
      console.log("게시글 업로드 성공:", json);
      onSubmit();
    } catch (err) {
      console.error("게시글 업로드 중 오류 발생:", err);
    }
  };

  // 폼 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
    await uploadPost();
  };

  // 게시글 내용 변경 핸들러
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (file) => {
    // 최대 3장 이미지 제한
    if (images.length < 3) {
      setImages((images) => [...images, file]); // 이미지 배열에 추가

      // 미리보기 이미지 URL 생성
      if (file) {
        const imageUrl = URL.createObjectURL(file);
        setPreviews((previews) => [...previews, imageUrl]); // 미리보기 배열에 추가
      }
    } else {
      alert("최대 3장의 이미지만 업로드할 수 있습니다.");
    }
  };

  // 이미지 제거 핸들러
  const removeImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setImages(newImages);
    setPreviews(newPreviews);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <BackButton />
        <button type="submit">업로드</button>
      </div>
      <div>
        <textarea
          id="content"
          value={content}
          onChange={handleContentChange}
          placeholder="게시글 입력하기"
        />
        {previews.length > 0 && (
          <div>
            {previews.map((preview, index) => (
              <div
                key={index}
                style={{
                  position: "relative",
                }}
              >
                <img
                  src={preview}
                  alt={`업로드 이미지 ${index + 1}`}
                  style={{ maxWidth: "100%", maxHeight: "300px" }}
                />
                <button
                  type="button"
                  onClick={() => removeImage(index)}
                  style={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                  }}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      <ImageUploadButton onChange={handleImageChange} />
    </form>
  );
};

export default PostForm;
