import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext';
import Products from '../Components/AddToCartWithPage/Products';

const Cart = () => {
    const {
        cart,
        remove,
        handleIncrease,
        handleDecrease,
        total } = useContext(CartContext);

    return (
        <div>
            <CartItems
                allItems={cart}
                remove={remove}
                handleDecrease={handleDecrease}
                handleIncrease={handleIncrease}
                total={total}
            />
        </div>
    )
}

export default Cart;


// CART ITEMS
const CartItems = ({ allItems, remove, handleDecrease, handleIncrease, total }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-5xl my-7 font-bold text-center'>Cart Items</p>
            <div className='grid grid-cols-4 gap-4 jusitfy-items-center'>
                {
                    allItems.map(i => {
                        return (
                            <div key={i.id} className='flex flex-col gap-4'>
                                <Products
                                    title={i.title}
                                    image={i.image}
                                    category={i.category}
                                    rating={i.rating}
                                    price={i.price}
                                />

                                {/* COUNTER */}
                                <div className='w-full flex justify-between'>
                                    <span
                                        onClick={() => handleDecrease(i.id)}
                                        className='size-7 cursor-pointer flex items-center justify-center text-white font-semibold text-2xl rounded-full bg-red-500'>-</span>
                                    <p>Quantity: <span className='font-semibold'>{i.quantity}</span></p>
                                    <span
                                        onClick={() => handleIncrease(i.id)}
                                        className='size-7 cursor-pointer flex items-center justify-center text-white font-semibold text-2xl rounded-full bg-green-500'>+</span>
                                </div>

                                {/* REMOVE FROM CART */}
                                <p
                                    onClick={() => remove(i.id)}
                                    className='bg-red-600 cursor-pointer rounded-full text-white p-2'>Remove Item: {i.title}
                                </p>
                            </div>
                        )
                    })
                }
            </div>
            <p className='text-3xl font-semibold mt-2'>Total Amount: {total}</p>
        </div>
    )
}