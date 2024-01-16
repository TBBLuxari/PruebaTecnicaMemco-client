import React, { useState } from 'react';
import axios from 'axios';
import {Link , useNavigate} from 'react-router-dom';


import './Login.css';

function Login() 
{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => 
  {
    event.preventDefault();
    
    try 
    {
        const response = await axios.post('http://localhost:3010/auth/login', 
        {
          username,
          password
        });
             
        console.log("Token ",response.data);
        localStorage.setItem('authToken', response.data);
        //debugger;
        navigate('/dashboard');
      
    }catch (error) 
    {
        console.error(error);
    }

  };

  return (
    <div className='Bg'>
        
        <div className='left'>
            <div className='left-white' >
                <img src="/LogoMemco.png" alt="Brand logo Memco" />
            </div>
        </div>

        <div className='right'>

            <div className='title'>Welcome</div>

            <div className="form-container">

                <form className="form" onSubmit={handleSubmit}>

                    <label className='label'>Username</label>
                    <input className='inputs' type="text" value={username} onChange={e =>setUsername(e.target.value)} placeholder='username'/>
                
                    <label className='label'>Password</label>
                    <input className='inputs' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password' />
                   
                    <button className='button' type="submit">Login</button>

                </form>

                <Link className='forgot' to={"/forgot"} >Forgot Password?</Link>
                <div className='Need '>Need an acount ? <Link to="/signup">SING UP</Link></div>

            </div>

        </div>

    </div>
  );
}

export default Login;