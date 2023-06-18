import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {updateBook} from "./BookReducer.jsx";

function Update() {

    const {id} = useParams()
    const books = useSelector((state) => state.books)
    const existingBook = books.filter(f => f.id == id)
    const {name, author, description} = existingBook[0]
    const [uname, setName] = useState(name)
    const [uauthor, setAuthor] = useState(author)
    const [udescription, setDescription] = useState(description)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate = (event) => {
        event.preventDefault()
        dispatch(updateBook({
            id: id,
            name: uname,
            author: uauthor,
            description: udescription
        }))
        navigate('/')
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='box w-50 bg-secondary text-white p-5'>
                <h3>Editar dados</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Título:</label>
                        <input type="text" name='name' className='form-control' placeholder='enter name' value={uname} onChange={e => setName(e.target.value)}/>

                    </div>
                    <div>
                        <label htmlFor="Author">Autor:</label>
                        <input type="text" name='Author' className='form-control' placeholder='enter Author' value={uauthor} onChange={e => setAuthor(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="description">Comentários:</label>
                        <input type="text" name='description' className='form-control' value={udescription} onChange={e => setDescription(e.target.value)}/>
                    </div><br />
                    <button className='btn btn-info'>Editar</button>
                </form>
            </div>
        </div>
    )
}

export default Update