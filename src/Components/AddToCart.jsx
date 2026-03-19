import React, { useState } from 'react';

const products = [
    {
        id: 1,
        title: "iPhone 14",
        price: 79999,
        category: "Electronics",
        image: "https://images.unsplash.com/photo-1661961112951-f2bfd6f6c2c1",
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
        image: "https://images.unsplash.com/photo-1587202372775-a1c8c4b3e3c3",
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
        image: "https://images.unsplash.com/photo-1585386959984-a41552231658",
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

const AddToCart = () => {

    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart(prev => [...prev, { ...item }]);
    };

    const remove = (id) => {
        setCart(prev => prev.filter(item => item.id !== id));
    }

    cart.map(i => console.log(i))

    return (
        <div className='text-center'>
            <div className='w-full px-10 flex items-center justify-between'>
                <h1 className='text-4xl font-semibold text-emerald-500 mb-5'>Unidays</h1>
                <div className='relative'>
                    <span className='absolute -top-4 size-6 rounded-full bg-red-500 text-white flex items-center justify-center'>
                        {cart.length}
                    </span>
                    <span className='rounded border px-3 py-1'>Cart</span>
                </div>
            </div>

            <p className='text-5xl font-bold mb-5'>All Products</p>
            <div className='grid grid-cols-4 justify-items-center gap-4 w-full'>
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
                                add={addToCart}
                            />
                        )
                    })
                }
            </div>

            <CartItems allItems={cart} remove={remove} />
        </div>
    )
}

export default AddToCart;

const Products = ({ title, price, category, image, rating, item, add }) => {

    return (
        <div className='flex flex-col border rounded w-70 p-2'>
            <div className='flex items-center justify-between'>
                <p>{title}</p>
                <p className='rounded-full border px-1 bg-yellow-400'>{category}</p>
            </div>
            <img src={image} className='w-full h-60 object-cover mt-2 rounded' />
            <div className='flex items-center justify-around mt-2 border rounded'>
                <span>Rs.{price}</span>
                <span>Ratings: {rating}</span>
            </div>
            <button
                onClick={() => add(item)}
                className='bg-emerald-500 h-8 mt-2 font-semibold text-white cursor-pointer hover:bg-emerald-700 transition-colors'>Add</button>
        </div>
    )

}

const CartItems = ({ allItems, remove }) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <p className='text-5xl my-4 font-bold text-center'>Cart Items</p>
            <div className='grid grid-cols-4 gap-4 jusitfy-items-center'>
                {
                    allItems.map(i => {
                        return (
                            <div>
                                <Products
                                    title={i.title}
                                    image={i.image}
                                    category={i.category}
                                    rating={i.rating}
                                    price={i.price}
                                />
                                <span
                                    onClick={() => remove(i.id)}
                                    className='bg-red-600 cursor-pointer text-white p-2 mt-5'>Remove Item: {i.title}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
