import { useState } from "react";

const User = ({ userLogin }) => {
  const [verified, setVerified] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target.username.value);
    const username = event.target.username.value;
    setVerified(userLogin(username));
    console.log(verified);
  };

  return (
    <>
      <h1>BetterReads</h1>
      <h2>Like GoodReads but Better</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <button type="submit">Login</button>
      </form>
      <p hidden={verified === true || verified === null}>User does not exist</p>
    </>
  );
};

export default User;
