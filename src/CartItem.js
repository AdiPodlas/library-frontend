import React from 'react';
import BookItem from './BookItem';

function CartItem({ cart }) {
    return (
        <div>
            <h3>Koszyk {cart.id}</h3>
            <p>Ilość książek: {cart.books.length}</p>
            {cart.books.map((book, index) => (
                <BookItem key={index} book={book} />
            ))}
            <p>Cena: {cart.books.price}</p>
            
        </div>
    );
}

export default CartItem;