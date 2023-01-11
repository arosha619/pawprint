import React from 'react';

import './App.css';
import Document from './Components/Document/Document';
import Preview from './Components/Preview/Preview';


function App() {
  return (
    <div className="App">
     <div className="column left">
       
      </div>

      <div className="column right">
      <div className='container'>
      <Document/>
      {/* <Preview/> */}
      </div>
      
      </div>
      
    </div>
  );
}

export default App;
