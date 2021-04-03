import React from 'react';
import axios from 'axios';


export default props => {
    const {bookId, successCallback} = props;

    const deleteBook =(e) => {
        axios.delete(`http://localhost:8000/api/book/${bookId}`)
        .then(res => successCallback(bookId));
    }
    return (
        <button class="btn btn-danger" onClick={deleteBook}>Delete</button>
    )
}