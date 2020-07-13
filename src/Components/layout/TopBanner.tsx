import React from "react";
import { User, defaultUser } from "../../Interfaces/User";

interface TopBannerProps {
  user: User;
  setUser: (user: User) => void;
}

const TopBanner = ({ user, setUser }: TopBannerProps) => {
  return (
    <div id="top-banner">
      <img src="./images/game/sloth-logo.png" alt="" />
      <div id="current-user">
        <div className="text">{user.username} | </div>
        <button className="btn btn-danger" onClick={() => setUser(defaultUser)}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
