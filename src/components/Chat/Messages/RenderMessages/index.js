// scss
import './message.scss';
// react
import { useEffect } from 'react';
// redux
import { useSelector } from 'react-redux';
// router
import { useParams } from 'react-router';

export default function Message() {
    // redux
    const messages = useSelector((state) => state.Messages); // не селектор - для рендера!
    // router
    const chatId = useParams().ChatId

    // рендер актуального чата
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
