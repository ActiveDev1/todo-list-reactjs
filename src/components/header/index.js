import { Component } from 'react'
import todoLogo from '../../assets/todo-logo.png'
import { Container, Button, Image, Form } from 'react-bootstrap'
import '../../styles/style.css'
import { Link } from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <header className="p-3 bg-dark text-white">
                <Container>
                    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a
                            href="/"
                            className="d-flex align-items-center me-lg-auto mb-2 mb-lg-0 text-white text-decoration-none"
                        >
                            <Image src={todoLogo} alt="todo" />
                        </a>

                        <Form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                            <Form.Control
                                type="search"
                                className="form-control form-control-dark"
                                placeholder="Search..."
                            />
                        </Form>

                        <div className="text-end">
                            <Link to="/login">
                                <Button type="button" className="me-2" variant="outline-light">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/signup">
                                <Button type="button" className="" variant="primary">
                                    Sign-up
                                </Button>
                            </Link>
                        </div>
                    </div>
                </Container>
            </header>
        )
    }
}

export default Header
