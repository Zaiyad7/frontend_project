import { useState } from "react";
import Bookshelf from "./Bookshelf";
import BookList from "./BookList";
const BookshelfList = ({
  bookshelves,
  allBooks,
  showAllBooks,
  displayAllBooks,
  displayBookshelfBooks,
  updateBookshelvesForUser,
  user,
  addBookToBookshelves,
}) => {
  //   console.log(bookshelves);
  const [selectedStatus, setSelectedStatus] = useState("ALL");
  const updateStatus = (newStatus) => {
    setSelectedStatus(newStatus);
  };

  const handleClick = () => {
    displayAllBooks();
  };

  return (
    <>
      <h2>Bookshelves</h2>
      <Bookshelf
        bookshelves={bookshelves}
        title="My Books"
        updateStatus={updateStatus}
        status="ALL"
        displayBookshelfBooks={displayBookshelfBooks}
      />
      <Bookshelf
        bookshelves={bookshelves}
        updateStatus={updateStatus}
        title="Read Books"
        status="READ"
        displayBookshelfBooks={displayBookshelfBooks}
      />
      <Bookshelf
        updateStatus={updateStatus}
        bookshelves={bookshelves}
        title="Currently Reading"
        status="CURRENTLY_READING"
        displayBookshelfBooks={displayBookshelfBooks}
      />
      <Bookshelf
        updateStatus={updateStatus}
        bookshelves={bookshelves}
        title="Want To Read"
        status="WANT_TO_READ"
        displayBookshelfBooks={displayBookshelfBooks}
      />
      <br></br>
      <button onClick={handleClick}>Add books to bookshelf</button>
      <BookList
        bookshelves={bookshelves}
        selectedStatus={selectedStatus}
        showAllBooks={showAllBooks}
        allBooks={allBooks}
        updateBookshelvesForUser={updateBookshelvesForUser}
        user={user}
        addBookToBookshelves={addBookToBookshelves}
      />
    </>
  );
};

export default BookshelfList;
