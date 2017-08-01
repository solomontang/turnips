import React, {Component} from 'react';
import { Dropdown} from 'semantic-ui-react'
import RoomSearch from './RoomSearch';
import AddRoom from './AddRoom';

const options = [
  {key: 'Room',
  text: 'Room',
  value: 'Room',
  content: 'Room'}
];

class RoomDropdown extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.fetchRooms();
  }

  handleChange(event, data) {
    this.props.changeRoom(data.value);
  }

  render() {
    const { postRoom } = this.props;
    return (
      <div>
        {/* TODO: Make the search actually work */}
        <RoomSearch />
        <br/> 
        <Dropdown placeholder='Your Rooms' onChange={this.handleChange} fluid selection options={this.props.rooms || options}/>
        <br/>
        <AddRoom postRoom={postRoom}/>
      </div>
    );
  }
}

export default RoomDropdown;