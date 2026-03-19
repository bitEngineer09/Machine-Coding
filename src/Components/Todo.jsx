import React, { useState } from 'react'

const Todo = () => {
    const [todo, setTodo] = useState([]);
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const add = () => {
        const newTodo = {
            id: Math.floor(Math.random() * 1000),
            value: value,
            completed: false,
        }
        setTodo(prev => [...prev, newTodo]);
        setValue("");
    }

    const remove = (id) => {
        setTodo(prev => prev.filter(item => item.id !== id));
    }

    const toggle = (id) => {
        setTodo(prev =>
            prev.map(item => item.id === id ? { ...item, completed: !item.completed } : item)
        );
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mb-5'>Todo</h1>
            <form onSubmit={handleSubmit} className='flex gap-5'>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    type="text"
                    name="input"
                    className='border rounded p-1'
                    placeholder="Enter here"
                    value={value}
                />
                <button type="button" onClick={add} className='border px-3 py-2 rounded bg-blue-600 text-white'>Add</button>
            </form>

            {
                todo?.map(i => {
                    return (
                        <div key={i.id} className='flex items-center gap-5 mt-4'>
                            <input onChange={() => toggle(i.id)} type="checkbox" checked={i.completed} />
                            <p className={`text-2xl ${i.completed && "line-through"}`}>{i.value}</p>
                            <span
                                onClick={() => remove(i.id)}
                                className={`text-2xl text-red-600 font-semibold`}>x
                            </span>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default Todo