import React from 'react'
import collection from './data-layer/todoCollection'

function DisplayGuy({ list, updateList }) {

    const doneTodo = (id) => {

        // toggle current model to done/not 

        let modelToToggle = collection.get(id)
        if (!modelToToggle) return
        modelToToggle.set({ done: !modelToToggle.get('done') })
        modelToToggle.save({}, { url: '/todos/' + modelToToggle.get('id') })
        // collection.set({ modelToToggle }, { remove: false })
        updateList();
    }

    const editTodo = (id) => {
        let updatedTodo = prompt('Update todo : ')
        let modelToToggle = collection.get(id)
        modelToToggle.set({ content: updatedTodo })
        updateList()
    }

    const deleteTodo = (id) => {
        let modelToToggle = collection.get(id)
        collection.remove(modelToToggle)
        updateList();
    }

    return (
        <div className="displayGuy">
            {list?.map(todo => (

                <div key={todo.id} className="todo-row">
                    <h3 style={todo.done ? { color: 'grey' } : {}}>{todo.content}</h3>
                    <button onClick={() => doneTodo(todo.id)}>DONE</button>
                    <button onClick={() => editTodo(todo.id)}>edit</button>
                    <button onClick={() => deleteTodo(todo.id)}>delete</button>
                </div>
            ))}
        </div>
    )
}

export default DisplayGuy
