// components/BookList.js
import React from 'react';

export default function Booklist(props) { 
 
  return (
    <div>
    <ul>
    <li>{props.book[0]}</li>
        <li>{props.book[1]}</li>
        <li>{props.book[2]}</li>
        <li>{props.book[3]}</li>
    </ul>
     </div>
  );
};