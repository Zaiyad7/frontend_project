import { useEffect, useState } from "react";
import User from "../components/User";
import BookshelfList from "../components/BookshelfList";

const BookshelfContainer = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);
  const [bookshelves, setBookshelves] = useState(null);
  const [allBooks, setAllBooks] = useState(null);
  const [showAllBooks, setShowAllBooks] = useState(false);

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

  useEffect(() => {
    fetch("http://localhost:8080/books")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        // console.log(response);
        setAllBooks(response);
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
        if (user.userName === username) {
          setUser(user);
          setBookshelves(user.bookshelves);
          userExists = true;
        }
      });
    }
    return userExists;
  };

  const updateBookshelvesForUser = (bookId, status) => {
    const updatedBookshelves = bookshelves.map((bookshelf) => {
      if (bookshelf.id == bookId) {
        bookshelf.status = status;
        return bookshelf;
      } else {
        return bookshelf;
      }
    });
    setBookshelves(updatedBookshelves);
  };

  const displayAllBooks = () => {
    setShowAllBooks(true);
  };

  const displayBookshelfBooks = () => {
    setShowAllBooks(false);
  };

  return (
    <>
      {user === null ? <User userLogin={userLogin} /> : null}
      {user ? (
        <div>
          <h1>BetterReads</h1>
          <BookshelfList
            bookshelves={bookshelves}
            allBooks={allBooks}
            showAllBooks={showAllBooks}
            displayAllBooks={displayAllBooks}
            displayBookshelfBooks={displayBookshelfBooks}
            updateBookshelvesForUser={updateBookshelvesForUser}
          />
        </div>
      ) : null}
    </>
  );
};

export default BookshelfContainer;
