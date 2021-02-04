import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bookdetails.css";


function BookDetails({ book }) {
  const [categoriesList, setcategoriesList] = useState([]);
  const [author, setAuthor] = useState([{name: ""}]);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/categoriesList/${book.id}`)
      .then((result) => result.data)
      .then((list) => {
        axios
          .get(`http://localhost:8000/api/authors/${book.id_author}`)
          .then((result) => result.data)
          .then((data) => {
            console.log(list, data);
            setcategoriesList(list);
            setAuthor(data);
          });
      });
  }, [book])

  return (
    <div className="bookdetails-globalContainer">
      <h1>{book.name}</h1>
      <img src={book.media} alt={book.id} />
      <h3>author : {author[0].name}</h3>
      <h3>Chapters available : {book.chapters}</h3>
      <div>
        {
          categoriesList.map((categorie) => (
            <p key={categorie.name}>{categorie.name}</p>
          ))
        }
      </div>
      <p>{book.synopsis}</p>
    </div>
  );
}

export default BookDetails;