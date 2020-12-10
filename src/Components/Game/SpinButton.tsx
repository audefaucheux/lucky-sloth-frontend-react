import React from "react";
import "./styles/SpinButton.css";

interface SpinButtonProps {
  handleSpin: () => void;
}

const SpinButton = ({ handleSpin }: SpinButtonProps) => {
  return (
    <button onClick={handleSpin} className="spin-button">
      SPIN
    </button>
  );
};

export default SpinButton;
