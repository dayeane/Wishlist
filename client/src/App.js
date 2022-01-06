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
  const [lists, setLists] = useState([])

  // const userLists = user

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(setItems)

    fetch('/lists')
    .then(res => res.json())
    .then(setLists)
    // .then(() => setLists(lists.filter(list => list.user.id === user.id)))
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

  const handleItemDelete = (id) => {
    // console.log(id)
    fetch(`/items/${id}`, {
        method: 'DELETE',
        headers:{'Content-type':'application/json'}
    })
    .then(res => res.json())
    .then(() => setItems(items.filter(item => item.id !== id)))
}

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
  const listsDisplay = user ? lists.filter(list => list.user.id === user.id) : lists

  if (user && user.name) {
    // console.log(user.id)
    return (
    <div className="App">

       <Header user={user} onLogout={onLogout}/>
       <Nav search={search} setSearch={setSearch} onLogout={onLogout}/> 
       <Switch>
         <Route path='/wishlist'>
          <WishList userLists={listsDisplay} />
         </Route>
         <Route path="/itemcontainer">
         <ItemContainer filteredItems={filteredItems} items={items} setItems={setItems} handleDelete={handleItemDelete}/>
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
