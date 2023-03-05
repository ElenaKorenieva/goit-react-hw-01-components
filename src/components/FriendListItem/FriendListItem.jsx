import PropTypes from 'prop-types';
import {
  ListItem,
  Status,
  Image,
  Name,
} from '../FriendListItem/FriendListItem.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <Status>{isOnline}</Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
