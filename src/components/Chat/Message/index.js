import './message.scss';
import { useEffect } from 'react';

export default function Message({ messageList }) {
    // функция рендера
    const messagesRender = () => {
        return messageList.map(message =>
            <div key={message.index}>
                <span className="author">{message.author}</span>: {message.text}
            </div>

        )

    }


    // функция опускает скроллер вниз
    const handleScroll = () => {
        var element = document.querySelector('.chatWindows');
        element.scrollTop = element.scrollHeight;
    }

    useEffect(() => {
        handleScroll()
    })

    return (
        <div className="chatWindows">
            {messagesRender()}
        </div>
    )
}
