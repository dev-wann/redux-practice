import { useDispatch, useSelector } from "react-redux";
import { useCallback, useRef } from "react";
import { userSlice } from "../slicers/user";
import { logIn } from "../actions/user";

export default function LogInComponent() {
  const idRef = useRef('');
  const pwRef = useRef('');

  const user = useSelector((state) => state.user.data);
  const isLoggingIn = useSelector((state) => state.user.isLoggingIn);
  const dispatch = useDispatch();

  const onLogIn = useCallback(() => {
    dispatch(logIn({id: idRef.current, password: pwRef.current}));
  }, []);
  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logOut());
    idRef.current = ''
    pwRef.current = ''
  }, []);

  return (
    <>
      {isLoggingIn ? (
        <p>Processing...</p>
      ) : user ? (
        <>
          <p>Hello {user.id}</p>
          <button onClick={onLogOut}>Log Out</button>
        </>
      ) : (
        <>
          <div>
            <span>ID: </span>
            <input onChange={(e) => (idRef.current = e.target.value)} />
          </div>
          <div>
            <span>PW: </span>
            <input onChange={(e) => (pwRef.current = e.target.value)} />
          </div>
          <button onClick={onLogIn}>
            Log In
          </button>
        </>
      )}
    </>
  );
}