import { Component } from "react";
import './theme.css'

class Theme extends Component {

state = {
    theme: "white"
}

handleSwitchTheme = () => {
    if (this.state.theme === 'white'){
        this.setState({theme: "black"});
        document.querySelectorAll('body')[0].classList.remove('themeapp__button--whiteTheme')
        document.querySelectorAll('body')[0].classList.add('themeapp__button--blackTheme')
    } else {
        this.setState({theme: "white"});
        document.querySelectorAll('body')[0].classList.remove('themeapp__button--blackTheme')
        document.querySelectorAll('body')[0].classList.add('themeapp__button--whiteTheme')
    }
}

    render(){
        return(
            <>
                <h1>Theme App</h1>
                <button onClick={this.handleSwitchTheme}>Switch Theme</button>

            </>
        );
    }
}

export default Theme;