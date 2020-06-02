import React,{Component} from "react"

class Super extends Component{
    render(){
        return(
            <h3>
                Hello {this.props.name} a.k.a {this.props.heroname}
            </h3>
        )
    }
}

export default Super