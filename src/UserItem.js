import React from 'react';

function UserItem({ user }) {
  return (
    <div>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>UserName: {user.username}</p>
    </div>
  );
}

export default UserItem;