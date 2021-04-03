import React from 'react';
import axios from 'axios';


export default props => {
    const {assignId, successCallback} = props;

    const deleteAssign =(e) => {
        axios.delete(`http://localhost:8000/api/assign/${assignId}`)
        .then(res => successCallback(assignId));
    }
    return (
        <button class="btn btn-danger" onClick={deleteAssign}>Delete</button>
    )
}