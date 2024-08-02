import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'; // Ensure the path to your logo is correcttt

const InitialSignInPage = (props) => {
  const [role, setRole] = useState('Patient'); // Default role
  const navigate = useNavigate();

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  const handleSignIn = () => {
    navigate(`/${role}SignIn`);
  };

  const handleSignUp = () => {
    navigate(`/${role}SignUp`);
  };

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <img src={logo} className="App-logo" alt="logo" />
        <div class = "titlofpsionic">
      Psionic <br />Synchronicity</div>
      </div>

     <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
    <link 
    href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap" 
    rel="stylesheet"
    />

    

      <div className={'roleSelector'}>
        <button
          className={`roleButton ${role === 'Patient' ? 'active' : ''}`}
          onClick={() => handleRoleChange('Patient')}
        >
          Patient
        </button>
        <button
          className={`roleButton ${role === 'prof' ? 'active' : ''}`}
          onClick={() => handleRoleChange('prof')}
        >
          Professional
        </button>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={handleSignIn}
          value={`${role.charAt(0).toUpperCase() + role.slice(1)} Log In`}
        />
        <input
          className={'inputButton'}
          type="button"
          onClick={handleSignUp}
          value={`${role.charAt(0).toUpperCase() + role.slice(1)} Sign Up`}
        />
      </div>
    </div>
  );
};

export default InitialSignInPage;
