import {Component} from 'react';

class Timer extends Component {
    state = {
        seconds : 0,
    };

    myInterval = {};

    componentWillUnmount = () =>{
        clearInterval(this.myInterval);
    };

    componentDidMount = () =>{
        this.myInterval = setInterval(()=> this.setState({seconds : this.state.seconds + 1}),
        1000);
    };

    render(){
        return( 
        <>
            <h1>Timer App</h1>
            <div>Seconds Elapsed: {this.state.seconds}</div>
        </>          
        );}
}

export default Timer;