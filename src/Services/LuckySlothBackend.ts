export const getServerUrl = (): string | void => {
  if (!process.env.REACT_APP_SERVER) {
    throw new Error("REACT_APP_SERVER not set");
  }

  return process.env.REACT_APP_SERVER;
};
