import React from "react";

class Todo extends React.Component {

    toggleTodo = () => {
        this.props.toggleTodo(this.props.todo.id)
    }

    render() {

        const todoStyle = {};
        
        if(this.props.todo.completed){
            todoStyle.textDecoration = "line-through"
        }

        return (
            <div onClick={this.toggleTodo} style={todoStyle}>{this.props.todo.task}</div>
        )
    }
}

export default Todo;