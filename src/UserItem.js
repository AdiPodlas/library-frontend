import React from 'react';

function UserItem({ user }) {
    const userItemStyle = {
        color: 'red', 
        fontWeight: 'bold',
        border: '1px dashed orange' 

        
      };
  return (
    <div style={userItemStyle}>
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>User Name: {user.username}</p>
      <p>Phone: {user.phone}</p>
      <p>Adress: {user.address.street} City: {user.address.city}</p>
    </div>
  );
}

export default UserItem;