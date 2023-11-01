// action creator
const logIn = (data) => {
  return { type: 'LOG_IN', data };
};
const logOut = () => {
  return { type: 'LOG_OUT' };
};

export { logIn, logOut };
