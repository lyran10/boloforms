import React,{useEffect,useState} from 'react';
import './App.css';

import { Index } from './pages';

function App() {
  const [show,setShow] = useState(false)

useEffect(() => {
setTimeout(() => {setShow(true)},1000)
},[])

  return (
    <div className="">
      {show ? 
        <Index/>
        :null}
    </div>
  );
}

export default App;
