export const defaultUser: User = {
  id: 0,
  username: "",
  credit: 0,
};
export interface User {
  id: number;
  username: string;
  credit: number;
}

export interface NewUser {
  username: string;
}
