import React, { Component } from 'react';
import ChildCompoent from './ChildComponent';

class ParentComponent extends Component {
       constructor(props){
           super(props)

           this.state = {
               ParentName : 'Parent'
           }
           this.greetParent = this.greetParent.bind(this) 

       }
        greetParent(childName){
           alert('Hello ${this.state.ParentName} form ${childName}')
       }

    reder() {
        return (
            <div>
                <ChildCompoent greetHandler = {this.greetParent}/>
            </div>
        );
    }
}

export default ParentComponent