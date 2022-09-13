import * as React from 'react'

type StatusProps ={
  status : 'loading' | 'success' | 'error';
}
export const Status = (props:StatusProps) =>{
  let message;
  if(props.status == 'loading'){
    message = '...loading'
  }
  else if(props.status == 'success'){
    message ='status is successeded.'
  }
  else if(props.status == 'error'){
    message = 'status is failed'
  }
  return(
    <div>
    status - {message}
    </div>
  )
}