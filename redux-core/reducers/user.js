const initialState = { data: null, isLoggingIn: true };

export function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case 'LOG_IN':
      return { ...prevState, data: action.data };
    case 'LOG_OUT':
      return { ...prevState, data: null };
    default:
      return prevState;
  }
}
