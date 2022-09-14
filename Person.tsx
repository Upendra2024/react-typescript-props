import  *  as React  from 'react';
import {PersonProps} from './Person.types';

export const Person = (props :PersonProps) =>{
  return(
    <div>
      <h4> my name is {props.name.first} {props.name.last}</h4>
    </div>
  )
};
