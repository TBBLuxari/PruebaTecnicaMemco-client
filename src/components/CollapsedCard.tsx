import React from 'react';

interface CardProps 
{
  text: string;
  onSelect: () => void;
}

interface User 
{
  id: string;
  username: string;
  password: string;
  email: string;
  adress: string;
  token:string;
  role: string;
}

const Card: React.FC<CardProps> = ({ text , onSelect }) => 
{
  return (
    <div className='Card-colapsed'>

        <div className='Name-user'>
            <img className='icon' src="/User.svg" alt="user" />
            <div>Username: {text}</div>
        </div>
    
        <div className='Buttons'>
            <button onClick={onSelect}>
                <img className='icon' src="/info.svg" alt="info" />
            </button>   

            <button>
                <img className='icon' src="/pencil.svg" alt="pencil" />
            </button>

            <button>
                <img className='icon' src="/trash.svg" alt="trash" />
            </button>
        </div>
       
    </div>
  );
};

export default Card;