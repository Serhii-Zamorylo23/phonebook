import { Component } from "react";
import styled from "styled-components";
const List=styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

class Contacts extends Component {

  contactId=(event)=>{
    this.props.deleteContact(event.target.id)
  }

  render() {
    return (
      <>
        <List>
          {this.props.userInfo.map((user) => (
            <li id={user.id}>
              {user.name} : {user.telephone}
              <button id={user.id} onClick={this.contactId}>Delete</button>
            </li>
          ))}
        </List>
      </>
    );
  }
}
export default Contacts;
