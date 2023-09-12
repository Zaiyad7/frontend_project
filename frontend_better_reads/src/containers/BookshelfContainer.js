import { useEffect, useState } from "react";
import User from "../components/User";

const BookshelfContainer = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);

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
    // users.forEach((user) => {
    //   console.log(user.userName);
    //   if (user.userName === username) {
    //     setUser(username);
    //     console.log(username);
    //   }
    // });
    for (const element of users) {
      console.log(element);
    }
  };
  return (
    <>
      <User userLogin={userLogin} />
    </>
  );
};

export default BookshelfContainer;
