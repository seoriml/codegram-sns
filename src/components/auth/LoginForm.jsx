import React, { useState } from "react";
import Input from "../ui/Input";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, redirect } from "react-router-dom";
import useAPI from "./../../hooks/useAPI";
import { setCredentials } from "../../redux/apiSlice";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const { token, isLoggedIn, post, loading, error } = useAPI();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await post(`${import.meta.env.VITE_API_URL}/user/login`, {
      user: {
        email: email,
        password: password,
      },
    });
    console.log(result);
    if (result.payload?.user?.token) {
      dispatch(setCredentials(result.payload.user));
      navigate("/home", { replace: true });
    } else {
      setWarningMessage(result.payload.message);
    }
  };
  //   console.log(warningMessage);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  return (
    <form onSubmit={handleSubmit} noValidate>
      <Input
        name="email"
        label="이메일"
        warningMessage={"*" + warningMessage}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        label="비밀번호"
        // warningMessage={warningMessage}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
