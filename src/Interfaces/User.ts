export const defaultUser: User = {
  _id: 0,
  username: "",
  credit: 0,
};
export interface User {
  _id: number;
  username: string;
  credit: number;
}

export interface NewUser {
  username: string;
}
