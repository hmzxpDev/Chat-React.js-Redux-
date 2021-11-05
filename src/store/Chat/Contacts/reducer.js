const initialState = [
    { id: 1, name: 'Bot Dima', show: true },
    { id: 2, name: 'Bot Tima', show: true },
    { id: 3, name: 'Bot Biba', show: true },
]



export const reducerContacts = (state = initialState, action) => {
    switch (action.type) {
        case 'ACTION_CHANGE_CHAT_SHOW':
            state[action.payload - 1].show = !state[action.payload - 1].show
            return [...state]
        default:
            return state
    }
}