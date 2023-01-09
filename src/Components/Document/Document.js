import React from 'react';
import "../Document/Document.css"

export default function Document() {
  return (
    <>
        <div className='container'>
            <div className='fieldOne'>
            <h3>Document</h3>

            <label for="name">Pet Name</label>
            <input type="text" name="name" id="name" />

            <label for="Documentname">Document Name</label>
            <input type="text" name="Docname" id="DocName" />

            <label for="name">Date</label>
            <input></input>

            <label for="name">Upload Documents</label>
            <input></input>
            </div>
            <div className='fieldTwo'>
              <button>Submit</button>
              <button>Next</button>
            </div>
        </div>
    </>
  )
}
