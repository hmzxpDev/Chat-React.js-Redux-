const ACTION_CHANGE_CHAT_SHOW = 'ACTION_CHANGE_CHAT_SHOW';

export const changeShowStatusAction = (idContact) => {
    return {
        type: ACTION_CHANGE_CHAT_SHOW,
        payload: idContact,
    }
}