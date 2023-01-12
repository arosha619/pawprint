import React from 'react';
import Title_Pet from './Components/Preview/Title&Pet';
import './App.css';
import Document from './Components/Document/Document';



function App() {
  return (
    <div className="App">
     <div className="column left">
       
      </div>

      <div className="column right">
      <div className='container'>
      <Document/>
      {/* <Title_Pet/> */}
      </div>
     
      </div>
      
    </div>
  );
}

export default App;
