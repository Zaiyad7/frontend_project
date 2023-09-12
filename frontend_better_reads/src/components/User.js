const User = ({ userLogin }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    const username = event.target.username.value;
    userLogin(username);
  };

  return (
    <>
      <h1>BetterReads</h1>
      <h2>Like GoodReads but Better</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default User;
