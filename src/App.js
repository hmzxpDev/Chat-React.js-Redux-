// scss
import './App.scss';
import { Routes } from './components/Route'
import { Provider } from "react-redux";
import { store } from "./store"

function App() {

  // template
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
  );
}

export default App;
