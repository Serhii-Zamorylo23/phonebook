import './App.css';
import { Component } from 'react';
import NewContact from './components/NewContact';
import Contacts from './components/Contacts';
import { nanoid } from 'nanoid';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      contacts: [],
      filter: ''
    }
  }
  setNewContact=(name,telephone)=>{
    this.setState((prev)=>({
      contacts:[...prev.contacts,{id:nanoid(),name,telephone}]
    }))
  }
  delete=(id)=>{
    this.setState((prev)=>({
      contacts: prev.contacts.filter((contact)=>contact.id!==id)
    }))
  }
  render(){
    return(
      <>
      <h2>Phonebook</h2>
      <NewContact newContact={this.setNewContact}/>
      <Contacts userInfo={this.state.contacts} deleteContact={this.delete}/> 
      </>
    )
  }
}

export default App;
