import React, { Component } from 'react';

class Counter extends Component {

    
    increase(){
        this.setState({number: this.state.number+1})
        this.props.onUpdate(1)
    }

    decrease(){
        this.setState({number: this.state.number-1})
        this.props.onUpdate(-1)
    }

    state={number: 0}
    render() {
        return (
        <div>
            <button onClick={()=>{this.increase()}}>+</button>
            <span>{this.state.number}</span>
            <button onClick={()=>{this.decrease()}}>-</button>
        </div>
        );
    }

    getNumber(){
        return this.state.number;
    }
}

export default Counter;
