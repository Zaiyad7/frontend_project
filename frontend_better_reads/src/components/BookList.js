import Book from "./Book";
import AllBook from "./AllBook";

const BookList = ({
  bookshelves,
  selectedStatus,
  showAllBooks,
  allBooks,
  updateBookshelvesForUser,
}) => {
  let bookComponents = [];

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
    if (selectedStatus === "ALL") {
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
      return <AllBook key={book.id} book={book} />;
    });
  }

  return (
    <>
      <h3> Books</h3>
      {bookComponents}
    </>
  );
};

export default BookList;
