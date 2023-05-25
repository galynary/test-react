import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addFollowers } from 'redux/users/operations';
import { selectFollowers } from 'redux/users/selectors';
import { User, Wrapper } from './User.styled';

export const FollowersItem = ({ data }) => {
  const { id, userURL, tweets, followers } = data;
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

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
