import * as React from 'react';
import './style.css'

// mui
import AddCommentIcon from '@mui/icons-material/AddComment';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import { blue } from '@mui/material/colors';
import { IconButton } from '@material-ui/core';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { changeShowStatusAction } from '../../../../store/Chat/Contacts/action';
import { contactSelector, contactLengthSelector } from '../../../../store/Chat/Contacts/selectror';


export const AddNewChat = () => {
    const [open, setValue] = React.useState(false);

    // redux
    const dispatch = useDispatch();

    // selector redux
    const Contacts = useSelector(contactSelector);
    const ContactsLength = useSelector(contactLengthSelector)

    // функция для добавления чата
    const addNewContact = (id) => {
        return () => {
            dispatch(changeShowStatusAction(id));
            handleClose();
        }
    }

    // функция открывает модальное окно
    const handleClickOpen = () => {
        setValue(true);
    }

    // функция закрывает модально окно
    const handleClose = () => {
        setValue(false);
    }

    const listRedner = () => {
        // если список пустой , напишет сообщение пользователю
        if (ContactsLength) {
            return (Contacts.filter(item => item.show === false).map((contact) => (
                <ListItem onClick={addNewContact(contact.id)} button key={contact.id}>
                    <ListItemAvatar>
                        <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                            <PersonIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{contact.name}</ListItemText>
                </ListItem>
            ))
            )
        }
        else {
            return <div className="noChats"><span>У вас нет других контактов</span> <SentimentVeryDissatisfiedIcon /></div>
        }

    }

    return (
        <div>
            {/* кнопка открывает модальное окно */}
            <IconButton onClick={handleClickOpen}>
                <AddCommentIcon className="addChatButton" />
            </IconButton>

            {/*  */}
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Выберете пользователя:</DialogTitle>
                <List sx={{ pt: 0 }}>
                    {listRedner()}
                </List>
            </Dialog>
        </div>
    );
}