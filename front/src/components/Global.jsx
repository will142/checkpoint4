import React, { useState, useEffect } from "react";
import axios from "axios";
import BookDetails from "./BookDetails";
import BookList from "./BookList";
import SearchModule from "./SearchModule";



function Global() {
  return (
    <div>
      <SearchModule />
      <BookList />
      <BookDetails />
    </div>
  );
}

export default Global;