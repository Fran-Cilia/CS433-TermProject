import { performAIScan } from './handlers/aiHandler';
import { performURLScan } from './handlers/urlHandler';
import { AIScanResult } from './components/aiResults/aiScanResultsComponent';
import { LoadingSpinner } from './components/loadingSpinner/loadingSpinner'
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
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleButtonClick = async (action) => {
    try {
      let response;
      setIsLoading(true);
      
      switch (action) {
        case actions.ai:
          response = await performAIScan(text);
          setAIScanResult(response);
          break;
        case actions.url:
          response = await performURLScan(text);
          setAIScanResult(response);
          break;
        default:
          break;
      }

    } catch (e) {
      console.error('Error:', e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      {isLoading && <LoadingSpinner />}
      <div className="navbar">
        <nav>
          <h1 className="title">Authenticity Master</h1>
          <ul>
            <li><a href="App.js" className="nav-link">Home</a></li>
          </ul>
        </nav>
      </div>

      <div className="header">
        <h2 className="slogan">Bringing You the Truth, Because Lies are Just too Mainstream!</h2>
        <p className="description">
          Whether you're verifying the source of emails 
          double checking suspicious links or just curious about the origin of a piece of text, we got you covered. 
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
        <button className="button" onClick={() => handleButtonClick(actions.ai)} disabled={isLoading}>
          AI Scan
        </button>
        <button className="button" onClick={() => handleButtonClick(actions.url)} disabled={isLoading}>
          URL Scan
        </button>
      </div>
      {aiScanResult && <AIScanResult response={aiScanResult} />}
    </div>
  );
}

export default App;
