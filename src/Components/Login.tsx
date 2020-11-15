import React, { useState } from "react";
import { User } from "../Interfaces/User";

interface LoginProps {
  users: User[];
  findUser: (user: string) => void;
}

const Login = ({ users, findUser }: LoginProps) => {
  const [username, setUsername] = useState("");

  const handleUsersnameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    findUser(username);
  };

  return (
    <div id="login-content" className="center">
      <h1 className="text-center sea-green">Welcome to the Lucky Sloth!</h1>
      <form
        id="create-user-form"
        onSubmit={handleSubmit}
        className="form-container"
      >
        <input
          type="text"
          name="username"
          className="form-container-items"
          placeholder="enter username..."
          onChange={handleUsersnameChange}
          required
        />
        <input
          type="submit"
          value="PLAY"
          className="form-container-items btn btn-info"
          disabled={!users || users.length === 0}
        />
      </form>
      <img
        src="https://media3.giphy.com/media/BCtjVLKRoFVza/source.gif"
        alt="sloth-gif"
        className="center"
      />
    </div>
  );
};

export default Login;
