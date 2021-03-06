import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Label, Dropdown } from 'semantic-ui-react'

// import ChannelList from './ChannelList';
import DirectMessageList from './DirectMessageList';
// import AddChannel from './AddChannel';
import RoomContainer from '../containers/RoomContainer';
import ChannelContainer from '../containers/ChannelContainer';

class LeftMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: true,
    };
  }

  componentDidMount() {
    // this.props.fetchChannels(1);
    this.props.fetchProfiles(1);
  }

  handleClick(e) {
    console.log('click on profile');
    // do things to the state of the app inherited as props
  }

  render() {
    const { visible } = this.state;
    const { user } = this.props;
    return (
      <Sidebar as={Menu} animation='push' visible={visible} icon='labeled' vertical fixed="left">
        <Menu.Item onClick={this.handleClick.bind(this)}>
          <Image src={user.image} size='tiny' shape='circular' centered />
          <p />
          <Menu.Header>{user.first}</Menu.Header>
           <a href="/logout">Log Out</a>
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>Current Room</Menu.Header>
          <RoomContainer/>
        </Menu.Item>
        <Menu.Item >
          <Menu.Header>Text Channels</Menu.Header>
          <ChannelContainer />
        </Menu.Item>
        <Menu.Item>
          <Menu.Header>
            <Menu.Header>Direct Messages</Menu.Header>
            <br />
            <DirectMessageList/>
          </Menu.Header>
        </Menu.Item>
      </Sidebar>
    )
  }
}

export default LeftMenu;
