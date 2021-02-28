import './AppMessager.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';



function MessagesFunс() {
  
  //sender: 0-user, 1-robot
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // произошло обновление
    
    if (messages.length == 0)
      return;

    const lastEl = messages[messages.length - 1];
    if (lastEl.sender === 0) {
      const timerId = setTimeout(() => {
        setMessages([...messages, { message: `new message ${messages.length + 1}`, sender: 1, author: "robot" }]);  
      }, 1000);

      return () => {
        clearTimeout(timerId);
      }
    }
  }, [messages]);


  const msgs = useMemo(() => messages.map((m, ind) =>
      <div key={ind}>{m.author}: {m.message}</div>
  ), [messages]);

  const addMessage = useCallback(() => {
    setMessages([...messages, { message: `new message ${messages.length + 1}`, sender: 0, author: "Me" }]);
  }, [messages]);

  const clear = useCallback(() => {
    setMessages([]);
  }, []);

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




