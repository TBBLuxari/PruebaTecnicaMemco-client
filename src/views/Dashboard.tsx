import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';
import ActionButton from '../components/Action';
import ColapsedCard from '../components/CollapsedCard'
import ExpandedCard from '../components/ExpandedCard';


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

function Dashboard() 
{
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [searchId, setSearchId] = useState('');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const navigate = useNavigate();



  useEffect(() => 
  {
    const checkAuthentication = async () => 
    {
        const token = localStorage.getItem('authToken');
        console.log('Token:', token)
        try
        {
            const response = await axios.get('http://localhost:3010/auth/verify', 
            {
                headers: { authtoken:token}
            });

            console.log('Response:', response.data); // Agrega esta línea

            if (!response.data) { navigate('/'); }
        } 
        catch (error) { console.error(error); navigate('/');}

      setIsLoading(false);
    };

    checkAuthentication();
  }, [navigate]);

  if (isLoading) { return <div>Loading...</div>; }


    const Action1 =  async (event: React.FormEvent) => 
    { 
        event.preventDefault();
        const response = await axios.get('http://localhost:3010/users');
        setUsers(response.data);
        setSelectedUser(null);
    }
    const Action2 =    (event: React.FormEvent) => 
    { 
        event.preventDefault();
        console.log("Action2");
    }

    const SearchById = async (event: React.FormEvent) => 
    {
        event.preventDefault();

        try 
        {
            const response = await axios.get(`http://localhost:3010/users/${searchId}`);

            if (response.data) 
            {
                setUsers([response.data]);
            } 
            else 
            {
                alert('User not found');
            }
        } 
        catch (error) 
        {
            console.error(error);
        }
    }


    let cards;

    if (selectedUser) 
    {
        cards = <ExpandedCard user={selectedUser} />;
    } else 
    {
        cards = users.map(user => <ColapsedCard key={user.id} text={user.username} onSelect={() => setSelectedUser(user)} />);
    }

  return (
    <div className='Bg'>
        
        <div className='Side-Bar'> 

            <div className='Actions'>

                <ActionButton onClick = {Action1} iconSrc="/User.svg" altText="icon" buttonText="Users" />
                <ActionButton onClick = {Action2} iconSrc="/AddUser.svg" altText="icon" buttonText="Add-Users" />
              
            </div>

            <div className='Profile'>
                    <img className='icon' src="/profile.svg" alt="icon" />
                    <span className='Text-profile'>Profile</span>
            </div>
            
        </div>
        
        <div className='Board'>

            <div className='Inbox'>

                <form onSubmit={SearchById} className="search-form">

                    <input type="text" className="Search" value={searchId} onChange={(e) => setSearchId(e.target.value)} placeholder="Id" />

                    
                    <button type="submit" className="search-button">
                        <img  className="icon big" src="/lupa.svg" alt="search icon" />
                    </button>

                </form>

                <div className='Cards-container'>
                    {cards}
                </div>

            </div>

        </div>

    </div>
  );
}

export default Dashboard;