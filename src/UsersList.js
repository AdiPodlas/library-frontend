import React, { useEffect, useState } from "react";
import UserItem from "./UserItem";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {users.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </div>
  );
}

export default UsersList;