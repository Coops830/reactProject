import { Component } from "react";
import InputForm from "./InputForm";
import ListItem from "./ListItem";

class TodoAppHome extends Component{

    state = {
        currentItem: "",
        toDoItems: [],
    }

    handleChange = (event) => {
        console.log('Input field event', event)
        this.setState({currentItem: event.target.value});
    }

    handleNewSubmit = (event) => {
        event.preventDefault();
        this.setState({toDoItems: this.state.toDoItems.concat(this.state.currentItem)})
        this.setState({currentItem: ""});
    }

    render(){
        return(
        <>
            <h1>ToDo List App</h1>
            {/* Input form for the todo app */}
            <InputForm currentItem = {this.state.currentItem} handleChange = {this.handleChange} handleNewSubmit={this.handleNewSubmit} toDoItems={this.state.toDoItems}/>

            {/*List view of todo list*/}
        <ListItem toDoItems={this.state.toDoItems} />
        </>
        )
    }
}

export default TodoAppHome;