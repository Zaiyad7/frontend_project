import Book from "./Book";

const BookList = ({ bookshelves, selectedStatus }) => {
  const bookComponents = bookshelves.map((book) => {
    return <Book key={book.id} book={book} />;
  });

  return (
    <>
      <h3> Books</h3>
      {bookComponents}
    </>
  );
};

export default BookList;
