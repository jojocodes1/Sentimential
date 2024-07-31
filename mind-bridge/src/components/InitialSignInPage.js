import React from 'react'
import { useNavigate } from 'react-router-dom'
import '//firekey.js';

const InitialSignInPage = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    
    navigate('/profSignIn');  
  
  }
  const onSignUpButtonClick = () => {
    
    navigate('/ProfSignUp')
  }

  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>Welcome!</div>
      </div>
      <div>This is the home page.</div>
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
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}

export default InitialSignInPage