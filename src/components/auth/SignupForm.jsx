import React from "react";
import Input from "../ui/Input";

export default function SignupForm() {
  return (
    <form>
      <Input name="email" label="이메일" type="email" placeholder="이메일 주소를 입력해 주세요." />
      <Input name="password" label="비밀번호" type="password" placeholder="비밀번호를 설정해 주세요." />
    </form>
  );
}
