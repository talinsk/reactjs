import './AppMessager.css';
import React, { useState, useEffect } from 'react';



function MessagesFunс() {
  
  //sender: 0-user, 1-robot
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // произошло обновление
    
    if (messages.length == 0)
      return;

    const lastEl = messages[messages.length - 1];
    if (lastEl.sender === 0) {
      setTimeout(() => {
        setMessages([...messages, { message: `new message ${messages.length + 1}`, sender: 1, author: "robot" }]);  
      }, 1000);
    }
  });


  const msgs = messages.map((m, ind) =>
      <div key={ind}>{m.author}: {m.message}</div>
    );

  const addMessage = () => {
    setMessages([...messages, { message: `new message ${messages.length + 1}`, sender: 0, author: "Me" }]);
  }

  const clear = () => {
    setMessages([]);
  }

  return (
    
    <div className="App">
    <main className="app-body">      
      <button onClick={addMessage}>Отправить</button>
      <button onClick={clear}>Очистить</button>
      <div>
        {msgs}
      </div>
    </main>
  </div>
  );
}

export default MessagesFunс;




