import React, { Component } from 'react';

class Reuse extends Component {

      constructor(){
          super()
             this.state = {
                 message:'please submit after filling the form'
             }
      }

      changeMessage(){
          this.setState({
              message :'Thank You for Submitting the form'
          })
      }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick ={() => this.changeMessage()}>submit</button>                
            </div>
        );
    }
}
export default Reuse;