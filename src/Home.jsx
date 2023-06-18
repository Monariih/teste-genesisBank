import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {deleteBook} from "./BookReducer.jsx";

function Home(){
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteBook({id: id}))
    }
    return(
        <div className='d-flex w-auto vh-100 justify-content-center align-items-center'>
            <div>
                <Link to='/create' className='btn btn-success my-3'>Create +</Link>
                <table className='table-dark table-responsive table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {books.map((book, index) => (
                      <tr key={index}>
                          <td>{book.id}</td>
                          <td>{book.name}</td>
                          <td>{book.author}</td>
                          <td>
                              <Link to={`/bookDetails/${book.id}`} className='btn btn-sm btn-info'>Info</Link>
                              <Link to={`/edit/${book.id}`} className='btn btn-sm btn-primary ms-2'>Edit</Link>
                              <button onClick={() => handleDelete(book.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                          </td>
                      </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home