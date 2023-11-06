const initialState = { data: null, isLoggingIn: true };

export function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case 'LOG_IN_REQUEST':
      return { ...prevState, isLoggingIn: true };
    case 'LOG_IN_SUCCESS':
      return { ...prevState, data: action.data, isLoggingIn: false };
    case 'LOG_IN_FAILURE':
      return { ...prevState, isLoggingIn: false };
    case 'LOG_OUT_REQUEST':
      return { ...prevState, isLoggingIn: true };
    case 'LOG_OUT_SUCCESS':
      return { ...prevState, data: null, isLoggingIn: false };
    case 'LOG_OUT_FAILURE':
      return { ...prevState, isLoggingIn: false };
    default:
      return prevState;
  }
}
