import './MessagerComponent.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { TextField } from '@material-ui/core';



function MessagerComponent() {
  
  //sender: 0-user, 1-robot
  const [messages, setMessages] = useState([]);
  const [messageToSend, setMessageToSend] = useState("");

  useEffect(() => {
    // произошло обновление
    
    if (messages.length == 0)
      return;

    const lastEl = messages[messages.length - 1];
    if (lastEl.sender === 0) {
      const timerId = setTimeout(() => {
        const newRobotMessage = { message: `new message ${messages.length + 1}`, sender: 1, author: "robot" };
        const newMessages = [...messages, newRobotMessage];
        setMessages(newMessages);  
      }, 1000);

      return () => {
        clearTimeout(timerId);
      }
    }
  }, [messages]);


  const msgs = useMemo(() => messages.map((m, ind) =>
      <div key={ind}>{m.author}: {m.message}</div>
  ), [messages]);

  const clear = useCallback(() => {
    setMessages([]);
  }, []);

  const handleSubmit = useCallback((e) => {
      e.preventDefault();
      if (messageToSend == "")
        return;
      const newMessage = { message: messageToSend, sender: 0, author: "Me" };
      setMessages([...messages, newMessage]);
      setMessageToSend('');
  }, [messageToSend, messages]);

  const handleMessageChange = useCallback((e) => {
    setMessageToSend(e.target.value);
  }, []);

  return (
    

      <main className="app-body">
        <form onSubmit={handleSubmit}>
            <TextField
                id="messageBox"
                label="Message to send"
                variant="outlined"
                color="secondary"
                placeholder="Input message"
                value={messageToSend} 
                onChange={handleMessageChange}
            />
            <button type="submit">Отправить</button>
            <button onClick={clear} type="button">Очистить</button>
        </form>
        <div>
          {msgs}
        </div>
      </main>
  );
}

export default MessagerComponent;




