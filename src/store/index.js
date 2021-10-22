import { createStore, combineReducers } from 'redux'
import { reducerContacts } from './Chat/Contacts/reducer';
import { reducerMessages } from './Chat/Messages/reducer';
import { reducerProfile } from './Profile/reducer'

const rootReducer = combineReducers(
    {
        Messages: reducerMessages,
        Profile: reducerProfile,
        Contacts: reducerContacts
    })

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


