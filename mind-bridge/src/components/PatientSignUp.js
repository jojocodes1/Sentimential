import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../FirbaseConfig/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'

const PatientSignUp = () => {
  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [fullNameError, setFullNameError] = useState('')
 
  const navigate = useNavigate()

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    setEmailError('')
    setPasswordError('')
    setFullNameError('')
    
    if (fullName.trim() === '') {
      setFullNameError('Please enter your full name')
      return
    }

    if (email.trim() === '') {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if (password.trim() === '') {
      setPasswordError('Please enter a password')
      return
    }

    if (password.length < 7) {
      setPasswordError('The password must be 8 characters or longer')
      return
    }


    try {
      await createUserWithEmailAndPassword(auth, email, password)
      console.log('User created')
      navigate('/PatientEditProfilePage')
    } catch (err) {
      console.error('Error creating user:', err)
      // You can set specific error messages based on error codes here
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Sign Up</div>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
        <div className={'inputContainer'}>
          <input
            value={fullName}
            placeholder="Enter your full name here"
            onChange={(ev) => setFullName(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{fullNameError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={email}
            placeholder="Enter your email here"
            onChange={(ev) => setEmail(ev.target.value)}
            className={'inputBox'}
          />
          <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={'inputContainer'}>
          <input
            value={password}
            placeholder="Enter your password here"
            onChange={(ev) => setPassword(ev.target.value)}
            className={'inputBox'}
            type="password"
          />
          <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        
        <br />
        <div className={'buttonContainer'}>
          <input
            className={'inputButton'}
            type="submit"
            value={'Sign Up'}
          />
        </div>
      </form>
    </div>
  )
}

export default PatientSignUp
