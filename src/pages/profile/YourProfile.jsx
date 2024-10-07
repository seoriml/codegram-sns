import React from "react";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import { useParams } from "react-router-dom";

export default function YourProfile() {
  const { accountName } = useParams;
  return <ProfileInfo isMyProfile={false} accountName={accountName} />;
}

// 확인용 서버 계정
// accountname = {"ali"}
// export default function YourProfile() {
//   return <ProfileInfo isMyProfile={false} accountname={"ali"} />;
// }
