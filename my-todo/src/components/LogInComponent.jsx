import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn, logOut } from '../redux/module/user';

export default function LogInComponent() {
  const idRef = useRef('');
  const pwRef = useRef('');

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const isFailed = useSelector((state) => state.user.isFailed);

  // event handlers
  const onLogIn = useCallback((id, pw) => {
    dispatch(logIn(id, pw));
    idRef.current = '';
    pwRef.current = '';
  }, []);
  const onLogOut = useCallback(() => {
    dispatch(logOut());
  }, []);

  return (
    <>
      {userData ? (
        <>
          <div>
            Hello <b>{userData.nickname}</b>
          </div>
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
          {isFailed ? (
            <div style={{ color: 'red' }}>Invalid ID/Password. Try again.</div>
          ) : (
            <></>
          )}
        </>
      )}
    </>
  );
}
