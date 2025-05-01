import { Component } from "react";

class NewContact extends Component{
    addNewContact=(event)=>{
        event.preventDefault()
        let inputValue=event.target.elements.userName.value    
        this.props.newContact(inputValue)
    }
    render(){
        return(
            <form onSubmit={this.addNewContact}>
            <p>Name</p>
            <input name="userName" type="text"></input>
            <button>Add contact</button>
        </form>
        )
    }
}
export default NewContact