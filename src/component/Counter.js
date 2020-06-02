import React, { Component, useCallback } from 'react';

class Counter extends Component {
       constructor(props){
           super(props)
           this.state = {
               count : 0
            }
       }
    Increment(){
        this.setState({
            count : this.state.count + 1
        },
        () => {
            console.log('CallBack Value' ,this.state.count)
        }
        )
        console.log(this.state.count)
    }
    
     render() {
        return (
            <div>
                 <h1>Count - {this.state.count}</h1> 
                 <button onClick = {() => this.Increment()}>Incremnet</button> 
            </div>
        );
    }
}

export default Counter;