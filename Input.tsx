//input event

import * as React from 'react';

type InputEventProps={
  value:string
  handleChange :(event : React.ChangeEvent<HTMLInputElement>) => void
}


export const InputEvent = (props:InputEventProps) =>{

 
  return(
    <div>
      <input value ={props.value}
      onChange = {props.handleChange}/>
    </div>
  )
}