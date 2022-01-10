export const getTodos = () => {
    try {
        const data = localStorage.getItem('todos') || ''
        const result = JSON.parse(data)
        return result
    } catch (error) {
        return []
    }
}

export const saveTodo = (todos) => {
    try {
        localStorage.setItem('todos', JSON.stringify(todos))
    } catch (error) {
        return []
    }
}
