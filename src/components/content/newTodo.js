import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Form, Row, Col } from 'react-bootstrap'
import { TodoContext } from '../../contexts/TodoContext'

function NewTodo() {
    const { add } = useContext(TodoContext)
    // const [validated, setValidated] = useState(false)

    const onSubmit = (data, event) => {
        const { title } = data
        // const form = event.target['1']
        // if (form.checkValidity() === false) {
        //     event.preventDefault()
        //     event.stopPropagation()
        // }

        // setValidated(true)
        if (title !== '') {
            add(title)
        }
        reset()
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    return (
        <Form className='my-5' onSubmit={handleSubmit(onSubmit)}>
            <Row md='px-5' className='g-3 justify-content-between align-content-sm-center'>
                <Form.Group as={Col} xs='12' md='10' controlId='validationCustom03'>
                    <Form.Control
                        type='text'
                        placeholder='New Task'
                        className={`${errors.title ? 'is-invalid' : ''}`}
                        {...register('title', { required: true })}
                    />
                    <Form.Control.Feedback type='invalid' className='text-start ms-2 ps-1'>
                        {errors.title && 'Enter a title'}
                    </Form.Control.Feedback>
                </Form.Group>

                <Col className='text-end'>
                    <Button type='submit' variant='primary'>
                        Add
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default NewTodo
