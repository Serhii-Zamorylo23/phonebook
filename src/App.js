import './App.css';
import { Component } from 'react';
import NewContact from './components/NewContact';
import Contacts from './components/Contacts';
import { nanoid } from 'nanoid';
import Filter from './components/Filter';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      contacts: [],
      filter: ''
    }
  }
  setNewContact=(name,telephone)=>{
    const isDuplicate = this.state.contacts.some(
      (contact) => contact.name == name
    );
  
    if (isDuplicate) {
      alert("A contact with this name already exists!");
      return;
    }else{
      this.setState((prev) => ({
        contacts: [...prev.contacts, { id: nanoid(), name, telephone }]
      }));
    }
  }
  delete=(id)=>{
    this.setState((prev)=>({
      contacts: prev.contacts.filter((contact)=>contact.id!==id)
    }))
  }
  filterValue=(value)=>{
    this.setState(()=>({
      filter:`${value}`
    }))
    this.filter()
  }
  filter=()=>{
    this.setState((prev)=>({
      contacts:prev.contacts.filter((contact)=>contact.name.includes(prev.filter.toLowerCase()))
    }))
  }
  render(){
    return(
      <>
      <h2>Phonebook</h2>
      <NewContact newContact={this.setNewContact}/>
      <h2>Contacts</h2>
      <Filter filter={this.filterValue}/>
      <Contacts userInfo={this.state.contacts} deleteContact={this.delete}/> 
      </>
    )
  }
}

export default App;
