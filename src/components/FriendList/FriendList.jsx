import PropTypes from 'prop-types';
import { List } from './FriendList.styled'
import FriendListItem from './FriendListItem';

export default function FriendList({friends}) {
    return (
        <List>
            {friends.map(({id, avatar, name, isOnline}) => (
        <FriendListItem key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}/>      
        ))}
</List>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
  };