import React from 'react';
import './AppMessager.css';





class AppMessager extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: ["old message 1", "old message 2"] };
  }

  sendMessage() {
    this.setState({ messages: [...this.state.messages, 'Hi'] });
  }

  clear() {
    this.setState({ messages: [] });
  }

  render() {

    const msgs = this.state.messages.map((m, ind) =>
      <div key={ind}>{m}</div>
    );

    return (
      <div className="App">
        <main className="app-body">
          <div>
            {msgs}
          </div>
          <button onClick={() => this.sendMessage()}>Отправить</button>
          <button onClick={() => this.clear()}>Очистить</button>
        </main>
      </div>
    );
  }
}


export default AppMessager;
