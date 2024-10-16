import React, { useEffect, useState } from "react";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import useAPI from "./../../hooks/useAPI";
import { updateValidState } from "../../redux/validationSlice";
import ButtonComponent from "../ui/Button";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { token, isLoggedIn, post, loading, error } = useAPI();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateValidState({ name: "emailValid", value: false, name2: "passwordValid", value2: false }));
    dispatch(updateValidState({ name: "emailValue", value: "", name2: "passwordValue", value2: "" }));
  }, []);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError("* 이메일을 입력해주세요.");
    } else if (!regex.test(email)) {
      setEmailError("* 잘못된 이메일 형식입니다.");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    if (!password) {
      setPasswordError("* 비밀번호를 입력해주세요.");
    } else if (password.length < 6) {
      setPasswordError("* 비밀번호는 6자 이상이어야 합니다.");
    } else {
      setPasswordError("");
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    validateEmail(value);
    setWarningMessage("");
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await post(`${import.meta.env.VITE_API_URL}/user/emailValid`, {
      user: {
        email: email,
      },
    });
    console.log(result);
    if (result.payload?.message === "사용 가능한 이메일 입니다.") {
      dispatch(updateValidState({ name: "emailValid", value: true, name2: "passwordValid", value2: true }));
      dispatch(updateValidState({ name: "emailValue", value: email, name2: "passwordValue", value2: password }));
      navigate("/profile/setup");
    } else {
      setWarningMessage("*" + result.payload.message);
      setPassword("");
    }
  };

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="email"
        label="이메일"
        warningMessage={emailError ? emailError : warningMessage}
        type="email"
        placeholder="이메일 주소를 입력해 주세요."
        onChange={handleEmailChange}
      />
      <Input
        name="password"
        label="비밀번호"
        warningMessage={passwordError}
        type="password"
        placeholder="비밀번호를 설정해 주세요."
        onChange={handlePasswordChange}
        onBlur={() => validatePassword(password)}
      />
      <ButtonComponent
        children="다음"
        disabled={!!emailError || !!passwordError || !email || !password || !!warningMessage}
        buttonType="loginType"
        style={{
          marginTop: "14px",
          position: "relative",
          left: "calc(50% - (322px / 2))",
          width: "100%",
          textAlign: "center",
          padding: "13px 0",
        }}
      />
    </form>
  );
}
