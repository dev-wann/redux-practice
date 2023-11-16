import { useDispatch, useSelector } from 'react-redux';
import { AsyncState } from '../redux/AsyncState';
import { useCallback, useRef, useEffect } from 'react';
import { addTodo, getTodos } from '../redux/module/todoList';
import TodoItemComponent from './TodoItemComponent';

export default function TodoListComponent() {
  const newTodoRef = useRef(null);

  // redux
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.data);
  const todos = useSelector((state) => state.todoList.todos);
  const todosState = useSelector((state) => state.todoList.todosState);
  const error = useSelector((state) => state.todoList.error);

  useEffect(() => {
    if (userData) {
      dispatch(getTodos());
    }
  }, [userData]);

  // event handlers
  const onAddTodo = useCallback(() => {
    dispatch(addTodo({ todo: newTodoRef.current.value }));
    newTodoRef.current.value = '';
  }, []);

  const todoList = Object.entries(todos);

  return (
    <>
      <h2>Todo List</h2>
      {userData ? (
        todosState === AsyncState.PENDING ? (
          <div>Loading...</div>
        ) : (
          <>
            <input type='text' ref={newTodoRef} />
            <button onClick={onAddTodo}>Add Todo</button>
            {todosState === AsyncState.REJECTED ? (
              <div style={{ color: 'red' }}>{error}</div>
            ) : (
              <>
                {todoList.length ? (
                  <ul style={{ paddingLeft: '20px' }}>
                    {todoList.map(([id, todo]) => (
                      <TodoItemComponent key={id} id={id} todo={todo} />
                    ))}
                  </ul>
                ) : (
                  <div>Empty</div>
                )}
              </>
            )}
          </>
        )
      ) : (
        <div>Please Log In.</div>
      )}
    </>
  );
}
