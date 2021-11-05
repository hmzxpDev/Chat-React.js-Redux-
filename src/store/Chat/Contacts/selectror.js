export const contactSelector = (state) => {
    return state.Contacts
}

export const contactLengthSelector = (state) => {
    return state.Contacts.filter(item => item.show === false).length !== 0
}
