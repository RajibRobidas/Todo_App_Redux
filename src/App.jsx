import Todo from './components/todo';
import './App.css';
import { Provider } from "react-redux";
import { store } from './app/store';
import AddForm from './components/AddForm';

function App() {

  return (
    <>
      <Provider store={store}>
        <Todo />
        <AddForm />
      </Provider>
    </>
  )
}

export default App
