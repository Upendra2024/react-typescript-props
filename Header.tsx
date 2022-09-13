import * as React from 'react';
type HeaderProps = {
  children :string
}
export const Header = (props:HeaderProps) =>{
  return(
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}