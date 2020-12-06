import axios from "axios";
import { User, NewUser } from "../Interfaces/User";

const server = process.env.REACT_APP_SERVER;

export const getUsers = async (): Promise<User[] | any> => {
  if (!server) {
    console.log("REACT_APP_SERVER not set");
  }

  try {
    const res = await axios.get(`${server}/users`);
    return res.data.data;
  } catch (e) {
    console.log(e);
  }
};

export const createUser = (user: NewUser): Promise<User> => {
  return axios({
    method: "post",
    url: `${server}/users`,
    data: user,
  }).then((res) => res.data.data.users);
};

export const updateUser = (id: string, user: User): Promise<User> => {
  console.log(user);
  return axios({
    method: "patch",
    url: `${server}/users/${id}`,
    data: user,
  }).then((res) => res.data.data);
};
