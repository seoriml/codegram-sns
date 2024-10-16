import React from "react";
import FollowerItem from "./FollowerItem";
import styles from "./Follower.module.scss";

const FollowerList = ({ followers }) => {
  return (
    <ul className={styles.profileFollows}>
      {followers.map((profile) => (
        <FollowerItem key={profile._id} profile={profile} />
      ))}
    </ul>
  );
};

export default FollowerList;
