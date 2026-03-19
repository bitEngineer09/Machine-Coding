import React, { useState } from 'react'

const fruits = [
    {
        id: 1,
        name: "Apple",
        desc: "Apple is red"
    },
    {
        id: 2,
        name: "Banana",
        desc: "Banana is yellow"
    },
    {
        id: 3,
        name: "Mango",
        desc: "Mango is sweet and juicy"
    },
    {
        id: 4,
        name: "Orange",
        desc: "Orange is rich in vitamin C"
    },
    {
        id: 5,
        name: "Grapes",
        desc: "Grapes come in bunches"
    }
];

const Accordion = () => {
    const [selectedId, setSelectedId] = useState();

    const handleToggle = (id) => {
        setSelectedId(prev => prev === id ? null : id);
    }


    return (
        <div className="flex flex-col gap-5 items-center justify-center ">
            {
                fruits.map(item => {
                    const { id, name, desc } = item;
                    return (
                        <div key={id} className='flex flex-col items-center justify-center w-60 border-b-2 bg-gray-100'>
                            <div className='flex items-center justify-center w-full bg-gray-200 p-3'>
                                {name}
                                <span onClick={() => {
                                    handleToggle(id);
                                }}>
                                    {selectedId == id ? "-" : "+"}
                                </span>
                            </div>
                            {
                                selectedId === id && <div className="bg-stone-600 text-white w-full text-center p-3">
                                    {desc}
                                </div>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Accordion;