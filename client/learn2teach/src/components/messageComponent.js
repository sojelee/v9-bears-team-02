import React, { useState } from 'react';
const NewMessageForm =()=> {
  const [inputText, setText] = useState('');
  const handleChange = e =>{
    setText(e.target.value);
  }
  const handleSend = () => {
    setText('');
    }
    return (
      <div>
           <input   type="text" data-testid="messageText"
             value = { inputText }
             onChange = {handleChange}
           />
       <button
         data-testid="sendButton"
         onClick={handleSend}
     >
        Send
   </button>
      </div>
    );
}
export default NewMessageForm;