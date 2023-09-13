const AllBook = ({ book }) => {
  console.log(book);

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
      <form>
        <label htmlFor="status">Status : </label>
        <select name="status">
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

export default AllBook;
