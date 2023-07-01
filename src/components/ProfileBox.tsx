import React from "react";

type Props = {};

const ProfileBox = (props: Props) => {
  return (
    <div className="profile-container frosty">
      <div className="profile-top-bar">
        <div className="user-info-container column">
          <div className="username">SimpleLogic</div>
          <div className="join-date">Jun 30, 2023</div>
        </div>

        <div className="profile-icon"></div>
      </div>
    </div>
  );
};

export default ProfileBox;
