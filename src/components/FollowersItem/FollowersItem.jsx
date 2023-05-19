import { List, Item, DeleteButton } from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectFollowers } from 'redux/fellowers/selectors';
import { Loader } from 'components/Loader/Loader';
import { User, Wrapper } from './User.styled';

export const FollowersItem = ({ data }) => {
  const { id, userURL, tweets, followers } = data;
  const dispatch = useDispatch();
  const follower = useSelector(selectFollowers);
  initialState.data = {
	followers:100,500.
  };

  useEffect(() => {
    dispatch(fetchFellowers());
  }, [dispatch]);
  const handlerAddFollowers = () => {};

  return (
    <Wrapper>
      <Item key={id}>
        <User alt="user" src={userURL} width={80} />
        <Text>TWEETS{tweets}</Text>
        <Text>FOLLOWERS{followers}</Text>
        <AddFellowersButton
          type="button"
          onClick={() => dispatch(handlerAddFollowers(id))}
        >
          FOLLOW
        </AddFellowersButton>
      </Item>
    </Wrapper>
  );
};
