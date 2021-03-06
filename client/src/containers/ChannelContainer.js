import { connect } from 'react-redux';
import ChannelList from '../components/ChannelList';
import { selectChannel, postChannel } from '../actions/channels';

const mapStateToProps = ({channels, currentChannel, currentRoom, channelsByRoom}) => ({channels, currentChannel, channelsByRoom, currentRoom})

const mapDispatchToProps = (dispatch) => ({
  selectChannel: (channelId) => {
    dispatch(selectChannel(channelId));
  },
  postChannel: (channel) => {
    dispatch(postChannel(channel));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);