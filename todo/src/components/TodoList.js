import React from 'react'
import { connect } from 'react-redux'

import { addTodo, toggleTodo, removeTodo } from '../actions'

class TodoList extends React.Component {
    constructor() {
        super()

        this.state = {
            todo: ''
        }
    }

    handleChange = event => {
        this.setState( {
            [event.target.name]: event.target.value
        } )
    }

    addTodo = () => {
        this.props.addTodo( this.state.todo )
        this.setState( { todo: '' } )
    }

    render() {
        return (
            <div>
                <h2>Todo List</h2>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todo}
                    placeholder='enter todo'
                    onChange={this.handleChange} />

                <button onClick={this.addTodo}>Add Todo</button>

                {this.props.todos.map( ( todo, index ) => (
                    <div>
                        <div onClick={() => this.props.toggleTodo( index )} key={index}>
                            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.value}</p>
                        </div>
                        <button onClick={() => this.props.removeTodo(index)}>Delete</button>
                    </div>
                ) )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { todos: state.todoReducer.todos }
}

export default connect( mapStateToProps, { addTodo, toggleTodo, removeTodo } )( TodoList )