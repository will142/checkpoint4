import React, { useState, useEffect } from "react";
import axios from "axios";
import "./admin.css";



function Admin() {

  const [listAuthor, setListAuthor] = useState([]);
  const [listBook, setListBook] = useState([]);
  const [listCategories, setListCategories] = useState([]);


  const [name, setName] = useState("")
  const [synopsis, setSynopsis] = useState("");
  const [media, setMedia] = useState("")
  const [id_author, setId_author] = useState("")
  const [chapters, setChapters] = useState("")



  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/authors`)
      .then((result) => result.data)
      .then((data) => {
        setListAuthor(data);
      });
  }, [])

  const handleClickAddAuthor = (name) => {
    const data = {
      name: name
    };
    axios.post("http://localhost:8000/api/authors", data);
  }

  const handleClickCategories = (name) => {
    const data = {
      name: name
    };
    axios.post("http://localhost:8000/api/categories", data);
  }

  const handleClickBook = () => {

    const data = {
      name: name,
      synopsis: synopsis,
      media: media,
      id_author: id_author,
      chapters: chapters
    };
    console.log(data);
    axios.post("http://localhost:8000/api/books", data);
  }

  const handleClickDelete = () => {
    axios
      .get(`http://localhost:8000/api/books`)
      .then((result) => result.data)
      .then((list) => {
        axios
          .get(`http://localhost:8000/api/categories`)
          .then((result) => result.data)
          .then((data) => {
            setListBook(list);
            setListCategories(data);
            const deleteSection = document.getElementById("delete-globalContainer");
            deleteSection.style.display = "flex";
            
          });
      });
    }
    
  const handleClickDeleteBook = (id) => {
    axios.delete(`http://localhost:8000/api/books/${id}`);
  }

  const handleClickDeleteCat = (id) => {
    axios.delete(`http://localhost:8000/api/categories/${id}`);
  }

  return (
    <div className="admin-globalContainer">
      <h1>Admin</h1>
      <div className="admin-book-globalContainer">
        <h2 >Add author</h2>
        <input id="admin-input-author"></input>
        <button onClick={() => {
          const author = document.getElementById("admin-input-author").value;
          handleClickAddAuthor(author);
        }}>add</button>
      </div>
      <div className="admin-book-globalContainer">
        <h2>Add category</h2>
        <input id="admin-input-category"></input>
        <button onClick={() => {
          const author = document.getElementById("admin-input-category").value;
          handleClickCategories(author);
        }}>add</button>
      </div>
      <div className="admin-book-globalContainer">
        <h2>Add Book</h2>
        <label>book name  : </label>
        <input id="admin-input-book-name" onChange={() => {
          const name = document.getElementById("admin-input-book-name").value;
          setName(name);
        }}></input>
        <label>book synopsis  : </label>
        <textarea id="admin-input-book-synopsis" onChange={() => {
          const synopsis = document.getElementById("admin-input-book-synopsis").value;
          setSynopsis(synopsis);
        }}></textarea>
        <label>book image  : </label>
        <input id="admin-input-book-media" onChange={() => {
          const media = document.getElementById("admin-input-book-media").value;
          setMedia(media);
        }}></input>
        <label>author  : </label>
        <select id="admin-input-book-author" onChange={() => {
          const id_author = document.getElementById("admin-input-book-author").value;
          setId_author(id_author);
        }}>
          {
            listAuthor.map((author) => (
              <option value={author.id} key={author.id}>{author.name}</option>
            ))
          }
        </select>
        <label>book chapters  : </label>
        <input id="admin-input-book-chapters" onChange={() => {
          const chapters = document.getElementById("admin-input-book-chapters").value;
          setChapters(chapters);
        }}></input>
        <button onClick={ () => {
          handleClickBook();
        }}>add</button>
        <button  id="button-delete-section" onClick={ () => {
          handleClickDelete();
        }}>Delete section display/actualise</button>
      </div>
      <div id="delete-globalContainer">
        <h2 >Delete Book</h2>
          {
            listBook.map((book) => (
              <button onClick={ () => {
                handleClickDeleteBook(book.id);
              }}>DELETE {book.name}</button>
            ))
          }
          <h2 >Delete Categories</h2>
          {
            listCategories.map((cat) => (
              <button onClick={ () => {
                handleClickDeleteCat(cat.id);
              }}>DELETE {cat.name}</button>
            ))
          }
      </div>
    </div>
  );
}

export default Admin;