import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

function CartList() {
    const [carts, setCarts] = useState([]);

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

    return (
        <div>
            <h2>Lista Koszyków</h2>
            {carts.map((cart, index) => (
                <CartItem key={index} cart={cart} />
            ))}
        </div>
    );
}

export default CartList;