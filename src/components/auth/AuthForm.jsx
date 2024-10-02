import React from "react";

export default function AuthForm() {
  return (
    <>
      <form>
        <Input name="email" label="이메일" type="email" placeholder="이메일을 입력하세요" />
        <Input name="password" label="비밀번호" type="password" placeholder="이메일을 입력하세요" />
      </form>
    </>
  );
}
