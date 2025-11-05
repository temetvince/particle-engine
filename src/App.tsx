import React, { useEffect } from 'react';
import Particles from './particles';

const App = () => {
  useEffect(() => {
    // Add global styles to ensure proper layout
    const style = document.createElement('style');
    style.innerHTML = `
         body, html {
            margin: 0;
            padding: 0;
            overflow: hidden;
            width: 100%;
            height: 100%;
         }
      `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className='app'>
      <Particles />
    </div>
  );
};

export default App;
