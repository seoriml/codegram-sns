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
  const { post, del, data, error, token, profileData } = useAPI();
  const [isFollowed, setIsFollowed] = useState(isfollow);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleFollowClick = async () => {
    if (isMyProfile) {
      setErrorMessage("자기 자신을 팔로우 할 수 없습니다.");
      return;
    }

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

  const handleProfileEdit = () => {
    navigate(`/profile/edit`);
  };

  const handlePostCreate = () => {
    navigate(`/product/create`);
  };

  useEffect(() => {
    if (profileData && profileData.profile) {
      setIsFollowed(profileData?.profile?.isfollow);
    } else if (error) {
      setErrorMessage("해당 계정이 존재하지 않습니다.");
    }
  }, [profileData, error]);

  return (
    <ul className={styles.profileAction}>
      {isMyProfile ? (
        <li className={styles.myProfileButton}>
          <ButtonComponent
            buttonType="profileType"
            onClick={handleProfileEdit}
            className={styles.profileType}
          >
            프로필 수정
          </ButtonComponent>
          <ButtonComponent
            buttonType="profileType"
            onClick={handlePostCreate}
            className={styles.profileType}
          >
            내 작업 등록
          </ButtonComponent>
        </li>
      ) : (
        <li className={styles.yourProfileButton}>
          <ButtonComponent
            buttonType={isFollowed ? "profileType" : "followType"}
            onClick={handleFollowClick}
            className={isFollowed ? styles.profileType : styles.followType}
          >
            {isFollowed ? "언팔로우" : "팔로우"}
          </ButtonComponent>
          {errorMessage && <p>{errorMessage}</p>} {/* 에러 메시지 출력 */}
          {error && <p>{error.message}</p>}{" "}
          {/* API 호출에서 발생한 에러 출력 */}
        </li>
      )}
    </ul>
  );
};

export default ProfileAction;
