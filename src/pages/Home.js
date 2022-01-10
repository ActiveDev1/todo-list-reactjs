import { Header, Content } from '../components'
import { TodoProvider } from '../contexts/TodoContext'
export const Home = () => {
    return (
        <TodoProvider>
            <Header />
            <Content />
        </TodoProvider>
    )
}
