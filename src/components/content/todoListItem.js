import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TodoContext } from '../../contexts/TodoContext'
import { ListGroup, Form, Button } from 'react-bootstrap'

const TodoListItem = ({ todo }) => {
    const { toggle, onEdit, edit, remove } = useContext(TodoContext)

    const { register, handleSubmit } = useForm()

    const onSubmit = (todoItem, e) => {
        const { title } = todoItem
        const todoID = +e.target['1'].id
        if (title === '') {
            alert('Please enter a title')
        } else {
            edit(todoID, title)
            onEdit(todo)
        }
    }

    const addThroughLine = (todoStatus) => {
        return todoStatus ? 'text-decoration-line-through' : ''
    }

    const editForm = (todo) => (
        <>
            <Form.Control
                type="text"
                defaultValue={todo.title}
                id={todo.id}
                className={'ms-3 ' + addThroughLine(todo.done)}
                {...register('title')}
            />
            <Button className="ms-3" type="submit" variant="secondary" size="sm">
                Edit
            </Button>
        </>
    )

    return (
        <ListGroup.Item id={todo.id} className="my-1 border-1 rounded-3 shadow-sm">
            <Form className="d-flex space justify-content-between align-items-center" onSubmit={handleSubmit(onSubmit)}>
                <Form.Check type="checkbox" id={`todo-${todo.id}`} className="py-2 text-start f-control">
                    <Form.Check.Input type="checkbox" checked={todo.done} onChange={() => toggle(todo)} />
                    {todo.editing ? null : (
                        <Form.Check.Label className={'ps-3 ' + addThroughLine(todo.done)}>
                            {todo.title}
                        </Form.Check.Label>
                    )}
                </Form.Check>
                {todo.editing ? editForm(todo) : null}
                <div className="d-flex">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="blue"
                        className="bi bi-pencil-square mx-3"
                        onClick={() => onEdit(todo)}
                        viewBox="0 0 16 16"
                    >
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path
                            fillRule="evenodd"
                            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                        />
                    </svg>
                    <svg
                        width="16"
                        height="16"
                        fill="red"
                        className="bi bi-trash-fill me-1"
                        viewBox="0 0 16 16"
                        onClick={() => remove(todo)}
                    >
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </div>
            </Form>
        </ListGroup.Item>
    )
}

export default TodoListItem
