import React, { useState, useEffect } from "react";
import { getUsers, createUser } from "./Adapters/APIs";
import GameScreen from "./Components/Game/GameScreen";
import Login from "./Components/Login/Login";
import Footer from "./Components/Layout/Footer";
import ErrorMessage from "./Constants/ErrorMessage";
import { User, NewUser } from "./Interfaces/User";
import "./App.css";

const defaultUser = {
  credit: 200,
  _id: "5fb16ea25be58baad0986d0b",
  username: "Aude",
};

const SlotMachineApp = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const findUser = (usernameInput: string) => {
    const existingUser = users.find(
      ({ username }) => username === usernameInput
    );

    if (existingUser) {
      setUser(existingUser);
    } else {
      const newUser: NewUser = { username: usernameInput };
      createUser(newUser);
    }
  };

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((e) => setErrorMessage(ErrorMessage.USERS_NOT_RETRIEVED));
  }, [user]);

  return (
    <>
      <div className="main">
        {errorMessage && console.log(errorMessage)}
        {!user ? (
          <Login {...{ users, findUser }} />
        ) : (
          <GameScreen {...{ users, user, setUser }} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default SlotMachineApp;
