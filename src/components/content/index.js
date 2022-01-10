import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import NewTodo from './newTodo'
import TodoList from './todoList'

class Content extends Component {
    render() {
        return (
            <Container className="text-center mt-5 px-md-5 pb-5">
                <Row className="justify-content-center">
                    <h1>Todo List</h1>
                    <Col xs={11} md={9} lg={7}>
                        <NewTodo />
                    </Col>

                    <Col xs={11} md={9} lg={7}>
                        <TodoList />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Content
