import './App.css';
import { Provider } from 'react-redux';
import store from './redux/index';
import LogInComponent from './components/LogInComponent';
import TodoListComponent from './components/TodoListComponent';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <h1>My TodoList</h1>
        <LogInComponent />
        <TodoListComponent />
      </Provider>
    </div>
  );
}

export default App;
