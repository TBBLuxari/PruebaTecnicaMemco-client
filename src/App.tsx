import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Signup from './views/Singup'; 
import Dashboard from './views/Dashboard';
import Forgot from './views/Forgot';
import ResetPassword from './views/ResetPassword';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> 
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/forgot' element={<Forgot/>}/>
        <Route path="/auth/reset/:token" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;