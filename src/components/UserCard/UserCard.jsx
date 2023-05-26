import { useSelector, useDispatch } from 'react-redux';
import { followUser, unfollowUser } from 'redux/users/operations';
import { selectUser } from 'redux/users/selectors';
import {
  User,
  Wrapper,
  TextTweets,
  TextFollowers,
  Button,
} from './User.styled';

export const UserCard = ({ data }) => {
  const { id, userURL, tweets, followers } = data;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleClick = () => {
    if (following) {
      dispatch(unfollowUser());
    } else {
      dispatch(followUser());
    }
  };

  return (
    <Wrapper>
      <User key={id} alt="user" src={userURL} width={80} />
      <TextTweets>TWEETS{tweets}</TextTweets>
      <TextFollowers>FOLLOWERS{followers}</TextFollowers>
      <Button type="button" onClick={handleClick}>
        {following ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Wrapper>
  );
};
