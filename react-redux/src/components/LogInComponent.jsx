import { useDispatch, useSelector } from "react-redux";
import { logIn, logOut } from "../actions/user"
import { useCallback, useRef } from "react";

export default function LogInComponent() {
  const idRef = useRef('');
  const pwRef = useRef('');

  const user = useSelector((state) => state.user.data);
  const isLoggingIn = useSelector((state) => state.user.isLoggingIn);
  const dispatch = useDispatch();

  const onLogIn = useCallback((id, pw) => {
    dispatch(logIn({id: id, password: pw}));
  }, []);
  const onLogOut = useCallback(() => {
    dispatch(logOut());
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
          <button onClick={() => onLogIn(idRef.current, pwRef.current)}>
            Log In
          </button>
        </>
      )}
    </>
  );
}