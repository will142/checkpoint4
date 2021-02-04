import React, { useState, useEffect } from "react";
import axios from "axios";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import SearchModule from "./SearchModule";
import "./global.css";




function Global() {

  useEffect(() => {
    axios
    .get("http://localhost:8000/api/books/")
    .then((result) => result.data)
    .then((data) => {
      setList(data);
    })
  },[]);

  const initalBook = { 
    id: 1,
    name: "Choose an option",
    media: "https://i.pinimg.com/originals/23/48/7e/23487e53abb4d060d2bda3291784f016.jpg",
    "synopsis": "Veuillez sélectionner une option de recherche",
    id_author: 1,
    chapters: "none"
  };

  const testBook = {
    "id": 4,
    "name": "Duds Hunt",
    "synopsis": "Nakanishi est jeune commercial qui a du mal à supporter les pressions sociales. C'est un ancien délinquant qui sort d'une maison de redressement. Son métier l'ennui et il ne parvient pas à prendre goût à la vie. Il est régulièrement en conflit avec son supérieur. Un jour, il va faire la connaissance d'une personne sur le net qui lui propose un jeu pour le sortir de la morosité. Ce jeu se nomme : Duds Hunt. Tous les coups y sont permis. Une chasse à l'homme s'engage, dans laquelle chaque participant est équipé d'un pointeur, ainsi que d'un PDA pour localiser ses adversaires. Le but est simple : récupérer le pointeur de l'adversaire, chaque prise rapportant 100 000 yens...",
    "media": "https://images-na.ssl-images-amazon.com/images/I/5112ChbLD4L._SX359_BO1,204,203,200_.jpg",
    "id_author": 1,
    "chapters": 4
}

  const [list, setList] = useState([initalBook, testBook]);
  const [bookDisplayed, setbookDisplayed] = useState(initalBook);


  return (
    <div className="global-container">
      <SearchModule setList={setList}/>
      <BookList list={list} setbookDisplayed={setbookDisplayed }/>
      <BookDetails book={bookDisplayed}/>
    </div>
  );
}

export default Global;