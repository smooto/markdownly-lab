import React from 'react';
import Document from '../../containers/Document';
import { Router } from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <h1>Markdown Editor</h1>
      <Document />
    </Router>
  
  );
}
