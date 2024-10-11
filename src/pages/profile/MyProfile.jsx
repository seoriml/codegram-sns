import React, { useState } from "react";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import ProfileTabs from "../../components/profile/profile-info/ProfileTabs";

export default function MyProfile() {
  const [myAccountName, setMyAccountName] = useState(null);

  const handleProfileLoad = (profile) => {
    if (profile && profile.accountname) {
      setMyAccountName(profile.accountname);
    }
  };

  return (
    <div>
      <ProfileInfo isMyProfile={true} onProfileLoad={handleProfileLoad} />
      {myAccountName && <ProfileTabs accountname={myAccountName} />}
    </div>
  );
}

// "codegram1"
// "String2"
