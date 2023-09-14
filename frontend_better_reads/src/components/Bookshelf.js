import "./Bookshelf.css";

const Bookshelf = ({
  title,
  bookshelves,
  status,
  updateStatus,
  displayBookshelfBooks,
}) => {
  const handleClick = () => {
    updateStatus(status);
    displayBookshelfBooks();
    // console.log(status);
  };
  return (
    <>
      <section id="bookshelf">
        <h3>
          {title}
          <button id="bookshelf-button" onClick={handleClick}>
            Select
          </button>
        </h3>
      </section>
    </>
  );
};

export default Bookshelf;
