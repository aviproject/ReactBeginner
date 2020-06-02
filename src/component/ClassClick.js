import React, { Component } from 'react';

class ClassClick extends Component {

    ClassClick (){
        alert("You select CLicked Button")
        console.log("Button Clicked")
    }
    render() {
        return (
            <div>
                <button onClick={this.ClassClick}>Click Me</button>
            </div>
        );
    }
}

export default ClassClick;