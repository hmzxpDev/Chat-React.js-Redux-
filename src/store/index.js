import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { reducerContacts } from './Chat/Contacts/reducer';
import { reducerMessages } from './Chat/Messages/reducer';
import { reducerProfile } from './Profile/reducer'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage


const persistConfig = {
    key: 'root',
    storage,
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, combineReducers(
    {
        Messages: reducerMessages,
        Profile: reducerProfile,
        Contacts: reducerContacts
    }));

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);


export const persistor = persistStore(store);
