import React from "react";
import styled from "styled-components";


const StyledDiv = styled.div `
div{

    button{
        background-color: #B19CD9;
        border: 1px solid #B19CD9;
        color: white;
        padding: 0.2rem 0.5rem;

        &: hover{
            color: #B19CD9;
            background-color: white;
        }
    }

}
`


class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            currentTodo: '',
        }
    }

    onInputChange = (event) => {

        this.setState({
            currentTodo: event.target.value
        })
    }
    add = (event) => {
        event.preventDefault();
        let todoObject = {
            task: this.state.currentTodo,
            id: Date.now(),
            completed: false
        }
        this.setState({
            currentTodo: '',
        })

        this.props.addTodo(todoObject)
    }

    render() {
        return (
            <StyledDiv>
            <div>

                <form onSubmit={this.add}>
                    <input
                        type='text'
                        placeholder='add todo here'
                        value={this.state.currentTodo}
                        onChange={this.onInputChange}
                    />
                    < button onClick={this.add} >Add Todo</ button>
                    < button onClick={this.props.clearCompletedTodos}>Clear Completed</ button>
                </form>
                
            </div>
            </StyledDiv>
        )
    }
}

export default TodoForm;