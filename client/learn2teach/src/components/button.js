import React from 'react';
const Button =({ style,onClick })=> {
    return(
      <button data-testid="mybutton" onClick={onClick} className={style}>Button</button>
    )
}
export default Button;