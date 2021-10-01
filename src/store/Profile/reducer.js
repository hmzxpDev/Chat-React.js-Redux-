
const initialState = {
    like: false,
    follow: false,
}

export const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LIKE_ACTION':
            return {
                ...state,
                like: !state.like,
            }
        case 'CHANGE_FOLLOW_ACTION':
            return {
                ...state,
                follow: !state.follow,
            }
        default:
            return state
    }
}