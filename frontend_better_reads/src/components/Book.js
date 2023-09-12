const Book = ({ book }) => {
  return (
    <>
      <h4>{book.book.title}</h4>
      <img src={require("../closedBook.png")} alt="book" />
      <ul>
        <li>Author : {book.book.author.name}</li>
        <li>Genre : {book.book.genre}</li>
        <li>Year : {book.book.year}</li>
      </ul>
    </>
  );
};

export default Book;
