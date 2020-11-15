import axios from "axios";
import { User, NewUser } from "../Interfaces/User";

const server = process.env.REACT_APP_SERVER;

export const getUsers = (): Promise<User[]> => {
  return axios({
    method: "get",
    url: `${server}/users`,
  }).then((res) => res.data.data);
};

export const createUser = (user: NewUser): Promise<User> => {
  return axios({
    method: "post",
    url: `${server}/users`,
    data: user,
  }).then((res) => res.data.data.users);
};

export const updateUser = (id: number, user: User): Promise<User> => {
  console.log(user);
  return axios({
    method: "patch",
    url: `${server}/users/${id}`,
    data: user,
  }).then((res) => res.data.data);
};
