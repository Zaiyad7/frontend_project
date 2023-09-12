import { useEffect, useState } from "react";
import User from "../components/User";

const BookshelfContainer = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setUsers(response);
      });
  }, []);

  const userLogin = (username) => {
    const allUsernames = [];
    let userExists = false;
    users.forEach((user) => {
      allUsernames.push(user.userName);
    });

    if (allUsernames.includes(username)) {
      users.forEach((user) => {
        // console.log(user.userName);
        if (user.userName === username) {
          setUser(user);
          userExists = true;
        }
      });
    }
    return userExists;
  };

  return (
    <>
      <User userLogin={userLogin} />
    </>
  );
};

export default BookshelfContainer;
