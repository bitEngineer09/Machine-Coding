import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const remove = (id) => {
        setCart(prev => prev.filter(i => i.id !== id));
    }

    const handleIncrease = (id) => {
        setCart(prev => prev.map(i => i.id === id ? { ...i, quantity: i.quantity + 1 } : i));
    }

    const handleDecrease = (id) => {
        setCart(prev => prev.map(i => i.id == id ? { ...i, quantity: i.quantity - 1 } : i).filter(i => i.quantity > 0));
    }

    const total = cart.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0);

    let value = {
        cart, setCart,
        remove, handleDecrease, handleIncrease,
        total
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;