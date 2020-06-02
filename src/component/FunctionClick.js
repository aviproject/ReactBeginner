import React from 'react'


function FunctionClick(){

    function ClickHandler(){
        alert("you clicked button")
        console.log('Button clicked')
    }
    return( 
        <div>
              <button onClick = {ClickHandler}>Click</button>
        </div>
    )

}
export default FunctionClick


