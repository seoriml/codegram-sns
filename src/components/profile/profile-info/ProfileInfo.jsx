import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useAPI";
import useScrollHeader from "../../../hooks/useScrollHeader";
import { getProfileImageSrc } from '../../utils/profileImageUtils';
import ProfileImage from "../../../assets/images/user_profile.svg";
import LogoImage from "../../../assets/images/symbol_logo_codegram_title.svg";
import ProfileAction from "./ProfileActions";
import BackButton from "../../ui/button/BackButton";
import VerticalButton from "../../ui/button/VerticalButton";
import Loading from "../../ui/Loading";
import styles from "./ProfileInfo.module.scss";
import { useDispatch } from "react-redux";
import { setSessionStorageData } from "../../../redux/apiSlice";

const ProfileInfo = ({ accountname, isMyProfile, onProfileLoad }) => {
  const { data, get, error, token, profileData } = useApi();
  const [profile, setProfile] = useState(null);
  const [followersCount, setFollowersCount] = useState(0);
  const [followingsCount, setFollowingsCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const isVisible = useScrollHeader();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProfile = async () => {
      const reqUrl = isMyProfile ? `user/myinfo` : `profile/${accountname}`;
      const res = await get(
        `${import.meta.env.VITE_API_URL}/${reqUrl}`,
        "application/json",
        token
      );
      if (reqUrl === `user/myinfo`) {
        dispatch(setSessionStorageData(res.payload));
      }
    };
    fetchProfile();
  }, []);

  useEffect(() => {
    if (profileData && (profileData?.profile || profileData?.user)) {
      const profile = isMyProfile ? profileData?.user : profileData?.profile;
      setProfile(profile);
      setFollowersCount(profile?.followerCount);
      setFollowingsCount(profile?.followingCount);
      if (onProfileLoad) {
        onProfileLoad(profile);
      }
    } else if (error) {
      setErrorMessage("해당 계정이 존재하지 않습니다.");
    }
  }, [profileData, error, isMyProfile, onProfileLoad]);

  if (error) {
    return <div>{errorMessage}</div>;
  }
  if (!profile) {
    return <Loading />;
  }

  const profileImageSrc = getProfileImageSrc(profile?.image, ProfileImage);

  return (
    <div className={styles.profileInfo}>
      {/* 상단 바 - 백 버튼과 점 세개 버튼 */}
      <header
        className={`${styles.profileHeader} ${
          isVisible ? "" : styles.headerHidden
        }`}
      >
        <h1 className={styles.leftGroup}>
          <BackButton />
          <img
            src={LogoImage}
            alt="Logo"
            className={styles.logo}
            onClick={() => navigate("/home")}
          />
        </h1>
        <VerticalButton />
      </header>

      <ul className={styles.profileTopSection}>
        {/*팔로워/*/}
        <li
          className={styles.profileFollow}
          onClick={() => navigate(`/profile/${accountname}/followers`)}
        >
          <span className={styles.followersCount}>{followersCount}</span>
          <p className={styles.label}>followers</p>
        </li>

        {/* 프로필 이미지 */}
        <li>
          <figure>
            <img
              src={profileImageSrc}
              alt={`${profile?.username || "사용자"}의 프로필 이미지`}
              className={styles.profileImage}
            />
          </figure>
        </li>
        {/*팔로잉*/}
        <li
          className={styles.profileFollow}
          onClick={() => navigate(`/profile/${accountname}/followings`)}
        >
          <span className={styles.followingsCount}>{followingsCount} </span>
          <p className={styles.label}>followings</p>
        </li>
      </ul>

      {/* 사용자 정보 */}
      <section className={styles.profileDetails}>
        <h2 className={styles.profileUsername}>{profile.username}</h2>
        <p className={styles.profileAccountname}>@{profile.accountname}</p>
        <p className={styles.profileIntro}>{profile.intro}</p>
      </section>

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
