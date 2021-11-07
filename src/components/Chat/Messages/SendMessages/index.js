import React, { useState, useRef, useCallback } from "react";
// Material UI
import SendIcon from '@material-ui/icons/Send';
import { MyButton, ChatInput } from "./style";
// redux
import { useDispatch } from "react-redux";
import { addNewMessage } from '../../../../store/Chat/Messages/actions'
import { useSelector } from "react-redux";
import { messagesActualUser } from "../../../../store/Chat/Messages/selector";
// router
import { useParams } from "react-router";

export default function Form() {
    // стейт для сбора данных и передачи в диспач
    const [value, setValue] = useState('');

    const inputRef = useRef(null); // автофокус инпута

    const chatNum = useParams().ChatId; // считывает из url номер чата

    const dispatch = useDispatch();

    const actualMessages = useSelector(messagesActualUser(chatNum)); // selector

    // обьект с данными сообщения
    const messageObj = useCallback((text, author) => {
        return {
            index: actualMessages.length,
            author: author,
            text: text
        }

    }, [actualMessages]
    )

    // отправка сообщения в redux
    const sendUserMessage = useCallback(() => {
        const userMessage = messageObj(value, 'Human');
        dispatch(addNewMessage(userMessage, chatNum));
    }, [chatNum, dispatch, messageObj, value])

    // работа с формой
    const handleSubmit = (event) => {
        event.preventDefault();

        sendUserMessage(); // отправляем сообщение

        setValue('');  // очищаем форму

        inputRef.current.focus();// возвращаем фокус на инпут
    }

    // получаем данные из инпута
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