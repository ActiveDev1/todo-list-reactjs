/* eslint-disable jsx-a11y/anchor-is-valid */
import {} from 'react-bootstrap'
import { Form, FloatingLabel, Button } from 'react-bootstrap'

export const LoginForm = () => {
    return (
        <>
            <h3 className="fw-bold text-dark">Login</h3>
            <hr />
            <Form className="my-3">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <a className="d-block mt-2 mb-4 text-start text-decoration-none">Forget Password ?</a>
                <Button type="submit" className="w-100 p-2 border-0 rounded-pill">
                    Login
                </Button>
            </Form>
            <div>
                <span>Not a member‌?</span>
                <a href="/signup" className="ms-2 text-decoration-none">
                    SignUp
                </a>
            </div>
        </>
    )
}

export default LoginForm
