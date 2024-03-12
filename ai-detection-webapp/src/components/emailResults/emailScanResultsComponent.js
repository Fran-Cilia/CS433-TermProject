import React from 'react';
import './emailScanResultsComponent.css';

export const EmailScanResult = (response) => {
    const summary = response.response.sumary;

  return (
    <div className="email-scan-result">
      <h2>Email Scan Results</h2>
      <p>AI Score: {summary}</p>
    </div>
  );
};