

const initialState = {
    '1': [
        {
            index: 0,
            author: 'Bot Dima',
            text: 'Welocome'
        },
        {
            index: 1,
            author: 'Human',
            text: 'Было дело!'
        },
        {
            index: 2,
            author: 'Bot Dima',
            text: 'Ну и что вы скажете'
        },

    ],
    '2': [
        {
            index: 0,
            author: 'Bot Tima',
            text: 'Welocome'
        },
        {
            index: 1,
            author: 'Human',
            text: 'Было дело!'
        },
        {
            index: 2,
            author: 'Bot Tima',
            text: 'Ну и что вы скажете'
        },

    ],
    '3': [
        {
            index: 0,
            author: 'Bot Biba',
            text: 'Welocome'
        },
        {
            index: 1,
            author: 'Human',
            text: 'Было дело!'
        },
        {
            index: 2,
            author: 'Bot Biba',
            text: 'Ну и что вы скажете'
        },

    ]
}


export const reducerMessages = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE_ACTION':
            const chat = state[`${action.chatNum}`]
            chat.push(action.payload)
            return { ...state }
        default:
            return state
    }
}