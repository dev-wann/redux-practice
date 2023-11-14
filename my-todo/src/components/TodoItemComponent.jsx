import { useCallback, useRef, useState } from 'react';
import { deleteTodo, updateTodo } from '../redux/module/todoList';
import { useDispatch } from 'react-redux';

export default function TodoItemComponent({ id, todo }) {
  const [isEdit, setEdit] = useState(false);
  const todoRef = useRef(null);

  const dispatch = useDispatch();

  // event handlers
  const startEdit = useCallback(() => {
    setEdit(true);
  }, []);
  const confirmEdit = useCallback(() => {
    setEdit(false);
    dispatch(updateTodo(id, todoRef.current.value));
  }, []);
  const cancelEdit = useCallback(() => {
    setEdit(false);
  }, []);
  const onDelete = useCallback(() => {
    dispatch(deleteTodo(id));
  }, []);

  return (
    <li key={id}>
      {isEdit ? (
        <>
          <input defaultValue={todo} ref={todoRef}></input>{' '}
          <button onClick={confirmEdit}>Confirm</button>{' '}
          <button onClick={cancelEdit}>Cancel</button>
        </>
      ) : (
        <>
          <span>{todo}</span> <button onClick={startEdit}>Edit</button>{' '}
          <button onClick={onDelete}>Delete</button>
        </>
      )}
    </li>
  );
}
