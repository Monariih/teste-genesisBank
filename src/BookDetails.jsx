import React from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function BookDetails(){

    const {id} = useParams()
    const books = useSelector((state) => state.books)
    const existingBook = books.filter(f => f.id == id)
    const {name, author, description} = existingBook[0]
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return(
        <div className='d-flex w-auto vh-100 justify-content-center align-items-center'>
            <div className='box w-75 bg-secondary text-white p-5'>
                <h3>Informações sobre: {name}</h3>

                    <div>
                        <label className='title' htmlFor="name">Título: </label>
                        <label className='content'>{name}</label>
                    </div>
                    <div>
                        <label className='title' htmlFor="author">Autor: </label>
                        <label className='content'>{author}</label>
                    </div>
                    <div>
                        <label className='title' htmlFor="description">Comentários:</label>
                        <label className='content'>{description}</label>
                    </div><br />
                    <Link to='/' className='btn btn-info'>Voltar</Link>

            </div>
        </div>
    )
}

export default BookDetails