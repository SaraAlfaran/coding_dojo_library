import BookForm from "../Components/BookForm"
import React, {useState} from 'react';
import {navigate} from '@reach/router';
import axios from 'axios';
import { Link } from "@reach/router"
import style from "../css/BookPageStyle.module.css";

const NewBook = (props) => {
  const [errors, setErrors] = useState([]);
  const [newBook, setnewBook] = useState({
      name: "",
      author: "",
      description:"",
      imgUrl:"",
      catagory:"",
  })

  const addnewBook = (e) => {
    console.log(e)
    e.preventDefault()
    axios.post(`http://localhost:8000/api/book/new`, newBook)
    .then((response) => {
      navigate("/book")
    })
    .catch(err => {
        const errorResponse = err.response.data.errors;
        const errorArr =[];
        for(var key of Object.keys(errorResponse)){
            errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr)
    })
  }

  const handleChange = (e) => {
    console.log("e.target.name: ", e.target.name)
    console.log("e.target.value: ", e.target.value)
    setnewBook({
      ...newBook,
      [e.target.name]: e.target.value,
    })
  }

  return  <div>
    <div className={style.header}>
      <h3>Coding Dojo Library</h3>
    </div>
    <div className={style.icon}>
      <ul>
      <li>
        <a href="/Dashboard">
          <span className={style.iconn}><i class="fa fa-desktop" aria-hidden="true"></i></span>
          <span className={style.title}>Dashboard </span></a>
        </li>
        <li>
        <a href="/person/new">
          <span className={style.iconn}><i class="fa fa-user-plus" aria-hidden="true"></i></span>
          <span className={style.title}>Add a Customer </span></a>
        </li>
        <li>
          <a href="/person">
          <span className={style.iconn}><i class="fa fa-user-o" aria-hidden="true"></i></span>
          <span className={style.title}> Customer</span> </a>
        </li>
        <li>
        <a href="/book">
          <span className={style.iconn}><i class="fa fa-book " aria-hidden="true"></i></span>
          <span className={style.title}>Books </span></a>
        </li>
        <li>
          <a href="/book/new"> 
          <span className={style.iconn}><i class="fa fa-bookmark " aria-hidden="true"></i></span>
          <span className={style.title}> Add a Book </span></a>
        </li>
        <li>
        <a href="/assign/new">
          <span className={style.iconn}><i class="fa fa-address-book " aria-hidden="true"></i></span>
          <span className={style.title}> Assign a Book</span></a>
        </li>
        <li>
        <a href="/logout">
          <span className={style.iconn}><i class="fa fa-sign-out " aria-hidden="true"></i></span>
          <span className={style.title}> Logout</span></a>
        </li>
      </ul>
    </div>
    <h1>Add a Book</h1>
      <BookForm newBook={newBook}
      onSubmitProp={addnewBook}
      handleChange={handleChange} />
      {errors.map((err,idx) => <p key={idx} className={style.errorMessages}>{err}</p>)}
    
  </div>
  
}

export default NewBook;