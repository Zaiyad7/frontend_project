import { useState } from "react";
import Bookshelf from "./Bookshelf";
import BookList from "./BookList";
import "./BookshelfList.css";

const BookshelfList = ({
  bookshelves,
  allBooks,
  showAllBooks,
  displayAllBooks,
  displayBookshelfBooks,
  updateBookshelvesForUser,
  user,
  addBookToBookshelves,
  removeBookFromAllBooks,
}) => {
  //   console.log(bookshelves);
  const [selectedStatus, setSelectedStatus] = useState("MY");
  const updateStatus = (newStatus) => {
    setSelectedStatus(newStatus);
  };

  const handleClick = () => {
    displayAllBooks();
    updateStatus("ALL");
  };

  return (
    <>
      <section id="bookshelves" className="shelves-books">
        <h2 id="bookshelves-title">Bookshelves</h2>
        <Bookshelf
          bookshelves={bookshelves}
          title="My Books"
          updateStatus={updateStatus}
          status="MY"
          displayBookshelfBooks={displayBookshelfBooks}
        />
        <Bookshelf
          bookshelves={bookshelves}
          updateStatus={updateStatus}
          title="Read Books"
          status="READ"
          displayBookshelfBooks={displayBookshelfBooks}
        />
        <Bookshelf
          updateStatus={updateStatus}
          bookshelves={bookshelves}
          title="Currently Reading"
          status="CURRENTLY_READING"
          displayBookshelfBooks={displayBookshelfBooks}
        />
        <Bookshelf
          updateStatus={updateStatus}
          bookshelves={bookshelves}
          title="Want To Read"
          status="WANT_TO_READ"
          displayBookshelfBooks={displayBookshelfBooks}
        />
        <br></br>
        <button onClick={handleClick}>Add books to bookshelf</button>
      </section>

      <section id="books" className="shelves-books">
        <BookList
          bookshelves={bookshelves}
          selectedStatus={selectedStatus}
          showAllBooks={showAllBooks}
          allBooks={allBooks}
          updateBookshelvesForUser={updateBookshelvesForUser}
          user={user}
          addBookToBookshelves={addBookToBookshelves}
          removeBookFromAllBooks={removeBookFromAllBooks}
        />
      </section>
    </>
  );
};

export default BookshelfList;
