import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const btnClick = ( ) => {
        useHistory.push("/home")
    }
    return (
        <>
            <div className='form-div'>
                <h3> Login </h3>
                <form>
                    <input type="text" name="email" placeholder='Enter your email address' />
                    <input type="password" name="password" placeholder='Enter your associated password' />
                    {/* <button onClick={btnClick}> Login</button> */}
                </form>
                    <button onClick={btnClick}> Login</button>
            </div>
        </>
    )
}

export default Login;