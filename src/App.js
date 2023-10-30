import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const wordCount = text.split(/\s+/).filter(Boolean).length;

  return (
    <div>
      <center>
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          value={text}
          onChange={handleTextChange}
          rows={4}  // Adjust the number of rows
          cols={50} // Adjust the number of columns
        ></textarea>
        <p style={{ textAlign: 'center' }}>
          Word Count: {wordCount}
        </p>
      </center>
    </div>
  );
}

export default App;