import { useContext, useEffect } from 'react'
import { TodoContext } from '../../contexts/TodoContext'
import { ListGroup } from 'react-bootstrap'
import TodoListItem from './todoListItem'

const TodoList = () => {
    const { todos } = useContext(TodoContext)

    useEffect(() => {
        console.log(todos)
    }, [todos])

    const todoList = todos.map((todo) => {
        return <TodoListItem todo={todo} key={todo.id} />
    })

    const emptyList = <p className="fs-5 text-muted">Empty list. Add a new todo</p>

    return <ListGroup>{todos.length === 0 ? emptyList : todoList}</ListGroup>
}

export default TodoList
