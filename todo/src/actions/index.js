export const ADD_TODO = 'ADD_TODO'
export const REMOVE_TODO = 'REMOVE_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export const addTodo = (todo) => {
    return{
        type: 'MOVIE_SELECTED',
        payload: todo
    }
}

export const removeTodo = (index) => {
    return{
        type: 'REMOVE_TODO',
        payload: null
    }
}

export const toggleTodo = (index) => {
    return{
        type: 'TOGGLE_TODO',
        payload: index
    }
}