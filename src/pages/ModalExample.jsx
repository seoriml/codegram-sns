import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal, closeModal } from "../redux/modalSlice";
import ConfirmModal from "../components/ui/modal/ConfirmModal";
import OptionsModal from "../components/ui/modal/OptionsModal";

const ModalExample = () => {
  const dispatch = useDispatch();
  const { modalType } = useSelector((state) => state.modal);

  // ConfirmModal
  const actionHandlersConfirm = {
    delete: () => {
      alert("게시글이 삭제되었습니다!");
      dispatch(closeModal());
    },
  };

  const handleOpenConfirmModal = () => {
    dispatch(
      openModal({
        modalType: "confirm",
        modalTitle: "게시글을 삭제할까요?",
        confirmButtonText: "삭제",
        cancelButtonText: "취소",
        confirmActionId: "delete",
      })
    );
  };

  // OptionModal
  const actionHandlersOptions = {
    option1: () => {
      alert("옵션 1이 선택되었습니다!");
      dispatch(closeModal());
    },
    option2: () => {
      console.log("옵션 2가 선택되었습니다!");
      dispatch(closeModal());
    },
  };

  const handleOpenOptionsModal = () => {
    const options = [
      { text: "옵션 1", color: "red", actionId: "option1" },
      { text: "옵션 2", actionId: "option2" },
    ];

    dispatch(
      openModal({
        modalType: "options",
        options: options,
      })
    );
  };

  return (
    <div>
      <h1>모달 예시</h1>
      <div>
        <button onClick={handleOpenConfirmModal}>컨펌 모달 열기</button>
      </div>
      <div>
        <button onClick={handleOpenOptionsModal}>옵션 모달 열기</button>
      </div>
      {/* 모달 타입에 따라 다른 모달 렌더링 */}
      {modalType === "confirm" && (
        <ConfirmModal actionHandlers={actionHandlersConfirm} />
      )}
      {modalType === "options" && (
        <OptionsModal actionHandlers={actionHandlersOptions} />
      )}
    </div>
  );
};

export default ModalExample;
