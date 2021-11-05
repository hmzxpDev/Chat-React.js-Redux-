import { call, put, takeEvery } from 'redux-saga/effects'

const robotAnswer = setTimeout(() => {
    if (allMessages[allMessages.length - 1].author === 'Human') {
        return {
            type: 'ADD_MESSAGE_ACTION',
            payload: {
                index: allMessages.length,
                author: Contact,
                text: 'Я работаю через redux thunk, не беспокойся'
            },
            chatNum: chatNum,
        }
    }
}, 3000)
const a = () => {
    let anwser = yield call(robotAnswer);
    yield put(anwser);
}