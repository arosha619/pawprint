import React,{useState} from 'react';
import "../Document/Document.css"


export default function Document() {
  const [Date,setDate]= useState();
  return (
    
        <div >
        <div className='head'>
            <img id='arrow' src={require("../../Images/Document/arrow.png")} />
            <h3>Document</h3>
            </div>
            <div className='fieldOne'>
            
            <label for="name">Pet Name</label>
            <input type="text" name="name" id="input1" />

            <label for="Documentname">Document Name</label>
            <input type="text" name="Docname" id="input1" />

            <label for="name">Date</label>
            <input type="date" onChange={e=>setDate(e.target.value)} id="date"/>

            <label for="name">Upload Documents</label>
            <area id='input4'/>
            {/* <img id='upload' src={require("../../Images/Document/upload.png")}/> */}
            </div>

            <div className='fieldTwo'>
              <button className='btn'>Submit</button>
              <button className='btn'>Next</button>
            </div>
            <div className='field3'>

            </div>
            
        </div>
    
  )
}
