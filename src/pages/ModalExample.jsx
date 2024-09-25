import React from "react";
import Modal from "../components/ui/Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/modalSlice";

const App = () => {
  const dispatch = useDispatch();
  const { isOpen, title, confirmButtonText, cancelButtonText } = useSelector(
    (state) => state.modal
  );

  const handleOpenModal = () => {
    dispatch(
      openModal({
        modalTitle: "게시글을 삭제할까요?",
        confirmText: "삭제",
        cancelText: "취소",
      })
    );
  };

  const handleConfirm = () => {
    alert("삭제되었습니다!");
    dispatch(closeModal());
  };

  const handleCancel = () => {
    alert("취소되었습니다!");
    dispatch(closeModal());
  };

  return (
    <div>
      <button onClick={handleOpenModal}>모달열기</button>
      <Modal
        isOpen={isOpen}
        title={title}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        cancelText={cancelButtonText}
        confirmText={confirmButtonText}
      />
    </div>
  );
};

export default App;
