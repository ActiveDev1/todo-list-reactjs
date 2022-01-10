import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { AuthForm } from '../pages/login'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/login" element={<AuthForm />} />
                <Route path="/signup" element={<AuthForm />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router
