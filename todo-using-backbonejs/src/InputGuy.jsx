import React, { useState } from 'react'
import collection from './data-layer/todoCollection'
import todoModel from './data-layer/todoModel'

function InputGuy() {

    const [input, setInput] = useState('')
    const [id, setId] = useState(0)

    const addTodo = (e) => {
        if (input === '') return

        setId(id + 1)
        console.log(input)
        let todo = new todoModel(input.toString())

        console.log(JSON.stringify(todo) + ' adding to collection...')
        collection.set(todo)
        setInput('')
    }

    return (
        <div className="inputGuy">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>ADD</button>
        </div>
    )
}

export default InputGuy
