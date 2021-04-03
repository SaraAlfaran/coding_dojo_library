import axios from 'axios';
import React, { useEffect, useState } from "react"
import DeleteBook from './DeleteBook'
import style from "../css/BookPageStyle.module.css";



export default props => {
    const [books, setBooks] = useState([]);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/book`)
        .then(res => setBooks(res.data))
    }, [])
    
    const removeFromDom = (bookId) => {
        setBooks(books.filter(books => books._id !== bookId))
    }
    
    return (
        <div>
            <h1>Books Information</h1>
            <div className={style.tableContent}>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th><h2>Image</h2></th>
                            <th><h2>Name</h2></th>
                            <th><h2>Author</h2></th>
                            <th><h2>Description</h2></th>
                            <th><h2>Catagory</h2></th>
                            <th><h2>Action</h2></th>
                        </tr>
                    </thead>
                    <tbody>
                        {books.sort ((a,b) => a.name.localeCompare(b.name)).map((book, idx) => {
                            return (
                                <tr key={idx}>
                                    <td><img src={book.imgUrl} alt="picture" style={{width: '50px'}}></img></td>
                                    <td>{book.name}</td>
                                    <td>{book.author}</td>
                                    <td>{book.description}</td>
                                    <td>{book.catagory}</td>
                                    <td><DeleteBook bookId={book._id} successCallback={() => removeFromDom(book._id)}/></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}