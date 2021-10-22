import './contact.scss'
import { IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Delete } from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { changeShowStatusAction } from '../../../store/Chat/Contacts/action';
import { AddNewChat } from './AddContact';
import { contactSelector } from '../../../store/Chat/Contacts/selectror';

export const Contact = () => {


    // актуальные контакты
    const Contacts = useSelector(contactSelector);

    // актуальный чат id
    const chatId = useParams().ChatId;

    // для отправки в стор
    const dispatch = useDispatch();

    const deleteContact = (id) => {
        return () => { dispatch(changeShowStatusAction(id)) }
    }


    // рендер иконки удаления только на не открытых чатах
    const deleteRender = (id) => {
        if (+chatId !== id) {
            return (
                <IconButton className="contactDeleteIcon" onClick={deleteContact(id)} >
                    <Delete />
                </IconButton>
            )
        }

    }

    // функция отрисовывает список контактов
    const contactsRender = () => {
        return (
            Contacts.filter(contact => contact.show === true).map(contact => {
                return (<div className="contactItem" key={contact.id}>
                    <Link className="contactLink" to={`/chats/${contact.id}`} >
                        <ListItem className="contactName" selected={+ chatId === contact.id} >
                            <PersonIcon fontSize="large" color="primary" />
                            <ListItemText > {contact.name} </ListItemText>
                        </ListItem>
                    </Link>
                    {deleteRender(contact.id)}
                </div>)
            })
        )
    }

    // template
    return (
        <div className="chatContact">
            <List >
                {contactsRender()}
            </List >
            <div className="addChat" >
                <AddNewChat />
            </div>
        </div>
    )
}