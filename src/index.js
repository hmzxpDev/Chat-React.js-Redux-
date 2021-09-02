import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Message from './components/Message.js'

const textMessage = 'Hello world!!!'

ReactDOM.render(
  <React.StrictMode>
    <Message text={textMessage} />
  </React.StrictMode>,
  document.getElementById('root')
);

