import React, { useEffect, useState } from 'react';

const TodoLocal = () => {
    const [todo, setTodo] = useState(() => {
        try {
            const stored = localStorage.getItem("todos");
            return stored ? JSON.parse(stored) : [];
        } catch {
            return [];
        }
    });

    const [value, setValue] = useState("");

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todo));
    }, [todo])

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const add = () => {
        let newTodo = {
            id: Date.now(),
            value,
            completed: false,
        }
        setTodo(prev => [...prev, newTodo]);
        setValue("");
    }

    const remove = (id) => {
        setTodo(prev => prev.filter(item => item.id !== id))
    }

    const toggle = (id) => {
        setTodo(prev => prev.map(
            item => item.id === id ? { ...item, completed: !item.completed } : item
        ))
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-4xl mb-5'>Todo</h1>
            <form onSubmit={handleSubmit} className='flex gap-5'>
                <input
                    type="text"
                    name="input"
                    className='border rounded p-1'
                    placeholder="Enter here"
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button type="button" onClick={add} className='border px-3 py-2 rounded bg-blue-600 text-white'>Add</button>
            </form>
            {
                todo?.map(i =>
                    <div key={i.id} className='flex items-center gap-5 mt-4'>
                        <input type="checkbox" checked={i.completed} onChange={() => toggle(i.id)} />
                        <p className={`text-2xl ${i.completed && "line-through"}`}>{i.value}</p>
                        <span
                            onClick={() => remove(i.id)}
                            className={`text-2xl text-red-600 font-semibold`}>x
                        </span>
                    </div>
                )
            }
        </div>
    )
}

export default TodoLocal;