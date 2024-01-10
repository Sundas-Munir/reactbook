// components/BookList.js
import React from 'react';

export default function Booklist(props) { 
 
  return (
 <div>
        <h2>Book List</h2>
        <ul>
          {props.book.map((book, index) => (
            <li key={index}>
              {book}
            </li>
          ))}
        </ul>
      </div>
  );
};
