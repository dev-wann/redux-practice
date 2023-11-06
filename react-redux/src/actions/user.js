// async action creator
const logIn = (data) => {
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

const logOut = () => {
  return (dispatch, getState) => {
    // async action
    dispatch(logOutRequest());
    try {
      setTimeout(() => {
        dispatch(logOutSuccess());
      }, 2000);
    } catch (e) {
      dispatch(logOutFailure(e));
    }
  };
};
const logOutRequest = () => {
  return { type: 'LOG_OUT_REQUEST' };
};
const logOutSuccess = () => {
  return { type: 'LOG_OUT_SUCCESS' };
};
const logOutFailure = (error) => {
  return { type: 'LOG_OUT_FAILURE', error };
};

export { logIn, logOut };
