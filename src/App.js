import './App.css';
import { Component } from 'react';
import NewContact from './components/NewContact';
import Contacts from './components/Contacts';
class App extends Component{
  constructor(props){
    super(props)
    this.state={
      contacts: [],
      filter: ''
    }
  }

  setNewContact=(name)=>{
    this.setState((prev)=>({
      contacts:[...prev.contacts,{name}]
    }))
  }
  render(){
    return(
      <>
      <h2>Phonebook</h2>
      <NewContact newContact={this.setNewContact}/>
      <Contacts userInfo={this.state.contacts}/> 
      </>
    )
  }
}

export default App;
