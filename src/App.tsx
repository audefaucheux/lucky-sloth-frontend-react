import React, { useState, useEffect } from "react";
import { getUsers, createUser } from "./Adapters/APIs";
import GameScreen from "./Components/GameScreen";
import Login from "./Components/Login";
import Footer from "./Components/layout/Footer";
import ErrorMessage from "./Constants/ErrorMessage";
import { User, NewUser, defaultUser } from "./Interfaces/User";
import "./App.css";

const SlotMachineApp = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>(defaultUser);
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
        {user.username === "" ? (
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
