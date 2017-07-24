import React, { Component } from 'react';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Container, Label } from 'semantic-ui-react';

import GroupChatContainer from '../containers/GroupChatContainer';

class VideoChatBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: this.props.toggleVideo
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      visible: !this.state.visible
    });
  }

  render() {
    const { visible } = this.state;
    return visible
      ? <Container className="video-chat-bar">
          <Label>
            <Icon name="video" /> Video Chat
          </Label>
          <GroupChatContainer />
        </Container>
      : null;
  }
  // render() {
  //   const { visible } = this.state;
  //   return visible
  //     ? <Menu icon="labeled" horizontal>
  //         <Menu.Item name="video chat" icon="video" />
  //         <Menu.Menu>
  //           <GroupChatContainer />
  //         </Menu.Menu>
  //       </Menu>
  //     : null;
  // }
}

export default VideoChatBar;
