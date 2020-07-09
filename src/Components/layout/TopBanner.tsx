import React from "react";
import User from "../../Interfaces/User";

interface TopBannerProps {
  user: User;
  setUser: (user: any) => void;
}

const TopBanner = ({ user, setUser }: TopBannerProps) => {
  return (
    <div id="top-banner">
      <img src="./images/game/sloth-logo.png" alt="" />
      <div id="current-user">
        <div className="text">{user.username} | </div>
        <button className="btn btn-danger" onClick={() => setUser({})}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
