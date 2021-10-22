import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

export const MainView = () => {
    const store = useSelector((state) => state)
    // функция рендерит массив чатов с ссылкой на них
    const chatRender = () => {
        return store.Contacts.map(item => (
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