import React from "react";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import ProfileTabs from "../../components/profile/profile-info/ProfileTabs";
import { useParams } from "react-router-dom";
import Portfolio from "../../components/profile/portfolio/Portfolio";

export default function YourProfile() {
  const { accountname } = useParams();

  return (
    <div>
      <ProfileInfo isMyProfile={false} accountname={accountname} />
      <Portfolio accountname={accountname} isMyProfile={false} />
      <ProfileTabs accountname={accountname} />
    </div>
  );
}
