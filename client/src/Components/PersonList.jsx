import axios from 'axios';
import React, { useEffect, useState } from "react"
import DeletePerson from './DeletePerson'
import style from "../css/PersonPageStyle.module.css";

export default props => {
    const [persons, setPersons] = useState([]);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/person`)
        .then(res => setPersons(res.data))
    }, [])
    
    const removeFromDom = (personId) => {
        setPersons(persons.filter(persons => persons._id !== personId))
    }
    
    return (
        <div>
            <h1>Customers Information</h1>
            <div className={style.tableContent}>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th><h2>First Name</h2></th>
                            <th><h2>Last Name</h2></th>
                            <th><h2>Email</h2></th>
                            <th><h2>Phone Number</h2></th>
                            <th><h2>Action</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.sort ((a,b) => a.firstName.localeCompare(b.firstName)).map((person, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{person.firstName}</td>
                                    <td>{person.lastName}</td>
                                    <td>{person.email}</td>
                                    <td>{person.phoneNumber}</td>
                                    <td><DeletePerson personId={person._id} successCallback={() => removeFromDom(person._id)}/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
