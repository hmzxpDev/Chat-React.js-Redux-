export const contactSelector = (state) => {
    return state.Contacts
}

export const contactLengthSelector = (state) => {
    return state.Contacts.filter(item => item.show === false).length !== 0
}

export const actualContactSelector = (id) => (state) => {
    return state.Contacts[id - 1].name
}