import { useEffect, useState } from "react";
import User from "../components/User";
import BookshelfList from "../components/BookshelfList";

const BookshelfContainer = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [bookshelves, setBookshelves] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
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
          setBookshelves(user.bookshelves);
          userExists = true;
        }
      });
    }
    return userExists;
  };

  return (
    <>
      {user === null ? <User userLogin={userLogin} /> : null}
      {user ? (
        <div>
          <h1>BetterReads</h1>
          <BookshelfList bookshelves={bookshelves} />
        </div>
      ) : null}
    </>
  );
};

export default BookshelfContainer;
