import { Children } from "react";

interface Props {
    children: string;
    color?: string;   // ? = optional property, since we set the default in the deconstructed props below
    //color?: 'primary' | 'secondary' | 'danger'   // defining values separated by the | (union) operator instead of 'string' limits what values that property can be set to
    onClick: () => void;

}

// Here we are deconstructing props in the arrow function
const TestButton = ({children, onClick, color = 'primary'}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default TestButton