import PropTypes from 'prop-types'; // ES6
import {
    Card,
    Wrapper,
    Avatar,
    Name,
    Tag,
    Location,
    Stats,
  StatsItem,
  StatsLabel,
  StatsQuantity,
  } from './Profile.styled';

 
export default function Profile({username, tag, location, avatar, followers, views, likes}) {
    return (
        <Card>
            <Wrapper>
            <Avatar src={avatar} alt="User avatar" className="avatar" />
            <Name>{username}</Name>
            <Tag>@{tag}</Tag>
            <Location>{location}</Location>
            </Wrapper>
            <Stats>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{likes}</StatsQuantity>
                </StatsItem>
            </Stats>
        </Card>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  };

