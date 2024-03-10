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

  const handleButtonClick = async (action) => {
    try {
      let response;
      
      switch (action) {
        case actions.ai:
          response = await performAIScan(text);
          setAIScanResult(response);
          break;
        case actions.url:
          response = await performURLScan(text);
          setAIScanResult(response);
          break;
        case actions.email:
          response = await performEmailScan(text);
          setemailScanResult(response);
          console.log(response);
          break;
        default:
          break;
      }

    } catch (e) {
      console.error('Error:', e.message);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">Authenticity Master</h1>
        <h2 className="slogan">Bringing You the Truth, Because Lies are Just too Mainstream!</h2>
        <p className="description">
          Whether you're verifying the source of emails, fact checking news articles, 
          double checking suspicious links or just curious about the origin piece of a text, we got you covered. 
          With a powerful AI algorithms and plagiarism detection technology, we sift through the digital haystack 
          to bring you the truth one scan at a time.
        </p>
      </div>
      <textarea
        className="big-text-box"
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text here..."
      />
      <div className="button-container">
        <button className="button" onClick={() => handleButtonClick(actions.ai)}>
          AI Scan
        </button>
        <button className="button" onClick={() => handleButtonClick(actions.url)}>
          URL Scan
        </button>
        <button className="button" onClick={() => handleButtonClick(actions.email)}>
          Email Scan
        </button>
      </div>
      {aiScanResult && <AIScanResult response={aiScanResult} />}
      {emailScanResult && <EmailScanResult response={emailScanResult} />}
    </div>
  );
}

export default App;
