import React from 'react'
import MessageParser from "../../chatbot/MessageParser";
import ActionProvider from "../../chatbot/ActionProvider";
import Config from "../../chatbot/config"
import Chatbot from 'react-chatbot-kit';
import '../../chatbot.css';
import { useState } from 'react';





const Chatbotcomponent = () => {

  const [openChatbot, setOpenChatbot] = useState(true)

  return (
    

    
  // <div style={{ maxwidth: "300px", display:'inline-block', zIndex:'90'}}>
  // {/* <button className="chat__Button" onClick={() => setOpenChatbot(!openChatbot) }></button> */}
  
  //     <div style={{ maxwidth: "300px"}}>
      
  //       {openChatbot && <Chatbot
  //         config={Config}
  //         messageParser={MessageParser}
  //         actionProvider={ActionProvider}
  //       />}
      
  //   </div>
  //   </div>

  <div className="App">

      <button className="chat__Button" data-bs-toggle="modal" data-bs-target="#exampleModal">
      </button>


      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" style={{ left: "380px", bottom:"-10px", maxheight: "200px" }}>
          <div className="modal-content" style={{ width: "280px" }}>
         

            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{ position: "relative", left: "240px", padding: "10px" }}></button>
         

            <div style={{ maxwidth: "300px" }}>

              <Chatbot
                config={Config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />


            </div>

          </div>
        </div>
      </div>


    </div>
    
    )
}

export default Chatbotcomponent
