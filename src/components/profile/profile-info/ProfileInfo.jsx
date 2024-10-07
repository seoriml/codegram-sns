// 프로필 이미지, 사용자 이름, 팔로워/팔로잉 수

import React, { useEffect, useState } from "react";
import useApi from "../../../hooks/useAPI";
import ProfileImage from "../../../assets/images/user_profile.svg";
import ProfileAction from "./ProfileActions";
import BackButton from "../../ui/button/BackButton";
import VerticalButton from "../../ui/button/VerticalButton";
import styles from "./ProfileInfo.module.scss";

const ProfileInfo = ({ accountname, isMyProfile }) => {
  const { data, get, error } = useApi();
  const [profile, setProfile] = useState(null);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingsCount, setFollowingsCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // API를 통해 프로필 정보 가져오기
    const fetchProfile = async () => {
      const token = localStorage.getItem("userToken");
      const reqUrl = isMyProfile ? `user/myinfo` : `profile/${accountname}`;
      await get(
        `${import.meta.env.VITE_API_URL}/${reqUrl}`,
        "application/json",
        token
      );
    };
    fetchProfile();
  }, [get, accountname]);

  useEffect(() => {
    // 데이터를 성공적으로 가져온 경우
    if (data && (data.profile || data.user)) {
      const profile = isMyProfile ? data.user : data.profile;
      setProfile(profile);
      setFollowersCount(profile.followerCount); // 초기 팔로워 수 설정
      console.log(setFollowersCount);
      setFollowingsCount(profile.followingCount); // 초기 팔로잉 수 설정
    } else if (error) {
      setErrorMessage("해당 계정이 존재하지 않습니다.");
    }
  }, [data, error]);

  // 프로필 정보가 없고 에러가 있을 경우 에러 메시지 출력
  if (error) {
    return <div>{errorMessage}</div>;
  }
  if (!profile) {
    return <div>로딩 중입니다.</div>;
  }

  return (
    <div className={styles.profileInfo}>
      {/* 상단 바 - 백 버튼과 점 세개 버튼 */}
      <div className={styles.profileHeader}>
        <BackButton />
        <VerticalButton />
      </div>

      {/* 프로필 이미지 */}
      <img
        src={profile?.image || ProfileImage}
        alt={`${profile?.username || "사용자"}의 프로필 이미지`}
        className={styles.profileImage}
      />

      {/* 사용자 정보 */}
      <div className={styles.profileDetails}>
        <h2 className={styles.profileUsername}>{profile.username}</h2>
        <p className={styles.profileAccountname}>@{profile.accountname}</p>
        <p className={styles.profileIntro}>{profile.intro}</p>
      </div>

      {/*팔로워/팔로잉*/}
      <div className={styles.profileFollow}>
        <span>{followersCount} followers</span>
        <span>{followingsCount} followings</span>
      </div>

      <ProfileAction
        accountname={profile.accountname}
        isfollow={profile.isfollow}
        setFollowersCount={setFollowersCount}
        followersCount={followersCount}
        isMyProfile={isMyProfile}
      />
    </div>
  );
};
export default ProfileInfo;
