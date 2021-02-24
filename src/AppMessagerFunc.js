import './AppMessager.css';
import React, { useState } from 'react';



function MessagesFunс() {
  
  const [messages, setMessages] = useState(["old message 1", "old message 2"]);

  const msgs = messages.map((m, ind) =>
      <div key={ind}>{m}</div>
    );

  const addMessage = () => {
    setMessages([...messages, 'Hi']);
  }

  const clear = () => {
    setMessages([]);
  }

  return (
    
    <div className="App">
    <main className="app-body">
      <div>
        {msgs}
      </div>
      <button onClick={addMessage}>Отправить</button>
      <button onClick={clear}>Очистить</button>
    </main>
  </div>
  );
}

export default MessagesFunс;




