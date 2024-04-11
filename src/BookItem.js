import React from 'react';

function BookItem({ book }) {
    const bookItemStyle = {
        color: 'blue', 
        fontWeight: 'bold',
        border: '1px dashed green',
      };
    return (
        <div style={bookItemStyle}>
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Category: {book.categoryName}</p>

        </div>
    );
}

export default BookItem;