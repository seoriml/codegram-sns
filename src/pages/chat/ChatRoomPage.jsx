import React from "react";
import ChatForm from "../../components/chat/ChatForm";
import styles from "./ChatRoomPage.module.scss";
import BackButton from "../../components/ui/button/BackButton";

export default function ChatRoomPage() {
  return (
    <>
      <header className={styles.chatHeader}>
        <div className={styles.leftGroup}>
          <BackButton />
          <h1 className={styles.chatTitle}>
            코드그램 챗봇 - <span className={styles.chatNickname}>고드리</span>
          </h1>
        </div>
      </header>
      <section className={styles.chatFormMarginBottom}>
        <ChatForm />
      </section>
    </>
  );
}
