import React, { useEffect, useState } from 'react'
import {user} from "../Join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendLogo from "../../images/send.svg"
 import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import closeIcon from "../../images/closeIcon.png" 

let socket;

const ENDPOINT = "https://continuous-chat-app.herokuapp.com/";



const Chat = () => {
    const [ id ,setid] = useState("");
    const [messages,setMessages] = useState([]);

    const send =()=>{
        const message = document.getElementById('chatInput').value;
        socket.emit('message',{message,id});
        document.getElementById('chatInput').value="";
    }

    console.log(messages);

    
    
    useEffect(() => {
        socket = socketIo(ENDPOINT,{transports:['websocket']});

        socket.on('connect',()=>{
           alert('Connected');
            setid(socket.id);
    
        }) 
          console.log(socket);

        socket.emit('joined',{user})

        socket.on('welcome',(data)=>{
          setMessages([...messages,data]);
            console.log(data.user,data.message);
        })
        
        socket.on('userjoined',(data)=>{
          setMessages([...messages,data]);
            console.log(data.user,data.message);
        })

        socket.on('leave',(data)=>{
          setMessages([...messages,data]);
            console.log(data.user,data.message);
        })
      
        return () => {
      //     socket.emit('disconnect');
      //     socket.off();
       }
  }, [])

useEffect(() => {
  socket.on('sendMessage',(data)=>{
    setMessages([...messages,data]);
    console.log(data.user,data.message);

  })

  return () => {
   // socket.off();
  }
},[messages])

    
  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='header'>
              <h2>C CHAT</h2>
              <a href="/" ><img src={closeIcon} alt="close"/></a> 
            </div>

                <ReactScrollToBottom  className='chatBox'>
                  {/* <Message message={'hii'}/>
                  <Message message={'hii'}/>
                  <Message message={'hii'}/>
                  <Message message={'hii'}/>
                  <Message message={'hii'}/> */}

                  {messages.map((item,i)=> <Message user={item.id===id ? '': item.user} message={(item.message)} classs={item.id === id ? 'right' : 'left'} />)}

                </ReactScrollToBottom >
                    <div className='inputBox'>
                     
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    {/* <button onClick={send} className="sendBtn"><img src={sendLogo} alt="Send" /></button> 
                     <input type="text" id="chatInput"/> */}
                     <button className="sendBtn" onClick={send}><img src={sendLogo} alt="Send"/></button>
                    </div>
                 </div>
            </div>
  )
}

export default Chat
