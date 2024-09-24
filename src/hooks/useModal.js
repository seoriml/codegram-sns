//useModal.js

import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [confirmAction, setConfirmAction] = useState(() => () => {});
  const [cancelAction, setCancelAction] = useState(() => () => {});
  const [confirmButtonText, setConfirmButtonText] = useState("Confirm");
  const [cancelButtonText, setCancelButtonText] = useState("Cancel");

  const openModal = ({
    modalTitle = "모달 타이틀",
    onConfirm = () => {},
    onCancel = () => {},
    confirmText = "확인",
    cancelText = "취소",
  }) => {
    setTitle(modalTitle);
    setConfirmAction(() => onConfirm);
    setCancelAction(() => onCancel);
    setConfirmButtonText(confirmText);
    setCancelButtonText(cancelText);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    title,
    confirmButtonText,
    cancelButtonText,
    confirmAction,
    cancelAction,
    openModal,
    closeModal,
  };
};
