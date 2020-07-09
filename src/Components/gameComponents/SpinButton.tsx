import React from "react";

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
