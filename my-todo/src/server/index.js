import { v4 as uuidv4 } from 'uuid';

// 사용자 인증에 사용할 ID/PassWord
const ID = 'abcd';
const PASSWORD = '1234';

// user
// 로그인 요청
export function logInRequest(id, password) {
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

// todos CRUD
// create
export function addTodoRequest(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let todos = getTodos();
        const id = uuidv4();
        if (!todos) {
          todos = { [id]: todo };
        } else {
          todos[id] = todo;
        }
        setTodos(todos);
        resolve(todos);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

// read
export function getTodosRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todos = getTodos();
      if (!todos) {
        reject(`Read Error: No todo in DB.`);
      }
      resolve(todos);
    }, 1000);
  });
}

// update
export function updateTodoRequest(id, todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todos = getTodos();
      if (!todos[id]) {
        reject(`Update Error: Item '${id}' doesn't exist.`);
      }
      todos[id] = todo;
      setTodos(todos);
      resolve(todos);
    }, 1000);
  });
}

// delete
export function deleteTodoRequest(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const todos = getTodos();
      if (!todos[id]) {
        reject(`Delete Error: Item '${id}' doesn't exist.`);
      }
      delete todos[id];
      setTodos(todos);
      resolve(todos);
    }, 1000);
  });
}

function getTodos() {
  return JSON.parse(localStorage.getItem('todos'));
}
function setTodos(todos) {
  localStorage.setItem('todos', JSON.stringify(todos));
}
