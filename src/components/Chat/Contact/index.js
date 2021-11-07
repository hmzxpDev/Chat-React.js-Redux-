import './contact.scss'
import AddContact from './AddContact'
import ContactRender from './ContactsRender'
export const Contact = () => {


    return (
        <div className="chatContact">
            <ContactRender />
            <AddContact />
        </div>
    )
}