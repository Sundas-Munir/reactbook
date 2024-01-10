// App.js
import BookList from './components/booklist';
import React, { useState } from 'react';
import Bookform from './components/bookform'

  function App() {
    const [books, setBooks] = useState([
      'The Chronicles of Narnia',
      'The Girl on the Train',
      'The Hobbit',
      'Harry Potter and the Sorcerers Stone',
    ]);
  //
 
  const handleClick = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleRemove = (updateBooks) => {
    setBooks(updateBooks);
  };
  
return (
    <>  
      <h1>Bookish</h1>
      <p>A book without philosophy, without a sense of mission or wider dream, is just words on a page, let's not call them books.</p>
     <BookList book={books} onRemove={handleRemove}/>
    <Bookform form={handleClick} /> 
    
    </> 
  );
};
export default App;
