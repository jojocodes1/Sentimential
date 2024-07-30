import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import InitialSignInPage from './components/InitialSignInPage.js';
import logo from './logo.svg';
import { LyricTextClassifier } from './LyricTextClassifier.ts';

function App() {
  console.log(LyricTextClassifier.I.Classify("I'm so Happy!"))
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/* Add logo here */}
          <h1>Welcome to My App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
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
