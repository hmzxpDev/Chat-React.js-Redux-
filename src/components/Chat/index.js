// scss
import './chat.scss';
// мои компоненты
import SendMessages from './Messages/SendMessages';
import RenderMessages from './Messages/RenderMessages';
import { Contact } from './Contact';

export const Chat = () => {

    // template
    return (
        <div className="App Container">
            <div className="contacts">
                <Contact />
            </div>
            <div className="messages">
                <RenderMessages />
                <SendMessages />
            </div>
        </div>
    );
}
