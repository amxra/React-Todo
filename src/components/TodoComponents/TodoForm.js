import React from "react";

class TodoForm extends React.Component {

    render(){
    return(
        <div>
            <form>
                <input type = "text" placeholder = "add to do"/>
                <button>Add</button>
                <button>Remove</button>
            </form>
        </div>
        
    )}
}


export default TodoForm;