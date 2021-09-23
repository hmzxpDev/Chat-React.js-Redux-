import { Link } from "react-router-dom"
import { Chats } from "../../data"

export const MainView = () => {
    // функция рендерит массив чатов с ссылкой на них
    const chatRender = () => {
        return Chats.map(item => (
            <li key={item.id}><Link to={`/chats/${item.id}`}>{item.name}</Link></li>
        ))
    };
    return (
        <ul>
            <li><Link to="/profile">Profile</Link></li>
            <div>{chatRender()}</div>
        </ul>
    )
}