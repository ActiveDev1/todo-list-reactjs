import { useLocation } from 'react-router-dom'
import { Container, LoginForm, SignUpForm } from '../components'

export const AuthForm = () => {
    const location = useLocation()

    const form = location.pathname === '/login' ? <LoginForm /> : <SignUpForm />
    return <Container element={form}></Container>
}
