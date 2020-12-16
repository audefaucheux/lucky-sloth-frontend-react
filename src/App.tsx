import React, { useState, useEffect } from "react";
import axios from "axios";
import GameScreen from "./Components/Game/GameScreen";
import Login from "./Components/Login/Login";
import ErrorMessage from "./Components/Layout/ErrorMessage";
import Footer from "./Components/Layout/Footer";
import { User, NewUser } from "./Types/User";
import "./App.css";
import { getServerUrl } from "./Services/LuckySlothBackend";

// const defaultUser = {
//   credit: 200,
//   _id: "5fb16ea25be58baad0986d0b",
//   username: "Aude",
// };

const SlotMachineApp = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const getUsers = async () => {
    try {
      const response = await axios.get(`${getServerUrl()}/users`);
      setUsers(response.data.data);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  const createUser = async (user: NewUser): Promise<User | void> => {
    try {
      const response = await axios.post(`${getServerUrl()}/users`, user);
      setUser(response.data.data);
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

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
    getUsers();
  }, [user]);

  return (
    <>
      <div className="main">
        {errorMessage && (
          <ErrorMessage {...{ errorMessage, setErrorMessage }} />
        )}
        {!user ? (
          <Login {...{ users, findUser, errorMessage }} />
        ) : (
          <GameScreen {...{ users, user, setUser, setErrorMessage }} />
        )}
      </div>
      <Footer />
    </>
  );
};

export default SlotMachineApp;
