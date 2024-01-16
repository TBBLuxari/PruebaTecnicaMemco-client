import React from 'react';


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

interface ExpandedCardProps 
{
    user: User; 
}



const ExpandedCard: React.FC<ExpandedCardProps> = ({ user }) => 
{
    return (
      <div className='Card-expanded'>

        <div className='User-profile'>
          <img className='icon big' src="/User.svg" alt="user" />
        </div>
  
        <div className='User-info'>
          <div>Username: {user.username}</div>
          <div>Email: {user.email}</div>
          <div className="password">Password: {user.password}</div>
          <div>Address: {user.adress}</div>
          <div>Role: {user.role}</div>
        </div>
  
        <div className='Buttons-expanded'>
            <button>
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

export default ExpandedCard;
