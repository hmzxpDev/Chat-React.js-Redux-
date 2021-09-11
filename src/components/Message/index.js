import './message.scss';


export default function Message({ messageList }) {
    return <div className="somebodyStyles">
        {messageList.map(message => <div key={message.index}>{message.author} : {message.text}</div>)}
    </div>;
}
