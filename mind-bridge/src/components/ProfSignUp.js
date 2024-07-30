import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfSignUp = (props) => {

  const [email, setEmail] = useState('')
  const [fullName, setFullName] = useState('')
  const [password, setPassword] = useState('')
  const [medicalLicense, setMedicalLicense] = useState('') 
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [fullNameError, setFullNameError] = useState('') 
  const [medicalLicenseError, setMedicalLicenseError] = useState('')

  const navigate = useNavigate()

  const onButtonClick = () => {

    setEmailError('')
    setPasswordError('')
    setFullNameError('')
    setMedicalLicenseError('')


        if ('' === fullName) {
        setFullNameError('Please enter your full name')
        return
      }
      
        // Check if the user has entered both fields correctly
        if ('' === email) {
          setEmailError('Please enter your email')
          return
        }
      
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
          setEmailError('Please enter a valid email')
          return
        }
      
        if ('' === password) {
          setPasswordError('Please enter a password ')
          return
        }
      
        if (password.length < 7) {
          setPasswordError('The password must be 8 characters or longer')
          return
        }
        if ('' === medicalLicense) {
            setMedicalLicenseError('Please enter your medical license number')
            return
          }
      
        // Authentication calls will be made here...
        navigate('/editProfPage');

      
}

  return (
    <div className={'mainContainer'}>
    <div className={'titleContainer'}>
      <div>Sign Up</div>
    </div>
    <br />
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
    <div className={'inputContainer'}>
      <input
        value={medicalLicense}
        placeholder="Enter your medical license number here"
        onChange={(ev) => setMedicalLicense(ev.target.value)}
        className={'inputBox'}
      />
      <label className="errorLabel">{medicalLicenseError}</label>
    </div>
    <br />
    <div className={'inputContainer'}>
      <input
        className={'inputButton'}
        type="button"
        onClick={onButtonClick}
        value={'Sign Up'}
      />
    </div>
  </div>
  )
}

export default ProfSignUp