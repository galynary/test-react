import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { addFollowers } from 'redux/users/operations';
import { selectUser } from 'redux/users/selectors';
import { User, Wrapper } from './User.styled';

export const UserCard = ({ data }) => {
  const { id, userURL, tweets, followers } = data;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    dispatch(fetchFellowers());
  }, [dispatch]);
  const handlerAddFollowers = () => {
    dispatch(addFollowers(id));
  };

  return (
    <Wrapper>
      <User key={id} alt="user" src={userURL} width={80} />
      <Text>TWEETS{tweets}</Text>
      <Text>FOLLOWERS{followers}</Text>
      <Button type="button" onClick={handlerAddFollowers}>
        {following ? 'FOLLOWING' : 'FOLLOW'}
      </Button>
    </Wrapper>
  );
};
