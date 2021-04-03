import axios from 'axios'
import React, { useEffect, useState } from "react"
import AssignList from '../Components/AssignList'
import Search from '../Components/Search'
import {Link} from '@reach/router';
import { navigate } from '@reach/router'
import style from '../css/Dashbord.module.css'


const Dashbord = () => {
  const [ assignz, setAssign ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/assign')
    .then((response) => {
      setAssign(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  const handleClick = (e) => {
    axios
      .get("http://localhost:8000/api/logout")
      .then((res) => {
        console.log(res)
        navigate("/")
      })
      .catch((err) => console.log(err))
  }

  return (
    // <div>
    //   <Link to={"/person/new"}>Add a Person</Link>
    //   <Link to={"/person"}>Customers</Link>
    //   <Link to={"/book"}>Books</Link>
    //   <Link to={"/book/new"}>Add a Book</Link>
    //   <Link to={"/assign/new"}>Assign a Book</Link>
    //   <button class="btn btn-danger" onClick={handleClick}>Logout</button>
    //   <AssignList data={assignz} />
    //   <Search/>
    // </div>
  <div>
    <div className={style.header}>
      <h3>Coding Dojo Library </h3>
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
          <span className={style.iconn}><i class="fa fa-address-book" aria-hidden="true"></i></span>
          <span className={style.title}> Assign a Book</span></a>
        </li>
        <li>
        <a href="/">
          <span className={style.iconn}><i class="fa fa-sign-out " aria-hidden="true"></i></span>
          <span className={style.title}> Logout</span></a>
        </li>
      </ul>
    </div>
    
    <AssignList data={assignz} />
    <div className={style.bookSearch}>
      <Search/>
    </div>
  </div>
  )
}
export default Dashbord