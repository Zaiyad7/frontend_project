import { useState } from "react";
import Bookshelf from "./Bookshelf";
import BookList from "./BookList";
const BookshelfList = ({ bookshelves }) => {
  //   console.log(bookshelves);
  const [selectedStatus, setSelectedStatus] = useState("");
  const updateStatus = (newStatus) => {
    setSelectedStatus(newStatus);
  };

  return (
    <>
      <h2>Bookshelves</h2>
      <Bookshelf
        bookshelves={bookshelves}
        title="My Books"
        updateStatus={updateStatus}
        status="ALL"
      />
      <Bookshelf
        bookshelves={bookshelves}
        updateStatus={updateStatus}
        title="Read Books"
        status="READ"
      />
      <Bookshelf
        updateStatus={updateStatus}
        bookshelves={bookshelves}
        title="Currently Reading"
        status="CURRENTLY_READING"
      />
      <Bookshelf
        updateStatus={updateStatus}
        bookshelves={bookshelves}
        title="Want To Read"
        status="WANT_TO_READ"
      />
      <BookList bookshelves={bookshelves} selectedStatus={selectedStatus} />
    </>
  );
};

export default BookshelfList;
