import React from 'react'
import "./ChatMessage.scss";
import {Avatar} from "@mui/material";

const ChatMessage = () => {
  return (
    <div className='message'>
        <Avatar/>
        <div className='messageInfo'>
            <h4>kurono
                <span className='messageTimestamp'>2023/07/08</span>
            </h4>
            <p>テキストテキストテキストテキストテキストテキスト</p>
        </div>
    </div>
    
  )
}

export default ChatMessage