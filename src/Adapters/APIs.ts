import axios from "axios";
import { User } from "../Types/User";

const server = process.env.REACT_APP_SERVER;

export const updateUser = (id: string, user: User): Promise<User> => {
  console.log(user);
  return axios({
    method: "patch",
    url: `${server}/users/${id}`,
    data: user,
  }).then((res) => res.data.data);
};
