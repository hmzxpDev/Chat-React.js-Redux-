// scss
import './chat.scss';
// мои компоненты
import { Form } from './Form';
import Message from './Message';
import { Contact } from './Contact';

export const Chat = () => {

    // template
    return (
        <div className="App Container">
            <div className="chatContact">
                <Contact />
            </div>
            <div className="chatMainWindow">
                <Message />
                <Form />
            </div>
        </div>
    );
}
