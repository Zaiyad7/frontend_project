import Book from "./Book";

const BookList = ({ bookshelves, selectedStatus }) => {
  let bookComponents = [];
  bookshelves.forEach((book) => {
    if (book.status === selectedStatus) {
      bookComponents.push(<Book key={book.id} book={book} />);
    }
  });
  if (selectedStatus === "ALL") {
    bookComponents = bookshelves.map((book) => {
      return <Book key={book.id} book={book} />;
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
