import React, { Component } from 'react';
import Counter from './Counter';
import CounterCreator from './CounterCreator';

class CounterGroup extends Component {

    constructor(props){
        super(props)
        this.state = {
            sum:0,
            counters: new Array(parseInt(this.props.size)).fill(0).map(() =>
                {return {number :0, id: new Date().getTime+ Math.random() };
            })
        }
    }

    addCounter = (newCounterSize)=>{
        this.setState(
            {counters: new Array(parseInt(newCounterSize)).fill(0).map(() =>
                {return {number :0, id: new Date().getTime+ Math.random()}
            }),
            sum: 0
        })
        
    }

    increase =(id)=>{
        const newCounters = this.state.counters.map(counter => {
            if(counter.id === id){
                return {number: counter.number+1, id:counter.id};
            }else{
                return counter;
            }});
        this.setState({counters: newCounters, sum:this.state.sum+1})
    }
  
    decrease =(id)=>{
        const newCounters = this.state.counters.map(counter => {
            if(counter.id === id){
                return {number: counter.number-1, id:counter.id};
            }else{
                return counter;
            }});
        this.setState({counters: newCounters, sum:this.state.sum-1})
    }


    render() {
        return (
            <div>
                {this.state.counters.map((counter)=><Counter
                 id={counter.id}
                 onIncreased={this.increase}
                 onDecreased={this.decrease}
                 counterNum ={counter.number}/>)}
                <span>Sum: {this.state.sum} </span>
                <CounterCreator onAdded={this.addCounter}/>
            </div>
        );
    }
}

export default CounterGroup;
