import React, { useState } from 'react'
import "./Join.css";
import logo  from "../../images/chatlogo.png"
import { Link } from 'react-router-dom';

let user;


  

 const sendUser=()=>{
   user= document.getElementById('joinInput').value;
   document.getElementById('joinInput').value="";

 }
 const Join = () => {

    const [name, setname] = useState("")
    console.log(name)

    return (
        <div className="JoinPage">
            <div className="JoinContainer" >
                <img src={logo} alt="chatlogo"/>
                <h1>
                    C CHAT
                    
                </h1>
                <input type="text" onChange={(e)=>setname(e.target.value)} placeholder="Enter Your Name" id="joinInput"/>
                <Link onClick={(event)=> !name?event.preventDefault(): null} to="/chat" > <button onClick={sendUser} className="joinbtn">Login</button></Link>  
            </div>
        </div>
   
  )
}

export default Join
export {user}
