// action creator
const logIn = (data) => {
  return { type: 'LOG_IN', data };
};
const logOut = () => {
  return { type: 'LOG_OUT' };
};

// async action creator
const logInAsync = (data) => {
  return (dispatch, getState) => {
    // async action
    dispatch(logInRequest(data));
    try {
      setTimeout(() => {
        dispatch(logInSuccess(data));
      }, 2000);
    } catch (e) {
      dispatch(logInFailure(e));
    }
  };
};

const logInRequest = (data) => {
  return { type: 'LOG_IN_REQUEST', data };
};
const logInSuccess = (data) => {
  return { type: 'LOG_IN_SUCCESS', data };
};
const logInFailure = (error) => {
  return { type: 'LOG_IN_FAILURE', error };
};

export { logIn, logOut, logInAsync };
