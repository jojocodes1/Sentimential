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
import PatientSIgnIn from './components/PatientSIgnIn'
import PatientSignUp from './components/PatientSignUp'
import { LyricTextClassifier } from './LyricTextClassifier.ts'



const input = `I used to think maybe you loved me now baby I'm sure
And I just can't wait till the day when you knock on my door
Now everytime I go for the mailbox, gotta hold myself down
'Cause I just can't wait till you write me you're coming around
I'm walking on sunshine, wooah
I'm walking on sunshine, woooah
I'm walking on sunshine, woooah`


function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')


  LyricTextClassifier.I.Classify(input).then((result) => {
    console.log("Result anx = " + result);
  });


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
          <Route path="/patientSignIn" element={<PatientSIgnIn  setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path= "/PatientSignUp" element={ <PatientSignUp setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/patientLandingPage" element={<PatientLandingPage  />} />
          <Route path="/PatientEditProfilePage" element={<PatientEditProfilePage  />} />



        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



