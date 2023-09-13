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
      <h3>{title}</h3>
      <button onClick={handleClick}>Select</button>
    </>
  );
};

export default Bookshelf;
