import React, { useState } from 'react';
import {Link , useNavigate ,useParams} from 'react-router-dom';
import axios from 'axios';

function ResetPassword() 
{ 
    const { token } = useParams();
    const navigate = useNavigate();

    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');

    const handleSubmit = async (event: React.FormEvent) => 
    {
        event.preventDefault();
    
        try 
        {
            const response = await axios.post('http://localhost:3010/auth/verify2', 
            {
                token
            });

            if (response.status !== 200) 
            {
                alert('Ocurrió un error al verificar el token.');
                return;
            }

            if(response)
            {

                if (password1 !== password2) 
                {
                    alert('Las contraseñas no coinciden.');
                    return;
                }

                const response2 = await axios.post(`http://localhost:3010/auth/reset/${token}`, 
                {
                    password: password1
                });
                navigate('/');
            }
        
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

                    <label className='label'>New password</label>
                    <input className='inputs' type="password" value={password1} onChange={e =>setPassword1(e.target.value)} placeholder='new password' required/>
                
                    <label className='label'>Comfirm new password</label>
                    <input className='inputs' type="password" value={password2} onChange={e => setPassword2(e.target.value)} placeholder='comfirm new password' required/>
                   
                    <button className='button' type="submit">Reset</button>

                </form>

                <Link className='forgot' to={"/"}>Return to login</Link>
                <div className='Need '>Need an acount ? <Link to="/signup">SING UP</Link></div>

            </div>

        </div>

    </div>
  );
}

export default ResetPassword;