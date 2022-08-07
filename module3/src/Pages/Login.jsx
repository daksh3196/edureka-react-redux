import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Layout from '../Layout';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleEmailChange = (e) =>{
       setEmail(e.target.value);
    }

    const handlePassChange = (e) => {
       setPassword(e.target.value);
    }

    const btnClick = async (e) => {
        e.preventDefault();
        const res = await fetch("https://webmaster-fake-api.herokuapp.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        console.log(await res.json());

        if(res.status === 200){

        } else{
            setError(res.json().message)
        }
    }
    return (
        <Layout>
            <div className='form-div'>
                <h3> Login </h3>
                <form>
                    {error ? error : <></>}
                    <input type="text" name="email" placeholder='Enter your email address' onChange={handleEmailChange} />
                    <input type="password" name="password" placeholder='Enter your associated password' onChange={handlePassChange} />
                    <button onClick={btnClick}> Login</button>
                </form>
            </div>
        </Layout>
    )
}

export default Login;