import './message.scss';


export default function Message({ messageList }) {
    return <div className="somebodyStyles">
        {messageList.map(message => <div key={message.index}> <span className="author">{message.author}</span>: {message.text}</div>)}
    </div>;
}
