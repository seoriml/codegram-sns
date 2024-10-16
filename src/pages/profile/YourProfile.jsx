import React from "react";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import ProfileTabs from "../../components/profile/profile-info/ProfileTabs";
import { useParams } from "react-router-dom";

export default function YourProfile() {
  const { accountname } = useParams();

  return (
    <div>
      <ProfileInfo isMyProfile={false} accountname={accountname} />
      <ProfileTabs accountname={accountname} />
    </div>
  );
}

// 확인용 서버 계정
// accountname = {"ali"}
// export default function YourProfile() {
//   return <ProfileInfo isMyProfile={false} accountname={"ali"} />;
// }
