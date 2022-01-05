import React from 'react'
import {useEffect, useState} from 'react'
import Header from './Header'
import Nav from './Nav'
import ItemContainer from './ItemContainer'
import Login from './Login'

// import './App.css';

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState(" ")
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(setItems)
  },[])


  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  function onLogout() {
    setUser(null);
  }

  const itemToDisplay = items.filter(item => {
    return item.name.toLowerCase().includes(search)
  })

  if (user && user.name) {
    return (
    <div className="App">
      <h2>Welcome, {user.name}!</h2>;
       <Header />
       <Nav search={search} setSearch={setSearch} onLogout={onLogout}/> 
       <ItemContainer items={itemToDisplay}/>
    </div>
    )
  } else {
    return <Login onLogin={setUser} />;
  }
    


  

  //  return (
    // <div className="App">
 
    //   <Header />
    //   <Nav search={search} setSearch={setSearch}/> 
    //   <ItemContainer items={itemToDisplay}/>
    // </div>
  //  );
}

export default App;
