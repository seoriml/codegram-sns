import React from "react";
import FollowerItem from "./FollowerItem";
import styles from "./Follower.module.scss";

const FollowerList = ({ followers }) => {
  console.log(myAccountName);
  return (
    <ul className={styles.profileFollowsWrapper}>
      {followers.map((profile) => (
        <FollowerItem key={profile._id} profile={profile} />
      ))}
    </ul>
  );
};

export default FollowerList;
