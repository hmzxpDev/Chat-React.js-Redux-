import { Routes } from './Route'
import { Provider } from "react-redux";
import { store } from "./store"
import { persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;
