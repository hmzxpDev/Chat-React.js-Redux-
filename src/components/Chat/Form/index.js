import React, { useState, useRef, useCallback } from "react";
// Material UI
import SendIcon from '@material-ui/icons/Send';
import { MyButton, ChatInput } from "./style";
import { useDispatch } from "react-redux";
import { addNewMessage } from '../../../store/Chat/Messages/actions'
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { actualContactSelector } from "../../../store/Chat/Contacts/selectror"
import { messagesActualUser } from "../../../store/Chat/Messages/selector";

export const Form = () => {
    // стейт для сбора данных и передачи в диспач
    const [value, setValue] = useState('');

    // автофокус инпута
    const inputRef = useRef(null);

    // считывает с url ChatId
    const chatNum = useParams().ChatId;

    // redux
    const actualContact = useSelector(actualContactSelector(chatNum));
    const actualMessages = useSelector(messagesActualUser(chatNum));
    // для отправки в стор
    const dispatch = useDispatch();

    // обьект сообщения, который будет передан в стор
    const messageObj = useCallback((text, author) => {
        return {
            index: actualMessages.length,
            author: author,
            text: text
        }

    }, [actualMessages]
    )
    // функция отправки сообщения пользователем
    const sendUserMessage = useCallback(() => {
        const userMessage = messageObj(value, 'Human');
        dispatch(addNewMessage(userMessage, chatNum)); //chatNum для поиска в сторе нужного ключа массива сообщений
    }, [chatNum, dispatch, messageObj, value])

    // функция ответа робота
    const botAnswer = useCallback(() => {
        setTimeout(() => {
            // Если автор последнего сообщения человек  - то бот пишет
            if (actualMessages[actualMessages.length - 1].author === 'Human') {
                // создаем сообщение
                const botMessage = messageObj('Вас приветствует высший разум', actualContact)
                // отправляем в стор
                dispatch(addNewMessage(botMessage, chatNum))
            }
        }, 3000)
    }, [actualMessages, actualContact, chatNum, dispatch, messageObj])
    // здесь не будет очищения таймаута, потому что он должен добавить ответ робота в массив даже если компонент размонтирован 



    // функция отправляет и очищает форму без релоуда
    const handleSubmit = (event) => {
        event.preventDefault();
        // отправляем сообщение
        sendUserMessage();
        // запускаем ответ бота
        botAnswer();
        // очищаем форму
        setValue('');
        // возвращаем фокус на инпут
        inputRef.current.focus();
    }

    // функция получения данных контролируемой формы
    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <ChatInput
                autoFocus={true}
                inputRef={inputRef}
                value={value}
                onChange={handleChange}
                variant="outlined"
                placeholder="Введите сообщение"
            />
            <MyButton
                onClick={handleSubmit}
            >
                <SendIcon />
            </MyButton>
        </form>
    )
}