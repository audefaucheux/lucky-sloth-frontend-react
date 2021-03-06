import React from "react";
import SlothLogo from "../../images/game/sloth-logo.png";
import { User } from "../../Types/User";
import "./styles/TopBanner.css";

interface TopBannerProps {
  user: User;
  setUser: (user?: User) => void;
}

const TopBanner = ({ user, setUser }: TopBannerProps) => {
  return (
    <div id="top-banner">
      <img src={SlothLogo} alt="sloth-logo" />
      <div id="current-user">
        <div className="text">{user.username} | </div>
        <button className="btn btn-danger" onClick={() => setUser()}>
          LOGOUT
        </button>
      </div>
    </div>
  );
};

export default TopBanner;
