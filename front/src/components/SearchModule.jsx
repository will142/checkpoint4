import React, { useState, useEffect } from "react";
import "./search.css";
import axios from "axios";


function SearchModule({ setList }) {
  const [categoriesList, setcategoriesList] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/categories/`)
      .then((result) => result.data)
      .then((data) => {
        setcategoriesList(data);
      });
  });

  const handleClikAuthor = (name) => {
    axios
      .get(`http://localhost:8000/api/authors/name/${name}`)
      .then((result) => result.data)
      .then((data) => {
        setList(data);
      });
  }

  const handleClikName = (name) => {
    axios
      .get(`http://localhost:8000/api/books/name/${name}`)
      .then((result) => result.data)
      .then((data) => {
        setList(data);
      });
  }

  const handleClikCategorie = (id) => {
    axios
      .get(`http://localhost:8000/api/books/categories/${id}`)
      .then((result) => result.data)
      .then((data) => {
        setList(data);
      });
  }

  return (
    <div className="SearchModule-globalContainer">
      <h1>Search Module</h1>
      <h2>by category :</h2>
      <div>
        <select id="cat-selector" className="SearchModule-categoriesContainer">
          {
            categoriesList.map((categorie) => (
              <option key={categorie.id} value={categorie.id}>
                {categorie.name}
              </option>
            ))
          }
        </select>
      <button onClick={()=> {
        const tempo = document.getElementById("cat-selector").value;
        handleClikCategorie(tempo);
      }}>Search</button>
      </div>
      <div>
        <h2>by name :</h2>
        <input id="nameInput"/>
        <button onClick={() => {
          const tempo2 = document.getElementById("nameInput").value;
          handleClikName(tempo2);
        }}>Search</button>
      </div>
      <div>
        <h2>by author :</h2>
        <input id="authorInput"/>
        <button onClick={() => {
          const tempo3 = document.getElementById("authorInput").value;
          handleClikAuthor(tempo3);
        }}>Search</button>
      </div>
    </div>
  );
}

export default SearchModule;