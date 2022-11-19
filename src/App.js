import logo from './logo.svg';
import './App.css';
import AppRouter from './config/router';
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
