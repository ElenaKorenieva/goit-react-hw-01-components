import PropTypes from 'prop-types';
import { ListEl } from './FriendList.styled';
import FriendListItem from '../FriendListItem/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ListEl>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ListEl>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
