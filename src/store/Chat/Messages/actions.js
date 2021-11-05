const ADD_MESSAGE_ACTION = 'ADD_MESSAGE_ACTION';

export const addNewMessage = (message, chatNum) => {
    return {
        type: ADD_MESSAGE_ACTION,
        payload: message,
        chatNum: chatNum,
    }
}