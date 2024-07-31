
import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../logo.png';

const InitialSignInPage = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    
    navigate('/profSignIn');  
  
  }
  const onSignUpButtonClick = () => {
    
    navigate('/profSignUp');
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
      <img src={logo} className="App-logo" alt="logo" /> 
        <div>Psionic <br></br>Synchronicity</div>
      </div>
      <div className={'buttonContainer'}>
        <input
          className={'inputButton'}
          type="button"
          onClick={onButtonClick}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
         <input
          className={'inputButton'}
          type="button"
          onClick={onSignUpButtonClick}
          value={'Sign up'}
        />
        {loggedIn ? <div>Your email address is  {email}</div> : <div />}
      </div>
    </div>
  )
}

export default InitialSignInPage