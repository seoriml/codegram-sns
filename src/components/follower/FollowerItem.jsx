import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultProfileImage from "../../assets/images/user_profile.svg";
import ButtonComponent from "../ui/Button";
import styles from "./Follower.module.scss";
import useAPI from "../../hooks/useAPI";

const FollowerItem = ({ profile, myAccountName }) => {
  const [isFollowed, setIsFollowed] = useState(profile.isfollow);
  const { token } = useAPI();

  const profileImageSrc =
    profile.image === "http://146.56.183.55:5050/Ellipse.png" ||
    profile.image === "https://estapi.mandarin.weniv.co.kr/undefined"
      ? defaultProfileImage
      : profile.image;

  const handleFollow = async () => {
    const apiUrl = isFollowed
      ? `${import.meta.env.VITE_API_URL}/profile/${
          profile.accountname
        }/unfollow`
      : `${import.meta.env.VITE_API_URL}/profile/${profile.accountname}/follow`;

    try {
      const response = await fetch(apiUrl, {
        method: isFollowed ? "DELETE" : "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
        alert("요청에 실패했습니다.");
        return;
      }

      const result = await response.json();
      setIsFollowed(result.profile.isfollow);
    } catch (error) {
      console.error("요청 실패", error);
    }
  };

  const isMyProfile = profile.accountname === myAccountName;

  return (
    <li className={styles.followerItem}>
      <Link
        to={isMyProfile ? `/profile` : `/profile/${profile.accountname}`}
        className={styles.followerInfo}
      >
        <img
          src={profileImageSrc}
          alt={`${profile.username}의 프로필사진`}
          className={styles.profileImg}
        />
        <div>
          <h3 className={styles.username}>{profile.username}</h3>
          <p className={styles.accountname}>@{profile.accountname}</p>
        </div>
      </Link>
      <ButtonComponent
        buttonType={isFollowed ? "miniCancelType" : "miniFollowType"}
        className={isFollowed ? styles.miniCancelType : styles.miniFollowType}
        onClick={handleFollow}
      >
        {isFollowed ? "취소" : "팔로우"}
      </ButtonComponent>
    </li>
  );
};

export default FollowerItem;
