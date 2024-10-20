import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useApi from "../../../hooks/useAPI";
import useScrollHeader from "../../../hooks/useScrollHeader";
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
    // API를 통해 프로필 정보 가져오기
    const fetchProfile = async () => {
      const reqUrl = isMyProfile ? `user/myinfo` : `profile/${accountname}`;
      const res = await get(`${import.meta.env.VITE_API_URL}/${reqUrl}`, "application/json", token);
      if (reqUrl === `user/myinfo`) {
        dispatch(setSessionStorageData(res.payload));
      }
    };
    fetchProfile();
  }, []);
  //[get, accountname, isMyProfile]

  useEffect(() => {
    // 데이터를 성공적으로 가져온 경우
    if (profileData && (profileData?.profile || profileData?.user)) {
      const profile = isMyProfile ? profileData?.user : profileData?.profile;
      setProfile(profile);
      setFollowersCount(profile?.followerCount); // 초기 팔로워 수 설정
      // console.log("profileInfo: ", setFollowersCount);
      setFollowingsCount(profile?.followingCount); // 초기 팔로잉 수 설정
      if (onProfileLoad) {
        onProfileLoad(profile);
      }
    } else if (error) {
      setErrorMessage("해당 계정이 존재하지 않습니다.");
    }
  }, [profileData, error, isMyProfile, onProfileLoad]);

  // 프로필 정보가 없고 에러가 있을 경우 에러 메시지 출력
  if (error) {
    return <div>{errorMessage}</div>;
  }
  if (!profile) {
    return <Loading />;
  }

  const profileImageSrc =
    profile?.image === "http://146.56.183.55:5050/Ellipse.png" ||
    profile?.image === "https://estapi.mandarin.weniv.co.kr/undefined"
      ? ProfileImage
      : profile?.image;

  return (
    <div className={styles.profileInfo}>
      {/* 상단 바 - 백 버튼과 점 세개 버튼 */}
      <div className={`${styles.profileHeader} ${isVisible ? "" : styles.headerHidden}`}>
        <div className={styles.leftGroup}>
          <BackButton />
          <img src={LogoImage} alt="Logo" className={styles.logo} onClick={() => navigate("/home")} />
        </div>
        <VerticalButton />
      </div>

      <div className={styles.profileTopSection}>
        {/*팔로워/*/}
        <div className={styles.profileFollow} onClick={() => navigate(`/profile/${accountname}/followers`)}>
          <div className={styles.followersCount}>{followersCount}</div>
          <p className={styles.label}>followers</p>
        </div>

        {/* 프로필 이미지 */}
        <img
          src={profileImageSrc}
          alt={`${profile?.username || "사용자"}의 프로필 이미지`}
          className={styles.profileImage}
        />
        {/*팔로잉*/}
        <div className={styles.profileFollow} onClick={() => navigate(`/profile/${accountname}/followings`)}>
          <div className={styles.followingsCount}>{followingsCount} </div>
          <p className={styles.label}>followings</p>
        </div>
      </div>

      {/* 사용자 정보 */}
      <div className={styles.profileDetails}>
        <h2 className={styles.profileUsername}>{profile.username}</h2>
        <p className={styles.profileAccountname}>@{profile.accountname}</p>
        <p className={styles.profileIntro}>{profile.intro}</p>
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
