import React, { useState } from 'react';
import First from './redux/FIrst';
import { useSelector } from "react-redux";
import "./index.css";


function App() {

  const currenttheme = useSelector((state: any) => state.themedata);

  return (

    <div  >
      {currenttheme === "dark" ? <div className='black'><First /></div> :
        <div className='wheat'>
          <First />
        </div>}
    </div>
  );
}

export default App;