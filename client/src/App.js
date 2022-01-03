import React from 'react'
import {useEffect, useState} from 'react'
import Header from './Header'
import Nav from './Nav'
import ItemContainer from './ItemContainer'

// import './App.css';

function App() {

  const [items, setItems] = useState([])
  

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(setItems)
  },[])



  return (
    <div className="App">
 
    <Header />
    <ItemContainer />
    </div>
  );
}

export default App;
