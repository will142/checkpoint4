import React, { useState, useEffect } from "react";
import axios from "axios";


function Admin() {

  const [listAuthor, setListAuthor] = useState([])

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors`)
      .then((result) => result.data)
      .then((data) => {
        setListAuthor(data);
      }, []);
  })

  

  return (
    <div>
      <h1>Admin</h1>
      <div>
        <h2>Add author</h2>
        <label>author name  : </label>
        <input></input>
        <button>add</button>
      </div>
      <div>
      <h2>Add category</h2>
        <label>category name  : </label>
        <input></input>
        <button>add</button>
      </div>
      <div>
      <h2>Add Book</h2>
        <label>book name  : </label>
        <input></input>
        <label>book synopsis  : </label>
        <textarea></textarea>
        <label>book image  : </label>
        <input></input>
        <select>
          {
            listAuthor.map((author) => (
              <option key={author.id}>{author.name}</option>
            ))
          }
        </select>
        <label>book chapters  : </label>
        <input></input>
        <button>add</button>
      </div>
    </div>
  );
}

export default Admin;