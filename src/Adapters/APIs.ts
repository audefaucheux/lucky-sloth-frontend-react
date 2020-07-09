import axios from "axios";
import User from "../Interfaces/User";

const server = process.env.REACT_APP_SERVER;

export const getUsers = (): Promise<User[]> => {
  return axios({
    method: "get",
    url: `${server}/users`,
  }).then((res) => res.data);
};

export const createUser = (data: User): Promise<User> => {
  return axios({
    method: "post",
    url: `${server}/users`,
    data,
  }).then((res) => res.data);
};

export const updateUser = (id: number, data: User): Promise<User> => {
  return axios({
    method: "patch",
    url: `${server}/users/${id}`,
    data,
  }).then((res) => res.data);
};
