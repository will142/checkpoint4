import React, { useState, useEffect } from "react";
import axios from "axios";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import SearchModule from "./SearchModule";



function Global() {

  const [list, setList] = useState([]);

  return (
    <div>
      <SearchModule />
      <BookList list={list} setList={setList}/>
      <BookDetails />
    </div>
  );
}

export default Global;