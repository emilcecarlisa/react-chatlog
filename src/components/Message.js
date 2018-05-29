import React, { Component } from 'react';
import Timestamp from './Timestamp'
import PropTypes from 'prop-types';


// sender, body, time
class Message extends Component {
  static propTypes = {
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
    type: PropTypes.string,
  }


  render() {
    let sender = this.props.sender;

    let body = this.props.body;

    let timeStamp = <Timestamp time ={ this.props.timeStamp } />;

    let type = this.props.type;

    let className = "chat-entry";
      if (this.props.type === "local") {
        className += " local";
      } else if (this.props.type === "remote") {
        className += " remote"
      }

    return (
      <section className={className}>

        <div className="entry-name">{sender}</div>

        <div className="entry-bubble entry-body">{body}

        <div className="entry-time">{timeStamp}</div>

        </div>

      </section>
    );
  }
}

export default Message;
