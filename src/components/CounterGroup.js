import React, { Component } from 'react';
import Counter from './Counter';

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

    state={size: this.props.size}
    render() {
        return (
            <div>
                {this.state.counter.map(()=><Counter onUpdate={this.updateSum}/>)}
                <span>Sum: {this.state.sum} </span>
            </div>
        );
    }
}

export default CounterGroup;
