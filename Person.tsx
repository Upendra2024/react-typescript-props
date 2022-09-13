import  *  as React  from 'react';

type PersonProps ={
  name :{
    first :string
    last :string
  }
}
export const Person = (props :PersonProps) =>{
  return(
    <div>
      <h4> my name is {props.name.first} {props.name.last}</h4>
    </div>
  )
};
