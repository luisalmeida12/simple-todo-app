import React, { Component } from "react"

class InputTodo extends Component {
    state = {
        title: ""
    };

    onChange = e => {
        console.log("hello")
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit = e => {
        e.preventDefault();
        // console.log(this.state.title);
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: "",
        })
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text"
                    className="input-text"
                    placeholder="Add todo..." 
                    name="title" 
                    value={this.state.title} 
                    onChange={this.onChange}
                />
                <input type="submit" className="input-submit" value="Submit" />
            </form>
        )
    }
}

export default InputTodo