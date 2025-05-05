import { Component } from "react";
import styled from "styled-components";

const Form = styled.form`
  width: 255px;
  border: 2px solid black;
  margin-left: 5px;
  padding-left: 5px;
  row-gap: 5px;
`;
const ButtonForm=styled.button`
  background: none;
  margin-bottom: 10px;
  margin-top: 10px;
  border: 2px solid gray;
  border-radius: 5px;
`
class NewContact extends Component {
  addNewContact = (event) => {
    event.preventDefault();
    let name = event.target.elements.userName.value;
    let telephone = event.target.elements.number.value
    this.props.newContact(name,telephone);
  };
  render() {
    return (
      <Form onSubmit={this.addNewContact}>
        <p>Name</p>
        <input name="userName" type="text"></input>
        <p>Number</p>
        <input
          type="tel"
          name="number"
          pattern="^\+[1-9][0-9]{7,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <ButtonForm>Add contact</ButtonForm>
      </Form>
    );
  }
}
export default NewContact;
