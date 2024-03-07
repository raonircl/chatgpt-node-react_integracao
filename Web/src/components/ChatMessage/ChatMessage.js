import React from 'react';
import './ChatMessage.css'

import Avatar from '../../assets/avatar';

export const ChatMessage = React.createClass = ({ message }) => {
    <div className={
        `chat-message ${message.user === 'gpt'} && 
        "chatgpt"`}
    >

        <div className='chat-message-center'>
            <div className={
                `avatar ${message.user === 'gpt' && "chatgpt"}`
            }>
                {message.user === 'gpt' && (
                    <Avatar></Avatar>
                )}
            </div>

            <div className='message'>
                {message.message}
            </div>
        </div>
    </div>
}
