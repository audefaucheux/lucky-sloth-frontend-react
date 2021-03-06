import React, { useState, useEffect } from "react";
import axios from "axios";
import { getServerUrl } from "../../Services/LuckySlothBackend";
import { uniq } from "lodash";
import imageCollection from "../../Helpers/ImageCollection";
import BetOption from "./BetOption";
import Leaderboard from "./Leaderboard";
import SlotMachineImage from "./SlotMachineImage";
import SpinButton from "./SpinButton";
import ThemeSelection from "./ThemeSelection";
import TopBanner from "../Layout/TopBanner";
import Image from "../../Types/Image";
import { User } from "../../Types/User";
import placeholderImage from "../../images/game/question-mark.png";
import "./styles/GameScreen.css";

interface GameScreenProps {
  users: User[];
  user: User;
  setUser: (user?: User) => void;
  setErrorMessage: (error?: string) => void;
}

const GameScreen = ({
  users,
  user,
  setUser,
  setErrorMessage,
}: GameScreenProps) => {
  const imagePlaceholder: Image = {
    src: placeholderImage,
    className: "",
  };

  const [selectedTheme, setSelectedTheme] = useState<string>("sloth");
  const [bet, setBet] = useState<number>(10);
  const [image1, setImage1] = useState<Image>(imagePlaceholder);
  const [image2, setImage2] = useState<Image>(imagePlaceholder);
  const [image3, setImage3] = useState<Image>(imagePlaceholder);

  const setSpinningPlaceholder = (imageSetter: (image: Image) => void) =>
    imageSetter({
      src: placeholderImage,
      className: "animated infinite shake",
    });

  const getRandomNumber = (): number => Math.floor(Math.random() * 3);

  const spinResults = (): number[] => [
    getRandomNumber(),
    getRandomNumber(),
    getRandomNumber(),
  ];

  const renderImage = (index: number, imageSetter: (image: Image) => void) => {
    const imageUrl: string = imageCollection[selectedTheme][index];
    imageSetter({ src: imageUrl, className: "" });
  };

  const updateUser = async (id: string, user: User): Promise<User | void> => {
    try {
      const response = await axios.patch(`${getServerUrl()}/users/${id}`, user);
      setUser(response.data.data);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const getResult = (randomNumberArray: number[]) => {
    const uniqueNumberArray = uniq(randomNumberArray);
    if (uniqueNumberArray.length === 1) {
      const userUpdate = {
        ...user,
        credit: user.credit + bet * 5,
      };
      updateUser(userUpdate._id, userUpdate);
    } else {
      const userUpdate = { ...user, credit: user.credit - bet };
      updateUser(userUpdate._id, userUpdate);
    }
  };

  const handleSpin = () => {
    setSpinningPlaceholder(setImage1);
    setSpinningPlaceholder(setImage2);
    setSpinningPlaceholder(setImage3);

    const randomNumberArray: number[] = spinResults();

    setTimeout(() => renderImage(randomNumberArray[0], setImage1), 1000);
    setTimeout(() => renderImage(randomNumberArray[1], setImage2), 1400);
    setTimeout(() => renderImage(randomNumberArray[2], setImage3), 1900);
    setTimeout(() => getResult(randomNumberArray), 2000);
  };

  useEffect(() => {
    if (bet > user.credit) setBet(user.credit);
  }, [user, bet]);

  return (
    <div className="text-center">
      <TopBanner user={user} setUser={setUser} />
      <h1>
        Your current credit is{" "}
        <span className="sea-green"> £{user.credit}</span>
      </h1>
      <BetOption {...{ bet, setBet, user }} />
      <ThemeSelection {...{ selectedTheme, setSelectedTheme }} />
      <div id="slot-machine">
        <div id="slot-image-container">
          <SlotMachineImage image={image1} id={1} />
          <SlotMachineImage image={image2} id={2} />
          <SlotMachineImage image={image3} id={3} />
        </div>
      </div>
      {user.credit <= 0 ? (
        <div className="text">You don't have enough credit to spin</div>
      ) : (
        <SpinButton {...{ user, handleSpin }} />
      )}
      <Leaderboard users={users} />
    </div>
  );
};

export default GameScreen;
