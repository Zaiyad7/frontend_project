import Bookshelf from "./Bookshelf";

const BookshelfList = ({ bookshelves }) => {
  //   console.log(bookshelves);

  return (
    <>
      <h2>Bookshelves</h2>
      <Bookshelf bookshelves={bookshelves} title="My Books" />
      <Bookshelf bookshelves={bookshelves} title="Read Books" status="READ" />
      <Bookshelf
        bookshelves={bookshelves}
        title="Currently Reading"
        status="CURRENTLY_READING"
      />
      <Bookshelf
        bookshelves={bookshelves}
        title="Want To Read"
        status="WANT_TO_READ"
      />
    </>
  );
};

export default BookshelfList;
