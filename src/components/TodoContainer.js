import React from "react"

// components
import Todoslist from "./TodoList"
import Header from "./Header"
import InputTodo from "./InputTodo"

// libraries
import { v4 as uuidv4 } from "uuid"

class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: true
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
    };

    handleChange = (id) => {
        console.log("clicked", id);
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        })
    }

    delTodo = id => {
        console.log("deleted", id);
        this.setState({
            todos: [
                ...this.state.todos.filter(todo => {
                    return todo.id !== id;
                })
            ]
        })
    }

    addTodoItem = title => {
        console.log("the title on the todocontainer " + title)
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };

        this.setState({
            todos: [...this.state.todos, newTodo]
        });
    }

    render() {
        return (
            <div className="container">
                <Header />
                <InputTodo addTodoProps={this.addTodoItem}/>
                <Todoslist 
                    todos={this.state.todos} 
                    handleChangeProps={this.handleChange} 
                    deleteTodoProps={this.delTodo}
                />
            </div>
        )
    }
}

export default TodoContainer