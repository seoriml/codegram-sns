import React, { useState } from "react";
import ProfileInfo from "../../components/profile/profile-info/ProfileInfo";
import ProfileTabs from "../../components/profile/profile-info/ProfileTabs";
import Portfolio from "../../components/profile/portfolio/Portfolio";

export default function MyProfile() {
  const [myAccountName, setMyAccountName] = useState(null);

  const handleProfileLoad = (profile) => {
    if (profile && profile.accountname) {
      setMyAccountName(profile.accountname);
    }
  };

  return (
    <div>
      <ProfileInfo accountname={myAccountName} isMyProfile={true} onProfileLoad={handleProfileLoad} />
      <Portfolio accountname={myAccountName} />
      {myAccountName && <ProfileTabs accountname={myAccountName} />}
    </div>
  );
}

// "codegram1"
// "String2"
