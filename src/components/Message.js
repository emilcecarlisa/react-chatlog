import React, { Component } from 'react';
import Timestamp from './Timestamp'

// sender, body, time
class Message extends Component {
  render() {
    let sender = this.props.sender;

    let body = this.props.body;

    let timeStamp = <Timestamp time ={ this.props.timeStamp } />;

    return (
      <section className="message">
      <div className="message-sender">{sender}</div>
      <div className="message-body">{body}</div>
      <div className="message-time">{timeStamp}</div>
      </section>
    );
  }
}

export default Message;
