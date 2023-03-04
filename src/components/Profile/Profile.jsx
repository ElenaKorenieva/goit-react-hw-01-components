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

 
export default function Profile({username, tag, location, avatar, stats}) {
    return (
        <Card>
            <Wrapper>
                <Avatar src={avatar} alt="User avatar" className="avatar"/>
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Wrapper>
            <Stats>
                <StatsItem>
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>{stats.followers}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>{stats.views}</StatsQuantity>
                </StatsItem>
                <StatsItem>
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>{stats.likes}</StatsQuantity>
                </StatsItem>
            </Stats>
        </Card>
    )
}


Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    })
};
  

