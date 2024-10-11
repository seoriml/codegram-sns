import React, { useEffect, useState, useRef } from "react";
import useAPI from "../../hooks/useAPI";
import styles from "./ChatForm.module.scss";

export default function ChatForm() {
  const [question, setQuestion] = useState(""); // 사용자의 질문
  const [chatList, setChatList] = useState([]); // 화면에 뿌려줄 데이터, 질문들
  const [data, setData] = useState([
    {
      role: "system",
      content: "assistant는 친절한 답변가이다. 그리고 it 관련 질문만 답을 해준다. 취업에 관련된 정확한 정보를 준다.",
    },
  ]); // 질문과 답변 저장
  const { loading, error, post } = useAPI();
  const chatEndRef = useRef(null);

  // openAI API
  let url = `https://open-api.jejucodingcamp.workers.dev/`;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const newData = [...data, { role: "user", content: question }];
    setData(newData);
    setChatList((prev) => [...prev, { role: "user", content: question }]);
    setQuestion("");
    console.log(newData);
    const result = await post(url, newData);
    const assistantResponse = result.payload.choices?.[0]?.message.content;
    console.log(assistantResponse);
    setData((prev) => [...prev, { role: "assistant", content: assistantResponse }]);
    setChatList((prev) => [...prev, { role: "assistant", content: assistantResponse }]);
  };

  return (
    <>
      <ul className={styles.chatList}>
        {chatList.length > 0 ? (
          chatList.map((chat, index) => (
            <li key={index} className={styles[chat.role]}>
              {chat.content}
            </li>
          ))
        ) : (
          <li>대화를 시작하세요.</li>
        )}
        <div ref={chatEndRef} />
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="메시지를 입력하세요"
          autoFocus
        />
        <button type="submit">전송</button>
      </form>
    </>
  );
}
