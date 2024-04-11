import React, { useEffect, useState } from 'react';
import BookItem from './BookItem';

function BooksList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/books");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBooks(data);
            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Lista Książek</h2>
            {books.map((book, index) => (
                <BookItem key={index} book={book} />
            ))}
        </div>
    );
}

export default BooksList;