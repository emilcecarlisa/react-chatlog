import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message.js';

class App extends Component {
  render() {
    console.log(chatMessages);

    let msgData = chatMessages;

    const messages = msgData.map((msg) => {
      return <Message sender={ msg.sender } body={ msg.body } timeStamp={ msg.timeStamp} />
    });

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Application title</h1>
        </header>
        <main className="App-main">
        {messages}
        </main>
      </div>
    );
  }
}

export default App;
