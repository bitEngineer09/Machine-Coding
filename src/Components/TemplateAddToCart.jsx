import React from 'react';

const products = [
    {
        id: 1,
        title: "iPhone 14",
        price: 79999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1663314326576-13b6ab7fd5d4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGlwaG9uZSUyMDE0fGVufDB8fDB8fHww",
        rating: 4.7,
        stock: 10,
    },
    {
        id: 2,
        title: "Nike Air Max",
        price: 5999,
        category: "Footwear",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        rating: 4.5,
        stock: 25,
    },
    {
        id: 3,
        title: "Samsung Smart TV",
        price: 45999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
        rating: 4.6,
        stock: 5,
    },
    {
        id: 4,
        title: "Leather Backpack",
        price: 2499,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
        rating: 4.3,
        stock: 18,
    },
    {
        id: 5,
        title: "Gaming Mouse",
        price: 1499,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1616296425622-4560a2ad83de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D",
        rating: 4.4,
        stock: 30,
    },
    {
        id: 6,
        title: "Men's Hoodie",
        price: 1999,
        category: "Clothing",
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
        rating: 4.2,
        stock: 20,
    },
    {
        id: 7,
        title: "Bluetooth Speaker",
        price: 2999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3BlYWtlcnxlbnwwfHwwfHx8MA%3D%3D",
        rating: 4.5,
        stock: 12,
    },
    {
        id: 8,
        title: "Casual Watch",
        price: 3499,
        category: "Accessories",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552",
        rating: 4.1,
        stock: 15,
    }
];

const TemplateAddToCart = () => {
    return (
        <div className='text-center'>
            <div className='w-full px-10 flex items-center justify-between'>
                <h1 className='text-4xl font-semibold text-emerald-500 mb-5'>Unidays</h1>
                <div className='relative'>
                    <span className='absolute -top-4 size-6 rounded-full bg-red-500 text-white flex items-center justify-center'>
                        1
                    </span>
                    <span
                        className='rounded border px-3 py-1 cursor-pointer'>Cart</span>
                </div>
            </div>

            <p className='text-5xl font-bold mb-5'>All Products</p>
            <div className='grid grid-cols-5 justify-items-center gap-4 w-full'>
                {
                    products.map(prod => {
                        const { id, title, price, category, image, rating } = prod;
                        return (
                            <Products
                                key={id}
                                title={title}
                                price={price}
                                category={category}
                                image={image}
                                rating={rating}
                                item={prod}
                            />
                        )
                    })
                }
            </div>

            <div>
                <CartItems
                />
            </div>
        </div>
    )
}

export default TemplateAddToCart;

// PRODUCTS CARD
const Products = ({ title, price, category, image, rating, }) => {

    return (
        <div className='flex flex-col gap-2 border-2 rounded-xl w-70 p-2'>
            <div className='flex items-center justify-between'>
                <p>{title}</p>
                <p className='rounded-full border px-1 bg-yellow-400'>{category}</p>
            </div>
            <img src={image} className='w-full h-60 object-cover mt-2 rounded-2xl' />
            <div className='flex items-center justify-around mt-2 border rounded'>
                <span>Rs.{price}</span>
                <span>Ratings: {rating}</span>
            </div>
            <button
                className='bg-emerald-500 h-8 rounded-full mt-2 font-semibold text-white cursor-pointer hover:bg-emerald-700 transition-colors'>Add</button>
        </div>
    )

}

// CART ITEMS
const CartItems = ({ allItems, remove, handleDecrease, handleIncrease }) => {
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
            <p className='text-3xl font-semibold mt-2'>Total Amount: </p>
        </div>
    )
}