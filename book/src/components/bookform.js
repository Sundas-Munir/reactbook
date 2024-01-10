// components/AddBookForm.js
import React, { useState } from 'react';

export default function Bookform (props) {
  // State to store the new book title
  const [newBook, setNewBook] = useState('');

  // Eventhandler 
  const handleInputChange = (e) => {
    setNewBook(e.target.value);
  };

  // Event handler form submission
  const handleSubmit = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // addBook function to add the new book to the list
    props.form(newBook);

    // Clear the input field 
    setNewBook('');
  };

  return (
    <div>
      <h2>Add a Book</h2>
      {/* Form for adding a new book */}
      <form onSubmit={handleSubmit}>
        {/* Input field for entering the book title */}
        <input
          type="text"
          placeholder="Enter book title"
          value={newBook}
          onChange={handleInputChange}
        />
        {/* Button to submit the form */}
        <button>Add</button>
      </form>
    </div>
  );
};

