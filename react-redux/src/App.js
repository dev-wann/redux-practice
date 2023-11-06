import './App.css';
import { Provider } from 'react-redux';
import { store } from './store';
import LogInComponent from './components/LogInComponent';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <LogInComponent />
      </div>
    </Provider>
  );
}

export default App;
