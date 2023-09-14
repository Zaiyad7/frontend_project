const AllBook = ({
  book,
  user,
  addBookToBookshelves,
  removeBookFromAllBooks,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    console.log(book);
    fetch(`http://localhost:8080/bookshelf`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id, bookId: book.id }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        addBookToBookshelves(response);
        removeBookFromAllBooks(book);
      });
  };

  return (
    <>
      <h4>{book.title}</h4>
      <img src={require("../closedBook.png")} alt="book" />
      <ul>
        <li>Author : {book.author.name}</li>
        <li>
          Genre : {book.genre.charAt(0) + book.genre.toLowerCase().slice(1)}
        </li>
        <li>Year : {book.year}</li>
      </ul>
      <button onClick={handleClick}>Add to my Bookshelf </button>
    </>
  );
};

export default AllBook;
