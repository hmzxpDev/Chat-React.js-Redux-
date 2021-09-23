import { Link } from 'react-router-dom'
import './404.scss'

export const NotFound = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>
                </div>
                <h2>Oops! Такой страницы не существует</h2>
                <p>
                    Извините, но страницы, которую вы ищете, не существует или была удалена.
                </p>
                <Link to="/chats">Перейти к чату</Link>
            </div>
        </div>
    )
}