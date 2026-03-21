import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import Products from './Products';

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

const AddToCartWithPage = () => {
    const { cart, setCart } = useContext(CartContext);

    cart.map(i => console.log(i));

    const addToCart = (item) => {
        setCart(prev => {
            const exist = prev.find(i => i.id === item.id);

            if (exist) {
                prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i)
            }

            return [...prev, { ...item, quantity: 1 }];
        });
    }

    return (
        <div className='text-center'>
            <div className='w-full px-10 flex items-center justify-between'>
                <h1 className='text-4xl font-semibold text-emerald-500 mb-5'>Unidays</h1>
                <div className='relative'>
                    <span className='absolute -top-4 size-6 rounded-full bg-red-500 text-white flex items-center justify-center'>
                        {cart?.length || 0}
                    </span>
                    <Link to="/cart"
                        className='rounded border px-3 py-1 cursor-pointer'>Cart
                    </Link>
                </div>
            </div>

            <p className='text-5xl font-bold mb-5'>All Products</p>
            <div className='grid grid-cols-5 justify-items-center gap-4 w-full'>
                {
                    products?.map(prod => {
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

            <div>
                {/* <CartItems/> */}
            </div>
        </div>
    )
}

export default AddToCartWithPage;
