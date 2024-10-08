import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.scss";
import defaultProfileIcon from "../../assets/images/user_profile.svg";

const SearchResultItem = ({ user }) => {
  const profileImageSrc =
    user.image === "http://146.56.183.55:5050/Ellipse.png"
      ? defaultProfileIcon
      : user.image;

  return (
    <li>
      <Link
        to={`/post/${user.accountname}/userpost`}
        className={styles.userResultItem}
      >
        <img
          src={profileImageSrc}
          alt={`${user.username}의 프로필사진`}
          className={styles.profileImg}
        />
        <div>
          <h3 className={styles.username}>{user.username}</h3>
          <p className={styles.accountname}>@{user.accountname}</p>
        </div>
      </Link>
    </li>
  );
};

export default SearchResultItem;
