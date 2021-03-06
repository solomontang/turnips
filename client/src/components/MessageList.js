import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Comment } from 'semantic-ui-react';
import MessageItem from './MessageItem';

class MessageList extends Component {
  componentDidMount() {
    const {socket, addMessage} = this.props;
    socket.on('message', addMessage);
  }
  render () {
    const { messages, profiles } = this.props;
    return (
      <Comment.Group>
        {messages.map((message, index) => <MessageItem profile={profiles[message.user_id]} message={message} key={index}/> )}
      </Comment.Group>
    );
  }
}
MessageList.propTypes = {
  messages: PropTypes.array.isRequired
};

export default MessageList;
