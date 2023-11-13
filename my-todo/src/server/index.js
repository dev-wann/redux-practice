// 사용자 인증에 사용할 ID/PassWord
const ID = 'abcd';
const PASSWORD = '1234';

// 로그인 요청
function logInRequest(id, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id === ID && password === PASSWORD) {
        // 로그인 성공 시 nickname 반환
        resolve({ nickname: 'devdev' });
      }
      reject('Invalid ID/Password. Try again.');
    }, 1000);
  });
}

// 로그아웃 요청
function logOutRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('success'), 1000);
  });
}

export { logInRequest, logOutRequest };
