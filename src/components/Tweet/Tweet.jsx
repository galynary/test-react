import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addFollowers } from 'redux/fellowers/operations';
import { selectFollowers } from 'redux/fellowers/selectors';
import { User, Wrapper } from './User.styled';

export const FollowersItem = ({ data }) => {
  const { id, userURL, tweets, followers } = data;
  const dispatch = useDispatch();
  const follower = useSelector(selectFollowers);

  useEffect(() => {
    dispatch(fetchFellowers());
  }, [dispatch]);
  const handlerAddFollowers = () => {
    dispatch(addFollowers(id));
  };

  return (
    <Wrapper>
      <Item key={id}>
        <User alt="user" src={userURL} width={80} />
        <Text>TWEETS{tweets}</Text>
        <Text>FOLLOWERS{followers}</Text>
        <Button type="button" onClick={handlerAddFollowers}>
          {following ? 'FOLLOWING' : 'FOLLOW'}
        </Button>
      </Item>
    </Wrapper>
  );
};
