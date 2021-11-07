const ADD_MESSAGE_ACTION = 'ADD_MESSAGE_ACTION';

// используем thunk
export const addNewMessage = (message, chatNum) => (dispatch, getState) => {

    const allMessages = getState().Messages[chatNum];
    const Contact = getState().Contacts[chatNum - 1].name

    setTimeout(() => {
        if (allMessages[allMessages.length - 1].author === 'Human') {
            return dispatch({
                type: ADD_MESSAGE_ACTION,                       // засунул action в middleware, что бы было нагляднее
                payload: {
                    index: allMessages.length,
                    author: Contact,
                    text: 'Я работаю через redux thunk, не беспокойся'
                },
                chatNum: chatNum,
            })
        }
    }, 3000)

    return dispatch({
        type: ADD_MESSAGE_ACTION,
        payload: message,
        chatNum: chatNum,
    })
}
