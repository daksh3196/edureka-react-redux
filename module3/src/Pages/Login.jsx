import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, Redirect, useHistory } from 'react-router-dom';
import Layout from '../Layout';
import Cookies from 'js-cookie';
import './Login.css'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('testpass');
    const [error, setError] = useState(null);

    const isAuthenticated = !!Cookies.get("token");
    if (isAuthenticated) {
      history.push("/courses");
    }

    const handleEmailChange = (e) =>{
       setEmail(e.target.value);
    }

    const handlePassChange = (e) => {
       setPassword(e.target.value);
    }

    const btnClick = async (e) => {
        e.preventDefault();
        const res = await fetch("http://localhost:6700/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            }),
        })
        const responseData = await res.json();
        console.log(responseData);

        if(res.status === 200){
            Cookies.set("token", responseData.accessToken);
            // Cookies.set("user", JSON.parse(responseData))
            history.push('/courses')
        } else{
            setError(res.json().message)
        }
    }
    return (
        <Layout>
            <div className='form-div'>
                <h3> Login </h3>
                <h6> Login using test@gmail.com. passowrd: testpass</h6>
                <form>
                    {error ? error : <></>}
                    <input type="text" name="email" value={email} placeholder='Enter your email address' onChange={handleEmailChange} />
                    <input type="password" name="password" value={password} placeholder='Enter your associated password' onChange={handlePassChange} />
                    <button onClick={btnClick}> Login</button>
                </form>
            </div>
        </Layout>
    )
}

export default Login;