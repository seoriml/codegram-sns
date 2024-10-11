import React from "react";
import ChatForm from "../../components/chat/ChatForm";
import styles from "./ChatRoomPage.module.scss";

export default function ChatRoomPage() {
  return (
    <div className={styles.container}>
      <ChatForm />
    </div>
  );
}
