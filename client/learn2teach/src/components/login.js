import React from 'react';

const Login = ({ onSubmit }) =>{
return(
    <div>
        <h3 data-testid='login' className='h3Login'>Login Form</h3>
        <form onSubmit={
            event =>{
                event.preventDefault()
                onSubmit({
                    username:'chuck',
                    password:'norris'
                })
            }
        }>
        <label htmlFor="username">username</label>
        <input id="username" />
        <label htmlFor="password">password</label>
        <input type="password" id="password" />
        <button data-testid="mybutton">Submit</button>
        </form>
    </div>
)
}

export default Login;