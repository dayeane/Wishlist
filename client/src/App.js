import React from 'react'
import {useEffect, useState} from 'react'
import Header from './Header'
import Nav from './Nav'
import ItemContainer from './ItemContainer'
import Login from './Login'
import SignupForm from './SignupForm'

// import './App.css';

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [user, setUser] = useState(null);

  const filteredItems = items.filter(item => {
    return item.name.toLowerCase().includes(search)
  })


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

 

  if (user && user.name) {
    return (
    <div className="App">
       <Header user={user} onLogout={onLogout}/>
       <Nav search={search} setSearch={setSearch} /> 
       <ItemContainer filteredItems={filteredItems} items={items} setItems={setItems}/>
    </div>
    )
  } else {
    return (
    <div>
      <Login onLogin={setUser} />
      <SignupForm setUser={setUser}/>
    </div>
    )
  }
    


  

  //  return (
    // <div className="App">
 
    //   <Header />
    //   <Nav search={search} setSearch={setSearch}/> 
    //   <ItemContainer items={filteredItems}/>
    // </div>
  //  );
}

export default App;
