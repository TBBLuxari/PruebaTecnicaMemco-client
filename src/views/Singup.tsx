import React, { useState } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './Login.css';

function Signup() 
{
    const [username ,SetUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [adress ,SetAdress] = useState('');
    const role ="user";

    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => 
    {
        event.preventDefault();
        
        try 
        {
            const response = await axios.post('http://localhost:3010/users', 
            {
                username,
                email,
                password,
                adress,
                role 
            });
    
            console.log(response.data);
            alert("Success");
            navigate('/');
        
        }catch (error) 
        {
            console.error(error);
            alert(`An error occurred while creating the account. Please contact an administrator erro: ${error} `);
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

            <div className='title'>Sign up</div>

            <div className="form-container">

                <form className="form" onSubmit={handleSubmit}>

                    <label className='label'>Username</label>
                    <input className='inputs' type="text" value={username} onChange={e => SetUsername(e.target.value)} placeholder='username *' required/>

                    <label className='label'>Email</label>
                    <input className='inputs' type="text" value={email} onChange={e => setEmail(e.target.value)} placeholder='email *' required/>
                
                    <label className='label'>Password</label>
                    <input className='inputs' type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder='password *' required/>

                    <label className='label'>Adress</label>
                    <input className='inputs' type="text" value={adress} onChange={e => SetAdress(e.target.value)} placeholder='adress ' />
                   
                    <button className='button' type="submit">Sing up</button>

                </form>

                <Link className='forgot' to={"/"}>Return to login</Link>

            </div>  

        </div>

    </div>
  );
}

export default Signup;