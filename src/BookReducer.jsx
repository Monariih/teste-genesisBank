import {createSlice} from "@reduxjs/toolkit";
import {booksList} from "./Data.jsx";


const bookSlice = createSlice({
    name: "books",
    initialState: booksList,
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload)
        },
        bookDetails: (state, action) => {
            const {id, name, author, description} = action.payload
        },
        updateBook: (state, action) => {
            const {id, name, author, description} = action.payload
            const uu = state.find(book => book.id == id)
            if(uu) {
                uu.name = name
                uu.author = author
                uu.description = description
            }
        },
        deleteBook: (state, action) => {
            const {id} = action.payload
            const uu = state.find(book => book.id == id)
            if(uu) {
                return state.filter(f => f.id !== id)
            }
        }
    }
})


export const {addBook, bookDetails, updateBook, deleteBook} = bookSlice.actions;
export default bookSlice.reducer