import React, {useState} from "react";
import {addBook} from "./BookReducer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

function Create(){
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDescription] = useState('')
    const books = useSelector((state) => state.books)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addBook({id: books[books.length -1].id +1, name: name, author: author, description: description}))
        navigate('/')
    }

    return(
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 bg-secondary text-white p-5'>
                <h3>Cadastrar novo livro</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Título:</label>
                        <input type="text" name='name' className='form-control' placeholder='Informe o título' onChange={e => setName(e.target.value)}/>

                    </div>
                    <div>
                        <label htmlFor="author">Author:</label>
                        <input type="text" name='author' className='form-control' placeholder='Agora o autor' onChange={e => setAuthor(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="author">Comentários:</label>
                        <input type="text" name='description' className='form-control' placeholder='Comentários?' onChange={e => setDescription(e.target.value)}/>
                    </div><br />
                    <button className='btn btn-info'>Cadastrar</button>
                </form>
            </div>
        </div>
    )
}

export default Create