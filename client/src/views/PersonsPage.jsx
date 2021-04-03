import axios from 'axios'
import React, { useEffect, useState } from "react"
import PersonList from '../Components/PersonList'
import {Link} from '@reach/router';
import style from "../css/Dashbord.module.css";



const PersonsPage = () => {
  const [ personz, setPerson ] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/person')
    .then((response) => {
      setPerson(response.data)
    })
    .catch(err => console.log(err))
  }, [])

  return <div>
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
    <PersonList data={personz} />
  </div>
}
export default PersonsPage