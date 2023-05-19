export const App = () => {
  return (
    <Container>
      <Title>TWEETS</Title>
      {loading && <Loader />}
      <FollowersList />

      <ToastContainer autoClose={3000} />
    </Container>
  );
};
