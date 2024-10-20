import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import useAPI from "./../../hooks/useAPI";
import { updateValidState2 } from "../../redux/validationSlice";
import { setCredentials } from "../../redux/apiSlice";
import ButtonComponent from "../ui/Button";
import ProfileImagePlaceholder from "../../assets/images/user_profile.svg";
import ImageUploadButton from "../ui/button/ImageUploadButton";
import styles from "./AuthForm.module.scss";
import Loading from "../ui/Loading";

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState(ProfileImagePlaceholder); // 처음 보여주는 기본프로필 이미지
  const [profileImg, setProfileImg] = useState(""); // api 통신 후에 받아온 이미지 데이터
  const [warningMessage, setWarningMessage] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [accountNameError, setAccountNameError] = useState("");
  const [introError, setIntroError] = useState("");
  const { token, isLoggedIn, post, loading, error } = useAPI();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { emailValue, passwordValue } = useSelector((state) => state.validation);

  const validateUsername = (username) => {
    if (!username) {
      setUsernameError("* 사용자 이름을 입력해주세요.");
    } else if (username.length < 2 || username.length > 10) {
      setUsernameError("* 2-10자 이내로 작성해주세요.");
    } else {
      setUsernameError("");
    }
  };

  const validateAccountName = (accountName) => {
    const regex = /^[A-Za-z0-9._]+$/;
    if (!accountName) {
      setAccountNameError("* 계정 ID 를 입력해주세요.");
    } else if (!regex.test(accountName)) {
      setAccountNameError("* 영문, 숫자, 밑줄, 마침표만 사용할 수 있습니다.");
    } else {
      setAccountNameError("");
    }
  };

  const validateIntro = (intro) => {
    if (!intro) {
      setIntroError("* 소개 글을 입력해주세요.");
    } else if (intro.length > 60) {
      setIntroError("* 60자 이내로 작성해주세요.");
    } else {
      setIntroError("");
    }
  };

  const handleUsernameChange = (e) => {
    const value = e.target.value;
    setUsername(value);
    validateUsername(value);
  };

  const handleAccountNameChange = (e) => {
    const value = e.target.value;
    setAccountName(value);
    validateAccountName(value);
    setWarningMessage("");
  };

  const handleIntroChange = (e) => {
    const value = e.target.value;
    setIntro(value);
    validateIntro(value);
  };

  const handleImageChange = async (files) => {
    if (files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.src = e.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          // 이미지 크기 조정
          const maxWidth = 300;
          const maxHeight = 300;

          // 가로, 세로 비율을 유지하면서 크기를 조정
          const scaleSize = Math.min(maxWidth / img.width, maxHeight / img.height);
          canvas.width = img.width * scaleSize;
          canvas.height = img.height * scaleSize;

          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          // 압축된 이미지 생성
          const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7); // 압축 정도 0.7
          setProfileImagePreview(compressedDataUrl); // 압축된 이미지를 미리보기로 설정

          // console.log("압축된 이미지 크기:", compressedDataUrl.length);

          // 이미지 파일로 다시 변환 후 업로드
          fetch(compressedDataUrl)
            .then((res) => res.blob())
            .then((blob) => {
              const file = new File([blob], "profile.jpg", {
                type: "image/jpeg",
              });
              uploadImage(file); // 서버로 업로드
            });
        };
      };
      reader.readAsDataURL(file); // 파일을 읽어와서 데이터 URL로 변환
    }
  };

  // 이미지 업로드 함수
  const uploadImage = async (img) => {
    const formData = new FormData();
    formData.append("image", img);
    // console.log(img);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/image/uploadfile`, {
      method: "post",
      // headers: {
      //   "content-type": "multipart/form-data",
      // },
      body: formData,
    });
    const result = await response.json();
    setProfileImg(result); // 서버에서 반환된 이미지 데이터 저장
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(profileImg);
    const result = await post(`${import.meta.env.VITE_API_URL}/user/accountnamevalid`, {
      user: {
        accountname: accountName,
      },
    });
    // console.log(result);
    if (result.payload?.message === "사용 가능한 계정ID 입니다.") {
      const result2 = await post(`${import.meta.env.VITE_API_URL}/user`, {
        user: {
          username: username,
          email: emailValue,
          password: passwordValue,
          accountname: accountName,
          intro: intro,
          image: `${import.meta.env.VITE_API_URL}/${profileImg.filename}` || "",
        },
      });
      // console.log(result2);
      dispatch(updateValidState2({ name: "accountNameValid", value: true }));
      const result3 = await post(`${import.meta.env.VITE_API_URL}/user/login`, {
        user: {
          email: emailValue,
          password: passwordValue,
        },
      });
      // console.log(result3);
      dispatch(setCredentials(result3.payload.user));
      navigate("/home");
    } else {
      setWarningMessage("*" + result.payload.message);
    }
  };

  if (loading) return <Loading />;
  if (error) return <div>에러: {error}</div>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className={styles.profileEditMain}>
          <div className={styles.profileEditImages}>
            <img className={styles.profileEditImg} src={profileImagePreview} alt="프로필 이미지" />
            <div className={styles.imageUploadWrapper}>
              <ImageUploadButton onChange={handleImageChange} />
            </div>
          </div>
        </div>
        <Input
          name="username"
          label="사용자 이름"
          warningMessage={usernameError}
          type="text"
          placeholder="2-10자 이내여야 합니다."
          onChange={handleUsernameChange}
        />
        <Input
          name="accountName"
          label="계정 ID"
          warningMessage={accountNameError ? accountNameError : warningMessage}
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          onChange={handleAccountNameChange}
        />
        <Input
          name="intro"
          label="소개"
          warningMessage={introError}
          type="text"
          placeholder="자신을 소개해 주세요.!"
          onChange={handleIntroChange}
        />
        <div className={styles.btnContainer}>
          <ButtonComponent
            children="코드그램 바로가기"
            disabled={
              !!usernameError ||
              !!accountNameError ||
              !username ||
              !accountName ||
              !!introError ||
              !intro ||
              !!warningMessage
            }
            buttonType="loginType"
            style={{
              marginTop: "15px",
              textAlign: "center",
              padding: "13px 0",
            }}
          />
        </div>
      </form>
    </>
  );
}
