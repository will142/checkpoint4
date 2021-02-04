import React, { useState, useEffect } from "react";
import axios from "axios";


function BookList({list, setList}) {

  return (
    <div className="bookList-container">
      {
        list.map((book) => {
          <div className="book-container">
            <h1>{book.name}</h1>
            <img src={book.media} />
            <button>view +</button>
          </div>
        })
      }
    </div>
  );
}

export default BookList;