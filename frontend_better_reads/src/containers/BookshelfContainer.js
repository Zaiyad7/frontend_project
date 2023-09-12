import { useEffect, useState } from "react";
import User from "../components/User";

const BookshelfContainer = () => {
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/users")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        console.log(response);
      });
  }, []);

  return (
    <>
      <User />
    </>
  );
};

export default BookshelfContainer;
