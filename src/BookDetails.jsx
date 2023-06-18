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
            <div className='w-75 bg-secondary text-white p-5'>
                <h3>Informações sobre: {name}</h3>

                    <div>
                        <label htmlFor="name">Título: </label>
                        <label>{name}</label>
                    </div>
                    <div>
                        <label htmlFor="author">Autor: </label>
                        <label>{author}</label>
                    </div>
                    <div>
                        <label htmlFor="description">Comentários:</label>
                        <label className='text-wrap'>{description}</label>
                    </div><br />
                    <Link to='/' className='btn btn-info'>Voltar</Link>

            </div>
        </div>
    )
}

export default BookDetails