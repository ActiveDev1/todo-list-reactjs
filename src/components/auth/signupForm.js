/* eslint-disable jsx-a11y/anchor-is-valid */
import { Form, FloatingLabel, Button } from 'react-bootstrap'

const signUpForm = () => {
    return (
        <>
            <h2 className="fw-bold">Sign Up</h2>
            <hr />
            <Form className="my-3">
                <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                    <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>
                <Button type="submit" className="w-100 p-2 mt-4 border-0 rounded-pill">
                    Sign Up
                </Button>
            </Form>
            <div>
                <span>Already a member‌?</span>
                <a href="/login" className="ms-2 text-decoration-none">
                    Login
                </a>
            </div>
        </>
    )
}

export default signUpForm
