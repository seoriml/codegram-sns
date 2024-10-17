import React, { useEffect, useState, useRef } from "react";
import useAPI from "../../hooks/useAPI";
import styles from "./ChatForm.module.scss";
import chatProfile from "../../assets/images/chat_profile.svg";

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
    <main className={styles.chatContainer}>
      <ul className={styles.chatList}>
        {chatList.length > 0 ? (
          chatList.map((chat, index) => (
            <li key={index} className={`${styles.messageWrapper} ${styles[chat.role]}`}>
              {chat.role === 'assistant' && (
                <img src={chatProfile} alt="코드그램 챗봇 프로필" className={styles.chatProfile} />
              )}
              <div className={styles.message}>
                {chat.content}
              </div>
            </li>
          ))
        ) : (
          <li className={styles.messageWrapper}>
            <h2 className={styles.message}>
              안녕하세요! 코드, 기술, 프로젝트, 취업 또는 일상적인 궁금증까지 무엇이든 물어보세요.
              고민이 있거나 해결하고 싶은 문제가 있다면 언제든 함께 해결해 드릴게요!
            </h2>
          </li>
        )}
        <li ref={chatEndRef} />
      </ul>

      <form onSubmit={handleSubmit} className={styles.chatForm}>
        <input
          type="text"
          value={question}
          className={styles.chatInput}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="메시지를 입력하세요"
          autoFocus
        />
        <button type="submit" className={styles.forwardButton}>전송</button>
      </form>
    </main>
  );
}