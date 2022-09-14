import * as React from 'react';

type StyleCompProps ={
  style : React.CSSProperties
}

export const StyleComp = (props:StyleCompProps) =>{
  return(
    <div>
      <h3 style={props.style}>Hello Welcome to react Stalk blitz</h3>
    </div>
  )
}