import React, { Component } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import Message from './components/Message.js';

class App extends Component {
  render() {
    console.log(chatMessages);

    let msgData = chatMessages;

    const messages = msgData.map((msg, key) => {
      let type = "remote"
      if (msg.sender === 'Vladimir') {
        type = "local"
      }

      return <Message key={key} sender={ msg.sender } body={ msg.body } timeStamp={ msg.timeStamp} type={ type } />
    });


    // let className = "chat-entry"
    //   if (this.props.type) === "local" {
    //     className += "local";
    //   }
    // };

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
