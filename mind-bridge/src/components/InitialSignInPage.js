import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../logo.png'; // Ensure the path to your logo is correct

const InitialSignInPage = (props) => {
  const [role, setRole] = useState(''); // No default role
  const [showButtons, setShowButtons] = useState(false); // Initially hide the buttons
  const navigate = useNavigate();

  const handleRoleChange = (newRole, event) => {
    setRole(newRole);
    setShowButtons(true); // Show buttons when a role is selected
    dimOtherButtons(event.target);
  };

  const handleSignIn = () => {
    navigate(`/${role}SignIn`);
  };

  const handleSignUp = () => {
    navigate(`/${role}SignUp`);
  };

  const dimOtherButtons = (clickedButton) => {
    const buttons = document.querySelectorAll('.roleButton');
    buttons.forEach(button => {
      if (button !== clickedButton) {
        button.classList.add('dimmed');
      } else {
        button.classList.remove('dimmed');
      }
    });
  };

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <></>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="titlofpsionic">
          Psionic <br />Synchronicity
        </div>
      </div>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap"
        rel="stylesheet"
      />

      <div className={'roleSelector'}>
        <button
          className={`roleButton ${role === 'Patient' ? '' : ''}`}
          onClick={(event) => handleRoleChange('Patient', event)}
        >
          Patient
        </button>
        <button
          className={`roleButton ${role === 'prof' ? '' : ''}`}
          onClick={(event) => handleRoleChange('prof', event)}
        >
          Professional
        </button>
      </div>
      {showButtons && (
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
      )}
    </div>
  );
};

export default InitialSignInPage;
