import React,{useState} from 'react';
import "../Document/Document.css"

export default function Document() {
  const [Date,setDate]= useState();
  return (
    <>
        <div className='container'>
            <div className='fieldOne'>
            <h3>Document</h3>

            <label for="name">Pet Name</label>
            <input type="text" name="name" id="input1" />

            <label for="Documentname">Document Name</label>
            <input type="text" name="Docname" id="input1" />

            <label for="name">Date</label>
            <input type="date" onChange={e=>setDate(e.target.value)} id="date"/>

            <label for="name">Upload Documents</label>
            <input id='input4' ></input>
            </div>
            <div className='fieldTwo'>
              <button className='btn'>Submit</button>
              <button className='btn'>Next</button>
            </div>
        </div>
    </>
  )
}
