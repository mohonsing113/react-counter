import React, { Component } from 'react';
import Counter from './Counter';
import CounterCreator from './CounterCreator';

class CounterGroup extends Component {

    constructor(props){
        super(props)
        this.state = {
            sum:0,
            counter: new Array(props.size).fill(0)
        }
    }

    updateSum = (subSum) =>{
        this.setState({sum: this.state.sum+subSum})
    }

    addCounter = (newCounterSize)=>{
        this.setState({counter: new Array(newCounterSize).fill(0)})
    }

    render() {
        return (
            <div>
                {this.state.counter.map(()=><Counter onUpdate={this.updateSum}/>)}
                <span>Sum: {this.state.sum} </span>
                <CounterCreator onAdded={this.addCounter}/>
            </div>
        );
    }
}

export default CounterGroup;
