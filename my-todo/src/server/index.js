// 사용자 인증에 사용할 ID/PassWord
const ID = 'abcd';
const PASSWORD = '1234';

// 로그인 요청
function logInRequest(id, password) {
  if (id === ID && password === PASSWORD) {
    // 로그인 성공 시 nickname 반환
    return { nickname: 'devdev' };
  }
  throw new Error();
}

// 로그아웃 요청
function logOutRequest() {
  return { status: 'success' };
}

// // 로그인 요청
// function logInRequest(id, password) {
//   return Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (id === ID && password === PASSWORD) {
//         // 로그인 성공 시 nickname 반환
//         resolve({ nickname: 'devdev' });
//       }
//       reject('fail');
//     }, 500);
//   });
// }

// // 로그아웃 요청
// function logOutRequest() {
//   return Promise((resolve, reject) => {
//     setTimeout(() => resolve('success'), 500);
//   });
// }

export { logInRequest, logOutRequest };
