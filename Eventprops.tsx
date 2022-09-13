//on click event as a props

import * as React from 'react';

type ButtonProp ={
  handleClick : (event : React.MouseEvent<HTMLButtonElement> , id:number) => void
}
export const Button = (props :ButtonProp) =>{
  return(
    <div>
      <button onClick={(event) => {props.handleClick(event, 1)}}>Click</button>

    </div>
  )
}