import React, { useState, useEffect } from 'react';


function BookItem({ book }) {
    const [cartNumber, setCartNumber] = useState('');
    const [carts, setCarts] = useState([]);

    const handleSelectChange = (event) => {
      setCartNumber(event.target.value);
  };

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("http://localhost:8080/carts");
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              const data = await response.json();
              setCarts(data);
          } catch (error) {
              console.error('There was a problem with the fetch operation:', error);
          }
      };

      fetchData();
  }, []);

   const addToCart = async () => {
    const response = await fetch("http://localhost:8080/carts/" + cartNumber + "/books/" + book.id , {method: 'post'})
    
   } 



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
          <button disabled={cartNumber === ""} onClick={addToCart}>add to cart</button>
        
      <select onChange={handleSelectChange} value={cartNumber}>
                    <option value="">Select a basket</option>
                    {carts.map((cart) => (
                        <option key={cart.id} value={cart.id}>
                            {cart.id}
                        </option>
                    ))}
                </select>
        </div>
    );
}

export default BookItem;