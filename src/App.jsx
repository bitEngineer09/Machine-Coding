import React from 'react'
import Accordion from './Components/Accordion'
import Todo from './Components/Todo';
import TodoLocal from './Components/TodoLocal';
import AddToCart from './Components/AddToCart';
import Cart from './pages/Cart';
import AddToCartWithPage from './Components/AddToCartWithPage/AddToCartWithPage';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      {/* <Route element={<Accordion />} path="/" /> */}
      {/* <Route element={<Todo />} path="/" /> */}
      {/* <Route element={<TodoLocal />} path="/" /> */}
      {/* <Route element={<AddToCart />} path="/" /> */}
      <Route element={<AddToCartWithPage />} path="/" />
      <Route element={<Cart />} path='/cart' />
    </Routes>
  )
}

export default App