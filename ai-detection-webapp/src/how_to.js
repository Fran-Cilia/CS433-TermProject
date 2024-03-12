import { performAIScan } from './handlers/aiHandler';
import { performURLScan } from './handlers/urlHandler';
import { AIScanResult } from './components/aiResults/aiScanResultsComponent';
import { performEmailScan } from './handlers/emailHandler';
import { EmailScanResult } from './components/emailResults/emailScanResultsComponent';
import React, { useState } from 'react';
import './App.css';

function App() {
  const actions = {
    ai: 'ai',
    plagiarism: 'plagiarism',
    ai_plagiarism: 'ai_plagiarism',
    url: 'url',
    email: 'email',
  }

  const [text, setText] = useState('');
  const [aiScanResult, setAIScanResult] = useState(null);
  const [emailScanResult, setemailScanResult] = useState(null);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="App">
      <div className="navbar">
        <nav>
          <h1 className="title">Authenticity Master</h1>
          <ul>
            <li><a href="App.js">Home</a></li>
            <li><a href="how_to.js">How To Use</a></li>
            <li><a href="contact.js">Contact</a></li>
          </ul>
        </nav>
      </div>

      <div className="header">
        <h2 className="slogan">How To Use</h2>
        <p className="description">
          Whether you're verifying the source of emails, fact checking news articles, 
          double checking suspicious links or just curious about the origin piece of a text, we got you covered. 
          With a powerful AI algorithms and plagiarism detection technology, we sift through the digital haystack 
          to bring you the truth one scan at a time.
        </p>
      </div>

 
    </div>
  );
}

export default App;
