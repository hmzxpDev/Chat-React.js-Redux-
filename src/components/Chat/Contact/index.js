import './contact.scss'
import { List, ListItem, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import { Link } from "react-router-dom";

export const Contact = ({ props }) => {

    // функция отрисовывает список контактов
    const contactsRender = () => {
        return (
            props.chatList.map(contact => (
                <Link className="contact" to={`/chats/${contact.id}`} key={contact.id}>
                    <ListItem button={true} selected={+ props.ChatId === contact.id} >
                        <PersonIcon fontSize="large" color="primary" />
                        <ListItemText > {contact.name}
                        </ListItemText>
                    </ListItem>
                </Link>
            ))

        )
    }

    return (
        <List>
            {contactsRender()}
        </List>
    )
}