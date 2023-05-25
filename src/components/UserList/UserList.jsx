import { UserList } from './UserList.styled';
export const UserList = () => {
  const users = useSelector(selectAllUsers);

  return (
    <List>
      {users.map(
        ({ id, user, userURL, tweets, followers, handlerAddFollowers }) => {
          return (
            <Item key={id}>
              <Img alt={user} src={userURL} width={80} />
              <Text>TWEETS{tweets}</Text>
              <Text>FOLLOWERS{followers}</Text>
              <Button type="button" onClick={handlerAddFollowers}>
                {following ? 'FOLLOWING' : 'FOLLOW'}
              </Button>
            </Item>
          );
        }
      )}
    </List>
  );
};
