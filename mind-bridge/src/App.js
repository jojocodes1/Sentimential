import { BrowserRouter, Route, Routes } from 'react-router-dom'
import InitialSignInPage from './components/InitialSignInPage'
import ProfSignIn from './components/ProfSignIn'
import ProfSignUp from './components/ProfSignUp'
import EditProfilePage from './components/EditProfilePage'
import ProfOverview from './components/ProfOverview'
import PatientSpotify from './components/PatientSpotify'
import PatientLandingPage from './components/PatientLandingPage'

import './App.css'
import { useEffect, useState } from 'react'
import ListPage from './components/ListPage'



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
          <Route path="/PatientLandingPage" element={<PatientLandingPage  />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App







/*import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import InitialSignInPage from './components/InitialSignInPage.js';
import logo from './logo.png';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Add logo here }
          <h1>Psionic <br></br>Synchronicity</h1>
          <h3>Select One</h3>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign In</Link>
              </li>
              </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<InitialSignInPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <h2>Welcome to My App</h2>
    <p>Click the link above to sign up!</p>
  </div>
);

export default App;
/*import logo from './logo.svg';
import './App.css';
import {InitialSignUpPage} from './pages/InitialSignUpPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
import React from "react";
import "./App.css";
import InitialSignInPage from "./components/InitialSignInPage";

async function App() {
  return (
    <div className="App-header">
      <InitialSignInPage />
    </div>
  );
}*/
