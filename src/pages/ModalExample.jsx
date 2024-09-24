//ModalExample.jsx

import React from "react";
import { useModal } from "../hooks/useModal";
import Modal from "../components/ui/Modal";

const App = () => {
  const {
    isOpen,
    title,
    confirmButtonText,
    cancelButtonText,
    confirmAction,
    cancelAction,
    openModal,
    closeModal,
  } = useModal();

  const handleOpenModal = () => {
    openModal({
      modalTitle: "게시글을 삭제할까요?",
      onConfirm: () => {
        alert("삭제되었습니다!");
        closeModal();
      },
      onCancel: () => {
        alert("취소되었습니다!");
        closeModal();
      },
      confirmText: "삭제",
      cancelText: "취소",
    });
  };

  return (
    <div>
      <button onClick={handleOpenModal}>모달열기</button>
      <Modal
        isOpen={isOpen}
        title={title}
        onCancel={cancelAction}
        onConfirm={confirmAction}
        cancelText={cancelButtonText}
        confirmText={confirmButtonText}
      />
    </div>
  );
};

export default App;
