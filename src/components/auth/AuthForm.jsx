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

export default function AuthForm() {
  const [username, setUsername] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");
  const [profileImagePreview, setProfileImagePreview] = useState(ProfileImagePlaceholder);
  const [img, setImg] = useState();
  const [profileImg, setProfileImg] = useState("");
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
  const handleImageChange = (files) => {
    if (files && files[0]) {
      const file = files[0];
      setImg(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImagePreview(e.target.result); // 업로드한 이미지 미리보기 설정
      };
      reader.readAsDataURL(file); // 파일을 읽어와서 데이터 URL로 변환
    }
    setProfileImg(uploadImage(img));
  };

  // 이미지 업로드 함수
  const uploadImage = async (img) => {
    const formData = new FormData();
    formData.append("image", img);
    console.log(img);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/image/uploadfile`, {
      method: "post",
      // headers: {
      //   "content-type": "multipart/form-data",
      // },
      body: formData,
    });
    const result = await response.json();
    return result;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(profileImg);
    const result = await post(`${import.meta.env.VITE_API_URL}/user/accountnamevalid`, {
      user: {
        accountname: accountName,
      },
    });
    console.log(result);
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
      console.log(result2);
      dispatch(updateValidState2({ name: "accountNameValid", value: true }));
      const result3 = await post(`${import.meta.env.VITE_API_URL}/user/login`, {
        user: {
          email: emailValue,
          password: passwordValue,
        },
      });
      console.log(result3);
      dispatch(setCredentials(result3.payload.user));
      navigate("/home");
    } else {
      setWarningMessage("*" + result.payload.message);
    }
  };

  if (loading) return <div>로딩 중...</div>;
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
            marginTop: "14px",
            textAlign: "center",
            position: "relative",
            left: "calc(50% - (322px / 2))",
            width: "100%",
            padding: "13px 0",
          }}
        />
      </form>
    </>
  );
}
