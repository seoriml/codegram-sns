import React from "react";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import ProfileTabs from "../../components/profile/profile-info/ProfileTabs";

export default function MyProfile() {
  return (
    <div>
      <ProfileInfo isMyProfile={true} />
      <ProfileTabs />
    </div>
  );
}
