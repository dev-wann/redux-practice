import './App.css';
import { Provider } from 'react-redux';
import store from './redux/index';
import LogInComponent from './components/LogInComponent';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <h1>My TodoList</h1>
        <LogInComponent />
      </Provider>
    </div>
  );
}

export default App;
