// scss
import './chat.scss';
// реакт компоненты
import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom'
// мои компоненты
import { Form } from './Form';
import Message from './Message';
import { Contact } from './Contact';
import { Chats } from '../../data'

export const Chat = () => {
    // state
    const [messageList, setMessageList] = useState([])
    const [chatList] = useState(Chats)
    const { ChatId } = useParams(); // динамические данные
    // стейт специально для сохранения состояния и ответа робота
    const [params, setParams] = useState(ChatId)

    // массив актуальных сообщений
    const messageUser = messageList.filter(item => item.chatId === +ChatId) // массив актуальных сообщений


    // функция добавляет в массив сообщений отправленное пользователем
    const addNewMessage = useCallback((value) => {
        setMessageList([...messageList, {
            index: messageList.length,
            text: value,
            author: "You",
            chatId: +ChatId
        }])

    }, [messageList, ChatId])

    // функция для ответа роботом в чате
    const robotAnswer = (chatNumb) => {
        return () => {
            setMessageList([...messageList, {
                index: messageList.length,
                text: 'Привет, если ты видишь это сообщение, значит код ответа робота работает',
                author: chatList[ChatId - 1].name,
                chatId: +chatNumb
            }])
        }
    }

    // метод ЖЦ
    useEffect(() => {
        if (messageList[messageList.length - 1]?.author === 'You') {
            let answerDelay = setTimeout(robotAnswer(params), 3000);
            // исполнится при демонтаже, решает проблему бесконечного полного перерендера списка
            return () => {
                clearTimeout(answerDelay);
            }
        }

    });
    useEffect(
        // хук что бы получать актуальный id чата, только после добавления сообщения роботом(для правильных ответов робота)
        () => {
            setParams(ChatId)
        }, [messageList]
    )

    // template
    return (
        <div className="App Container">
            <div className="chatContact">
                <Contact props={{ chatList: chatList, ChatId: ChatId }} />
            </div>
            <div>
                <Message messageList={messageUser} />
                <Form addNewMessage={addNewMessage} />
            </div>
        </div>
    );
}
