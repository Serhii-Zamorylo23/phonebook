import { Component } from "react";

class Filter extends Component{
    
    filterValue=(event)=>{
        this.props.filter(event.target.value)
    }
    render(){
        return(
            <>
            <p>Find contacts by name</p>
            <input type="text" onChange={this.filterValue}/>
            </>
        )
    }
}
export default Filter