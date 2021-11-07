import { styled } from '@material-ui/core/styles';
import { Button, TextField } from '@material-ui/core';

// Стилизация компонентов
export const MyButton = styled(Button)({
    background: 'teal',
    color: 'white',
    height: 56,
    padding: '0 30px',
    width: 85,
    '&:hover': {
        background: 'teal'
    }
});
export const ChatInput = styled(TextField)({
    backgroundColor: 'white',
    width: 700 - 85,
})