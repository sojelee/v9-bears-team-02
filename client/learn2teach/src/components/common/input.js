import React from 'react';
const TextInput =( {onChange, placeholder,type,className })=>{
    return(
        <input data-testid="myinput" className={className} type={type} onChange={onChange} placeholder={placeholder} />
    )
}
export default TextInput;