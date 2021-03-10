import React, { useEffect, useState } from 'react'
import collection from './data-layer/todoCollection'

function DisplayGuy() {
    const [list, setList] = useState(null)

    useEffect(() => {
        // if (collection) setList(collection)

        console.log(list)
    }, [])

    const editTodo = () => { }
    const deleteTodo = () => { }

    return (
        <div className="displayGuy">
            {list?.map(todo => (
                <div className="todo-row">
                    <h3 key={todo.id}>{todo.content}</h3>
                    <button onClick={editTodo}>edit</button>
                    <button onClick={deleteTodo}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default DisplayGuy
