
import React, { useState, useEffect } from 'react';
import './App.scss';
import Message from './components/Message';
// Material UI
import { styled } from '@material-ui/core/styles';
import { Button, TextField, List, ListItem, ListItemText } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';

function App() {
  // state
  const [messageList, setMessageList] = useState([])
  const [value, setValue] = useState('');
  const [chatList, setContactList] = useState([{ id: 1, name: 'Игорь' }, { id: 2, name: 'Тима' }, { id: 3, name: 'Сергей' }])

  // Стилизация компонентов
  const MyButton = styled(Button)({
    background: 'teal',
    color: 'white',
    height: 56,
    padding: '0 30px',
    width: 85,
    // borderRadius: 0,
    '&:hover': {
      background: 'teal'
    }
  });
  const ChatInput = styled(TextField)({
    backgroundColor: 'white',
    width: 1156,
  })

  // функция добавляет в массив сообщений отправленное пользователем
  const addNewMessage = () => {
    setMessageList([...messageList, {
      index: messageList.length,
      text: value,
      author: "Human"
    }])
    setValue('')
  }

  // функция убирает обновление формы при отправке
  const handleSubmit = (event) => {
    event.preventDefault();
    addNewMessage();
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
    <div className="App Container">
      <div className="chatContact">
        <List>
          {chatList.map(contact => (
            <ListItem key={contact.id}>
              <PersonIcon fontSize="large" color="primary" /> <ListItemText style={{ display: 'flex', fontSize: 30 }}>{contact.name}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
      <div>
        <div className="chatWindow">
          <Message messageList={messageList}></Message>
        </div>
        {/* форма отправки сообщений */}
        <form onSubmit={handleSubmit} >
          <ChatInput
            autoFocus={true}
            value={value}
            onChange={handleChange}
            variant="outlined"
            placeholder="Введите сообщение"
          />
          <MyButton
            onClick={addNewMessage}
          >
            <SendIcon />
          </MyButton>
        </form></div>
    </div>
  );
}

export default App;
