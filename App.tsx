import * as React from 'react';
import './style.css';
import {Greet }from './Greet';
import {Person} from './Person';
import {PersonList} from './PersonList';
import {Status} from './Status'
import {Header} from './Header';
import {Oscar} from './Oscar';
import { Button } from './Eventprops';
import { InputEvent} from './Input';
import {StyleComp} from './StyleProps';


export default function App() {

  const personName ={
    first:'Eemani',
    last :'Upendra'
  }

  const nameList =[
    {
      first : 'Kotipalli',
      last:'Sai teja'
    },
    {
      first : 'Galam',
      last:'Surya teja'
    },
    {
      first : 'Nuthalapati',
      last:'Naveen'
    },
    {
      first : 'Kurmala',
      last:'Avinash'
    }
  ]
  return (
    <div>
     <Greet name = 'Upendra' messageCount={100} isloggiedIn={true}/>
     <Person name ={personName}/>
     <PersonList names ={nameList}/>
     <Status status = 'success'/>
     <Oscar>
     <Header>This Oscar goes to tom cruise</Header>
     </Oscar>
     <Button handleClick = { (event ,id) =>{
       console.log("button clicked",event,id)
     }}/>
     <InputEvent value = '' handleChange ={ (event) =>{
   console.log(event)
     }}/>
     <StyleComp style ={ {color:'red' , border : '5px solid green' ,padding : '1rem' ,width:'300px'}}/>
    </div>

  );
}
