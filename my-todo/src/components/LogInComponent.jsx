import { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userSlice, { logIn } from '../redux/module/user';
import { AsyncState } from '../redux/AsyncState';

export default function LogInComponent() {
  const idRef = useRef('');
  const pwRef = useRef('');

  // redux
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const logInState = useSelector((state) => state.user.logInState);
  const error = useSelector((state) => state.user.error);

  // event handlers
  const onLogIn = useCallback((id, password) => {
    dispatch(logIn({ id, password }));
    idRef.current = '';
    pwRef.current = '';
  }, []);
  const onLogOut = useCallback(() => {
    dispatch(userSlice.actions.logOut());
  }, []);

  return (
    <div style={{ height: '100px' }}>
      {logInState === AsyncState.PENDING ? (
        <div>Processing...</div>
      ) : userData ? (
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
          {logInState === AsyncState.REJECTED ? (
            <div style={{ color: 'red' }}>{error}</div>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
}
