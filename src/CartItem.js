import React from 'react';
import BookItem from './BookItem';

function CartItem({ cart }) {

   let totalPrice = 0
   const booksPrices = cart.books.map(book => book.price)

   for (const bookPrice of booksPrices){
       totalPrice = bookPrice + totalPrice
       }
    
    return (
        <div>
            <h3>Koszyk {cart.id}</h3>
            <p>Ilość książek: {cart.books.length}</p>
            {cart.books.map((book, index) => (
                <BookItem key={index} book={book} />
            ))}
            <p>Cena: {totalPrice.toFixed(2) + ' PLN'}</p>
            
        </div>
    );
}

export default CartItem;