import * as React from 'react';
type GreetProps = {
  name: string
  messageCount :number
  isloggiedIn:boolean
};

// export const Greet = (props: GreetProps) => {
//   return (
//     <div>
//       <h5>{
//       props.isloggiedIn ? `Hello ${props.name} welcome to stakblitz ${props.messageCount} times` : `Welcome guest `
//       }
//       </h5>
//     </div>
//   );
// };
  
//props destructuring 

export const Greet = ({name , messageCount,isloggiedIn }: GreetProps) => {
  return (
    <div>
      <h5>{
      isloggiedIn ? `Hello ${name} welcome to stakblitz ${messageCount} times` : `Welcome guest `
      }
      </h5>
    </div>
  );
};
