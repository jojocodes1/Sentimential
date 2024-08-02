import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import firebaseApp from '../FirbaseConfig/firebase'

// Initialize Firebase Authentication
const auth = getAuth(firebaseApp)

const ProfSignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const navigate = useNavigate()

  const handleSubmit = async (ev) => {
    ev.preventDefault()

    // Clear previous errors
    setEmailError('')
    setPasswordError('')

    // Validate inputs
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      console.log('User signed in:', userCredential.user)
      navigate('/listPage')
    } catch (error) {
      // Handle errors
      const errorCode = error.code
      const errorMessage = error.message

      if (errorCode.includes('wrong-password')) {
        setPasswordError('Incorrect password')
      } else if (errorCode.includes('user-not-found')) {
        setEmailError('No user found with this email')
      } else {
        console.error('Error signing in:', errorCode, errorMessage)
      }
    }
  }

  return (
    <div className={'mainContainer'}>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <form onSubmit={handleSubmit}>
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
        <div className={'buttonContainer'}>
          <input
            className={'inputButton'}
            type="submit"
            value={'Login'}
            
          
          />
            
        </div>
      </form>
    </div>
  )
}

export default ProfSignIn
