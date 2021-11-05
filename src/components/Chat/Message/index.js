import './message.scss';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';

export default function Message() {
    // загружаем сообщения из стора
    const messages = useSelector((state) => state.Messages); // нужно для постоянного рендера
    // для правильного рендера считываем номер чата
    const chatId = useParams().ChatId

    // отрисовываем нужный чат
    const renderMessages = (item) => {
        return item[`${chatId}`].map((item) =>
            <div key={item.index}>
                <span className="author">{item.author}</span>: {item.text}
            </div>)
    }

    // функция опускает скроллер вниз
    const handleScroll = () => {
        var element = document.querySelector('.chatWindows');
        element.scrollTop = element.scrollHeight;
    }

    // листаем вниз на каждом монтировании
    useEffect(() => {
        handleScroll()
    })

    return (
        <div className="chatWindows">
            {renderMessages(messages)}
        </div>
    )
}
