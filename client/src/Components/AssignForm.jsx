import axios from 'axios';
import React, { useEffect, useState } from "react"
import { Link } from "@reach/router"
import style from "../css/AssignPageStyle.module.css";



export default props => {
    const {onSubmitProp, handleChange} = props;
    const [books, setBooks] = useState([]);
    const [persons, setPersons] = useState([]);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/book`)
        .then(res => setBooks(res.data))
    }, [])

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/person`)
        .then(res => setPersons(res.data))
    }, [])

    return (
        <div>
            <Link to={"/Dashboard"}>Back to Dashboard</Link>
            <h1>Borrowing a Book</h1>
            <div className={style.form_signin}>
                <form onSubmit={onSubmitProp}>
                    <div >
                        <div> Customer Name: </div> <select className={style.sleectdd}  name="firstName" onChange={handleChange}>
                            <option selected>Please Select...</option>
                        {persons.map((person, idx) => {
                            return (
                                <option key={idx} value={person.firstName}>{person.firstName}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div>
                       <div> Book Name:</div> <select className={style.sleectdd} name="name" onChange={handleChange}>
                            <option selected>Please Select...</option>
                        {books.map((book, idx) => {
                            return (
                                <option key={idx} value={book.name}>{book.name}</option>
                            )
                        })}
                        </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputStartDate" class="form-label">Start Date</label>
                        <input type="date" className={style.form_control} id="exampleInputStartDate" name="startDate" onChange={handleChange}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEndDate" class="form-label">End Date</label>
                        <input type="date" className={style.form_control} id="exampleInputEndDate" name="endDate" onChange={handleChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Assign</button>
                </form>
            </div>
        </div>
    )
}