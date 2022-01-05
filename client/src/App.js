import React from 'react'
import {useEffect, useState} from 'react'
import Header from './Header'
import Nav from './Nav'
import WishList from './WishList'
import HomePage from './HomePage'
import { Route, Switch } from "react-router-dom";
import ItemContainer from './ItemContainer'
import Login from './Login'
import SignupForm from './SignupForm'

// import './App.css';

function App() {

  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
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

  const handleDelete = (id) => {
    // console.log(id)
    fetch(`/items/${id}`, {
        method: 'DELETE',
        headers:{'Content-type':'application/json'}
    })
    .then(res => res.json())
    .then(() => setItems(items.filter(item => item.id !== id)))
}

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search))

  if (user && user.name) {
    return (
    <div className="App">
       <Header user={user}/>
       <Nav search={search} setSearch={setSearch} onLogout={onLogout}/> 
       <Switch>
         <Route path='/wishlist'>
          <WishList/>
         </Route>
         <Route path="/itemcontainer">
         <ItemContainer filteredItems={filteredItems} items={items} setItems={setItems} handleDelete={handleDelete}/>
         </Route>
         <Route path="/">
          <HomePage />
         </Route>
        
       </Switch>
       
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
