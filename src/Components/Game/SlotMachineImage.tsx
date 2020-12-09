import React from "react";
import Image from "../../Types/Image";

interface SlotMachineProps {
  image: Image;
  id: number;
}

const SlotMachine = ({ image, id }: SlotMachineProps) => {
  return (
    <div id={`image-${id}`} className="slot-images-size">
      <img src={image.src} alt="placeholder" className={image.className} />
    </div>
  );
};

export default SlotMachine;
