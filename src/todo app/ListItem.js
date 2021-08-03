import { Component } from "react";

class ListItem extends Component{

    state = {
        checked: false,
    }

    handleCheck = (event) => {
        this.setState({checked: event.target.checked});
    }

    render(){
        return(
            <>
                <ol>
                    {this.props.toDoItems.map((toDoItem)=><li><input name="strike" id="strike" type="checkbox" onChange={this.handleCheck} /><label for="strike" />{toDoItem}</li>)}
                </ol>
            </>
        );
    };
};

export default ListItem;