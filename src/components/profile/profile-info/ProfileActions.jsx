// your profile - 팔로우, 언팔로우 버튼
// my profile - 프로필 수정, 상품 등록 버튼

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../ui/Button";
import useAPI from "../../../hooks/useAPI";
import styles from "./ProfileInfo.module.scss";

const ProfileAction = ({
  accountname,
  isMyProfile,
  isfollow,
  setFollowersCount,
  followersCount,
  setFollowingCount,
}) => {
  const { post, del, data, error, token } = useAPI();
  const [isFollowed, setIsFollowed] = useState(isfollow);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFollowClick = async () => {
    // 자기 자신을 팔로우하려고 할 때
    if (isMyProfile) {
      setErrorMessage("자기 자신을 팔로우 할 수 없습니다.");
      return;
    }

    // API를 통해 팔로우/언팔로우 정보 가져오기
    const reqUrl = isFollowed
      ? `profile/${accountname}/unfollow`
      : `profile/${accountname}/follow`;

    if (isFollowed) {
      // 언팔로우 요청
      await del(
        `${import.meta.env.VITE_API_URL}/${reqUrl}`,
        "application/json",
        token
      );
      setFollowersCount(followersCount - 1);
    } else {
      // 팔로우 요청
      await post(
        `${import.meta.env.VITE_API_URL}/${reqUrl}`,
        null,
        "application/json",
        token
      );
      setFollowersCount(followersCount + 1);
    }
  };
  console.log(setFollowersCount);

  const handleProfileEdit = () => {
    navigate(`/profile/edit`); // 프로필 수정 페이지로 이동
  };

  const handlePostCreate = () => {
    navigate(`/post/create`); // 게시글 작성 페이지로 이동
  };

  useEffect(() => {
    if (data && data.profile) {
      setIsFollowed(data.profile.isfollow);
    } else if (error) {
      setErrorMessage("해당 계정이 존재하지 않습니다.");
    }
  }, [data, error]);

  return (
    <div className={styles.profileAction}>
      {isMyProfile ? (
        <div className={styles.myProfileButton}>
          <ButtonComponent buttonType="profileType" onClick={handleProfileEdit}>
            프로필 수정
          </ButtonComponent>
          <ButtonComponent buttonType="profileType" onClick={handlePostCreate}>
            게시글 작성
          </ButtonComponent>
        </div>
      ) : (
        <div className={styles.yourProfileButton}>
          <ButtonComponent
            buttonType={isFollowed ? "profileType" : "followType"}
            onClick={handleFollowClick}
          >
            {isFollowed ? "언팔로우" : "팔로우"}
          </ButtonComponent>
          {errorMessage && <p>{errorMessage}</p>} {/* 에러 메시지 출력 */}
          {error && <p>{error.message}</p>}{" "}
          {/* API 호출에서 발생한 에러 출력 */}
        </div>
      )}
    </div>
  );
};

export default ProfileAction;
