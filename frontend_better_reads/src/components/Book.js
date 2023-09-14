const Book = ({ book, updateBookshelvesForUser }) => {
  // console.log(book);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target);
    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    // console.log(formJson.status);

    fetch(`http://localhost:8080/bookshelf/${book.id}/status`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: formJson.status }),
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        updateBookshelvesForUser(book.id, formJson.status);
      });
  };

  return (
    <>
      <h4>{book.book.title}</h4>
      <img src={require("../closedBook.png")} alt="book" />
      <ul>
        <li>Author : {book.book.author.name}</li>
        <li>
          Genre :
          {book.book.genre.charAt(0) + book.book.genre.toLowerCase().slice(1)}
        </li>
        <li>Year : {book.book.year}</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="status">Status : </label>
        <select name="status" defaultValue={book.status}>
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
