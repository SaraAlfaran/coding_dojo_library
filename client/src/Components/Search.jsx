import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import style from '../css/Dashbord.module.css'


const Search =()=> {
  const [book, setBook] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyC7kSGBBwaEW_cAoCAtnEnlh3vPRgIWoaA"
  );
  function handleChange(event) {
    const book = event.target.value;

    setBook(book);
  }
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=18"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }
  return (
    <div className={style.container}>
      <h1 className={style.searchHeader}>Books Search</h1>
      <form onSubmit={handleSubmit}>
        <div className={style.searchFind}>
          <input
            type="text"
            onChange={handleChange}
            className="form-control mt-10 "
            placeholder="Search for Books"
            autoComplete="off"
          /> 
        </div>
        
      </form>
      {result.map((book) => (
        <a target="_blank" href={book.volumeInfo.previewLink}>
          <img src={book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail} alt={book.title} />
        </a>
      ))}
    </div>
  );
}
export default Search


