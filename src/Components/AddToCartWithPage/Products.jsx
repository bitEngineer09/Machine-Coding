import React from 'react'

const Products = ({ title, price, category, image, rating, item, add }) => {

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
                onClick={() => add(item)}
                className='bg-emerald-500 h-8 rounded-full mt-2 font-semibold text-white cursor-pointer hover:bg-emerald-700 transition-colors'>Add</button>
        </div>
    )

}
export default Products