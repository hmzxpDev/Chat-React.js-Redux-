export const messagesActualUser = (id) => (state) => {
    return state.Messages[`${id}`]
}