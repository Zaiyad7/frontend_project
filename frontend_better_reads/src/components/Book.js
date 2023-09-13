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
      <form>
        <label htmlFor="status">Status : </label>
        <select name="status" defaultValue={book.status}>
          <option value="unassign">Unassign</option>
          <option value="READ">Read</option>
          <option value="WANT_TO_READ">Want to Read</option>
          <option value="CURRENTLY_READING">Currently Reading</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Book;
