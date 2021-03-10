import React, { useState } from 'react'
import collection from './data-layer/todoCollection'
import todoModel from './data-layer/todoModel'

function InputGuy({ updateList }) {

    const [input, setInput] = useState('')

    const getRandom = () => Math.round((Math.random() * 300300) % 700000)

    const addTodo = () => {
        if (input === '') return

        let id = getRandom();

        let todo = new todoModel({ id, content: input })

        collection.add(todo)
        console.log(JSON.stringify(todo) + ' adding to collection...')

        setInput('')

        updateList();
    }

    return (
        <div className="inputGuy">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>ADD</button>
        </div>
    )
}

export default InputGuy
