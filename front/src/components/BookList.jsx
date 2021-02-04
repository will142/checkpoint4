import "./booklist.css";



function BookList({list, setbookDisplayed}) {

  return (
    <div className="bookList-container">
      {
        list.map((book) => (
          <div key={book.id} className="book-container">
            <h3>{book.name}</h3>
            <img src={book.media} alt={book.id}/>
            <button onClick={() => {
              setbookDisplayed(book)
            }}>view +</button>
          </div>
        ))
      }
    </div>
  );
}

export default BookList;