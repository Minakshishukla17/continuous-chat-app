//import logo from './logo.svg';
//import socketIO from "socket.io-client";
import './App.css';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Join from './component/Join/Join';
import Chat from './component/Chat/Chat';


 //const ENDPOINT = 'http://localhost:4500/';
 //const socket = socketIO(ENDPOINT,{transports: ['websocket'] });


function App() {
 // socket.on("connnect",()=>{              (Ye usne bhi nahi likha hua tha, isliye humne comment out kiya hai)
   // console.log("new connection");

 
  return (
    <div className="App">
     <Router>
     <Routes>
          <Route exact path="/" element={<Join/>} />
          <Route path="/chat" element={<Chat/>} />
      </Routes>
    </Router>
    </div>
  );

}


export default App;
