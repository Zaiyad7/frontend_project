import { useState } from "react";
import "./User.css";

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
    <div className="user">
      <h1 id="login-title">BetterReads</h1>
      <h2 id="slogan">Like GoodReads but Better</h2>
      <form id="login-form" onSubmit={handleSubmit}>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Username"
        />
        <button id="login-submit" type="submit">
          Login
        </button>
      </form>
      <p hidden={verified === true || verified === null}>User does not exist</p>
    </div>
  );
};

export default User;
