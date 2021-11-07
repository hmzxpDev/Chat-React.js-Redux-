// css
import './style.css'
// material-ui
import { IconButton, List, ListItem, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Delete } from '@mui/icons-material';
// router
import { Link } from "react-router-dom";
import { useParams } from 'react-router';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { changeShowStatusAction } from '../../../../store/Chat/Contacts/action';
import { contactSelector } from '../../../../store/Chat/Contacts/selectror';


export default function ContactRender() {

    const dispatch = useDispatch();

    const Contacts = useSelector(contactSelector); // актуальные контакты
    const chatId = useParams().ChatId; // актуальный чат id

    // удаляем выбранный контакт
    const deleteContact = (id) => {
        return () => { dispatch(changeShowStatusAction(id)) }
    }


    // рендер кнопки удаления
    const deleteRender = (id) => {
        // кнопки удаления не будет на открытом чате
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

    return (
        <List >
            {contactsRender()}
        </List >
    )

}