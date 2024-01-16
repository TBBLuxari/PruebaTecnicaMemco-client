import React, { useState } from 'react';
import axios from 'axios';
import {Link , useNavigate} from 'react-router-dom';


import './Login.css';

function Forgot() 
{
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => 
  {
    event.preventDefault();
    
    try 
    {
        const response = await axios.post('http://localhost:3010/auth/reset-password', 
        {
            email
        });
        
        navigate('/');
      
    }
    catch (error) 
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

                    <label className='label'>Email</label>
                    <input className='inputs' type="text" value={email} onChange={e =>setEmail(e.target.value)} placeholder='email' required/>
                                   
                    <button className='button' type="submit">Reset</button>

                </form>

                <div className='forgot'>Please check your email to continue </div>
                <div className='Need '>Need an acount ? <Link to="/signup">SING UP</Link></div>

            </div>

        </div>

    </div>
  );
}

export default Forgot;