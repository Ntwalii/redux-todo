import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {configureStore} from '@reduxjs/toolkit'
import App from './App.jsx'
import './index.css'
import toDoReducer from './features/toDos.js'
import {Provider} from 'react-redux'

const store=configureStore({
  reducer:{
    toDo:toDoReducer,
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <StrictMode>
    <App />
  </StrictMode>
  </Provider>
)
