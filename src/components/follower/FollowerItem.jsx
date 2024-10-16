import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultProfileImage from "../../assets/images/user_profile.svg";
import ButtonComponent from "../ui/Button";
import styles from "./Follower.module.scss";

const FollowerItem = ({ profile }) => {
  const [isFollowed, setIsFollowed] = useState(profile.isfollow);
  const profileImageSrc =
    profile.image === "http://146.56.183.55:5050/Ellipse.png"
      ? defaultProfileImage
      : profile.image;

  return (
    <li className={styles.followerItem}>
      <Link to={profileLink} className={styles.followerInfo}>
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
        onClick={() => setIsFollowed((prev) => !prev)}
        className={styles.followerButton}
      >
        {isFollowed ? "취소" : "팔로우"}
      </ButtonComponent>
    </li>
  );
};

export default FollowerItem;
