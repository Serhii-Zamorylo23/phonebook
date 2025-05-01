import { Component } from "react";

class Contacts extends Component{

    render(){
        return(
            <>
            <ul>
                {this.props.userInfo.map((user)=>{
                    <li>Name:{user}</li>
                })}
            </ul>
            </>
        )
    }
}
export default Contacts