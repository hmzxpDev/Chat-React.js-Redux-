import React, { useState, useRef } from "react";
// Material UI
import { styled } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import { Button, TextField } from '@material-ui/core';


// Стилизация компонентов
const MyButton = styled(Button)({
    background: 'teal',
    color: 'white',
    height: 56,
    padding: '0 30px',
    width: 85,
    '&:hover': {
        background: 'teal'
    }
});
const ChatInput = styled(TextField)({
    backgroundColor: 'white',
    width: 1156,
})


export const Form = ({ addNewMessage }) => {
    const [value, setValue] = useState('');
    const inputRef = useRef(null);
    // функция убирает обновление формы, отправляет и очищает форму
    const handleSubmit = (event) => {
        event.preventDefault();
        addNewMessage(value);
        setValue('')
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