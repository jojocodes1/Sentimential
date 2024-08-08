import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InitialSignInPage from './components/InitialSignInPage'
import ProfSignIn from './components/ProfSignIn'
import ProfSignUp from './components/ProfSignUp'
import EditProfilePage from './components/EditProfilePage'
import PatientEditProfilePage from './components/PatientEditProfilePage'
import ProfOverview from './components/ProfOverview'
import PatientSpotify from './components/PatientSpotify'
import PatientLandingPage from './components/PatientLandingPage'
import './App.css'
import { useEffect, useState } from 'react'
import ListPage from './components/ListPage'
import PatientSignIn from './components/PatientSignIn.js'
import PatientSignUp from './components/PatientSignUp'
import ResponsibleAI from './components/ResponsibleAI.js'
import TermsandConditions from './components/TermsandConditions.js'

import Feedback from './components/Feedback.js'

import { LyricTextClassifier } from './LyricTextClassifier.ts'


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/" element={<InitialSignInPage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route path="/profSignIn" element={<ProfSignIn setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/editProfilePage" element={<EditProfilePage  />} />
          <Route path="/profSignUp" element={<ProfSignUp setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/PatientSpotify" element={<PatientSpotify  />} />
          <Route path="/profOverview" element={<ProfOverview  />} />
          <Route path="/listPage" element={<ListPage  />} />
          <Route path="/PatientSIgnIn" element={<PatientSignIn  setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path= "/PatientSignUp" element={ <PatientSignUp setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/patientLandingPage" element={<PatientLandingPage  />} />
          <Route path="/PatientEditProfilePage" element={<PatientEditProfilePage  />} />
          <Route path="/ResponsibleAI" element={<ResponsibleAI  />} />
          <Route path="/Feedback" element={<Feedback  />} />
          <Route path="/TermsandConditions" element={<TermsandConditions  />} />




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



