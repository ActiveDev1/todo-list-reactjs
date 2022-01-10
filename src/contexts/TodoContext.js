import { createContext, useEffect, useState } from 'react'
import { getTodos, saveTodo } from '../services/TodoService'

export const TodoContext = createContext({
    todos: [],
    add: () => {},
    remove: () => {},
    toggle: () => {},
    onEdit: () => {},
    edit: () => {}
})

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(getTodos)

    useEffect(() => {
        saveTodo(todos)
    }, [todos])

    const add = (title) => {
        const todo = {
            id: Math.floor(Math.random() * 1000),
            title: title,
            done: false,
            editing: false
        }
        setTodos([...todos, todo])
    }

    const remove = (todo) => {
        const index = todos.indexOf(todo)
        setTodos(todos.filter((_, i) => i !== index))
    }

    const toggle = (todo) => {
        const index = todos.indexOf(todo)
        todos[index].done = !todo.done
        setTodos([...todos])
    }

    const onEdit = (todo) => {
        const index = todos.indexOf(todo)
        todos[index].editing = !todos[index].editing
        setTodos([...todos])
    }

    const edit = (todoID, title) => {
        const index = todos.findIndex((todo) => todo.id === todoID)
        todos[index].title = title
        setTodos([...todos])
    }

    return <TodoContext.Provider value={{ todos, add, remove, toggle, onEdit, edit }}>{children}</TodoContext.Provider>
}
