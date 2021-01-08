
import React ,{ useEffect, useState } from 'react';
import './App.css';
import {Button,InputLabel,Input} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Todo from './Todo'
import db from '../src/firebase'
import firebase from 'firebase';



function App() {
const [todos, setTodos]=useState([]);
const [input,setInput]=useState('');
console.log('🤘🏼',input);

useEffect(() => {
  
    db.collection('todos').orderBy('timestamp','desc'
    ).onSnapshot(snapshot=>{
      
      setTodos(snapshot.docs.map(doc=>({id:doc.id,todo:doc.data().todo})))
  
  }
    )
}, [])

const addTodos=(event)=>{
  event.preventDefault();
 
  db.collection('todos').add({
  todo:input,
  timestamp:firebase.firestore.FieldValue.serverTimestamp()
  
})
 

  setInput('')

}
 
  return (
    <div className="App">
      <h1>Hi prashant </h1>
      <form>
      <FormControl>
      <InputLabel>Write a Todo</InputLabel>
      <Input value={input} onChange={event=>setInput(event.target.value)} />
      </FormControl>

      <Button disabled={!input} variant="contained" color="primary" type="submit" onClick={addTodos}>
  Add Todo
</Button>
      </form>
     <ul>
       {todos.map(todo=>(
        <Todo text={todo}/>
       ))}
       
       
       
    
     </ul>
    </div>
  );
}

export default App;
