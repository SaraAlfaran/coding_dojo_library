import axios from 'axios';
import React, { useEffect, useState } from "react"
import DeleteAssign from './DeleteAssign'
import moment from 'moment';
import style from "../css/AssignPageStyle.module.css";

export default props => {
    const [assigns, setAssigns] = useState([]);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/assign`)
        .then(res => setAssigns(res.data))
    }, [])
    
    const removeFromDom = (assignId) => {
        setAssigns(assigns.filter(assigns => assigns._id !== assignId))
    }
    
    return (
        <div>
            <h1 className={style.borrowedHeader}>Borrowed Books</h1>
            <div className={style.tableContent}>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th><h2>First Name</h2></th>
                            <th><h2>Book Name</h2></th>
                            <th><h2>Start Date</h2></th>
                            <th><h2>End Date</h2></th>
                            <th><h2>Action</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {assigns.map((assign, idx) => {
                            return (
                                <tr key={idx}>
                                    <td>{assign.firstName}</td>
                                    <td>{assign.name}</td>
                                    <td>{ moment(assign.startDate).format('MM/DD/YYYY') }</td>
                                    <td>{ moment(assign.endDate).format('MM/DD/YYYY') }</td>
                                    <td><DeleteAssign assignId={assign._id} successCallback={() => removeFromDom(assign._id)}/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}