import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Home = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5005/books')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])

    return (
        <div style={{display:'grid', gridTemplateColumns:'auto auto auto',gridGap:'50px',textAlign:'center'}}>
            {
                books.map(book=><Book book={book}></Book>)
            }
        </div>
    );
};

export default Home;