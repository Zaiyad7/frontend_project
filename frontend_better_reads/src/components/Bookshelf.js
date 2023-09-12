const Bookshelf = ({ title, bookshelves, status, updateStatus }) => {
  const handleClick = () => {
    updateStatus(status);
    console.log(status);
  };
  return (
    <>
      <h3>{title}</h3>
      <button onClick={handleClick}>Select</button>
    </>
  );
};

export default Bookshelf;
