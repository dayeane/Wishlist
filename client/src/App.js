import React from 'react'
import {useEffect, useState} from 'react'
import Header from './Header'
import Nav from './Nav'
import ItemContainer from './ItemContainer'

// import './App.css';

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState(" ")
  

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(setItems)
  },[])

  const itemToDisplay = items.filter(item => {
    return item.name.toLowerCase().includes(search)
  })

  return (
    <div className="App">
 
    <Header />
    <Nav search={search} setSearch={setSearch}/> 
    <ItemContainer items={itemToDisplay}/>
    </div>
  );
}

export default App;
