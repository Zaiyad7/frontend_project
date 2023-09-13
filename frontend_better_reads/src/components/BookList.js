import Book from "./Book";

const BookList = ({ bookshelves, selectedStatus }) => {
  const bookComponents = [];
  bookshelves.forEach((book) => {
    if (book.status === selectedStatus) {
      bookComponents.push(<Book key={book.id} book={book} />);
    }
  });
  // const bookComponents = bookshelves.filter((book) => {
  //   if (book.status === selectedStatus) {
  //     return <Book key={book.id} book={book} />;
  //   }
  // });

  return (
    <>
      <h3> Books</h3>
      {bookComponents}
    </>
  );
};

export default BookList;
