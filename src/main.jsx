import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import BookReducer from "./BookReducer.jsx";

const store = configureStore({
    reducer: {
        books: BookReducer
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
