import React, { useState, useEffect } from 'react';
import './App.scss';
import Message from './components/Message';

function App() {
  // state для сообщений
  const [messageList, setMessageList] = useState([])
  // state для контролируемой формы
  const [value, setValue] = useState('');

  // функция добавляет в массив сообщений отправленное пользователем
  const addNewMessage = () => {
    setMessageList([...messageList, {
      index: messageList.length,
      text: value,
      author: "Human"
    }])
  }

  // функция получения данных контролируемой формы
  const handleChange = (event) => {
    setValue(event.target.value);
  }

  // функция опускает скроллер вниз
  const handleScroll = () => {
    var element = document.querySelector('.chatWindow');
    element.scrollTop = element.scrollHeight;
  }

  // функция для ответа роботом в чате
  const robotAnswer = () => {
    if (messageList[messageList.length - 1]?.author === 'Human') {
      setMessageList([...messageList, {
        index: messageList.length,
        text: 'Я передам нашим специалистам ваше сообщение, пожалуйста ожидайте ответа',
        author: "Robot"
      }])
    }

  }
  // метод ЖЦ
  useEffect(() => {
    // исполняется во время монтирования
    handleScroll();
    let answerDelay = setTimeout(robotAnswer, 3000);
    // исполнится при демонтаже, решает проблему бесконечного полного перерендера списка
    return () => { clearTimeout(answerDelay); }
  });


  // template
  return (
    <div className="App">
      <h1>Чат</h1>
      {/* окно диалога */}
      <div className="chatWindow">
        <Message messageList={messageList}></Message>
      </div>
      {/* форма отправки */}
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button onClick={addNewMessage}>Add new message</button>
      </div>

    </div>
  );
}

export default App;
