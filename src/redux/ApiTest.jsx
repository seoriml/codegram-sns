import React, { useEffect } from "react";
import useAPI from "../hooks/useAPI";

export default function ApiTest() {
  const { data, loading, error, post } = useAPI();

  useEffect(() => {
    post(`${import.meta.env.VITE_API_URL}/user`, {
      user: {
        username: "String2",
        email: "test@test2.com",
        password: "String21312",
        accountname: "String2",
        intro: "String2",
        image: "",
      },
    });
  }, []);

  if (loading) return <div>로딩 중...</div>;
  if (error) return <div>에러: {error}</div>;
  if (!data) return null;
  return <div>ApiTest</div>;
}
