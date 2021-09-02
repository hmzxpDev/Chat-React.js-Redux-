import './message.scss';
import React from 'react';


export default function Message({ text }) {
    return <div className="somebodyStyles"> <h1>{text}</h1></div>;
}
