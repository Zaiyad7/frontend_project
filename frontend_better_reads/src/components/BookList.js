import Book from "./Book";
import AllBook from "./AllBook";

const BookList = ({
  bookshelves,
  selectedStatus,
  showAllBooks,
  allBooks,
  updateBookshelvesForUser,
  user,
  addBookToBookshelves,
  removeBookFromAllBooks,
}) => {
  let bookComponents = [];

  console.log(selectedStatus);

  const displayStatus = (status) => {
    const statusArray = status.split("_");

    const displayStatusArray = statusArray.map((status) => {
      return status.charAt(0) + status.toLowerCase().slice(1);
    });

    return displayStatusArray.join(" ");
  };

  if (!showAllBooks) {
    bookshelves.forEach((book) => {
      if (book.status === selectedStatus) {
        bookComponents.push(
          <Book
            key={book.id}
            book={book}
            updateBookshelvesForUser={updateBookshelvesForUser}
          />
        );
      }
    });
    if (selectedStatus === "MY") {
      bookComponents = bookshelves.map((book) => {
        return (
          <Book
            key={book.id}
            book={book}
            updateBookshelvesForUser={updateBookshelvesForUser}
          />
        );
      });
    }
  } else {
    bookComponents = allBooks.map((book) => {
      // console.log(book);
      return (
        <AllBook
          key={book.id}
          book={book}
          user={user}
          addBookToBookshelves={addBookToBookshelves}
          removeBookFromAllBooks={removeBookFromAllBooks}
        />
      );
    });
  }

  return (
    <>
      <h3> {displayStatus(selectedStatus)} Books</h3>
      {bookComponents}
    </>
  );
};

export default BookList;
