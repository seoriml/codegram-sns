import React from "react";
import { Link } from "react-router-dom";
import styles from "./Search.module.scss";
import { getProfileImageSrc } from '../utils/profileImageUtils';
import defaultProfileIcon from "../../assets/images/user_profile.svg";

const SearchResultItem = ({ user }) => {
  const profileImageSrc = getProfileImageSrc(user.image, defaultProfileIcon);

  return (
    <li>
      <Link
        to={`/profile/${user.accountname}`}
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
