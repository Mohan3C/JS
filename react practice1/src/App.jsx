// import { useState } from 'react'
import './index.css'

function Change({name}) {
  return (
    <div>
      <h3 className="text-green-500">{name || "Guest"}</h3>
    </div>
  );
};

function App() {

  return (
    <>
      <h2 className='text-red-500'>hello</h2>
      <Change name="Chaman" />
      
    </>
  );
};

export default App
