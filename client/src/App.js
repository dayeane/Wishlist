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


 
function App() {

//STATE VARIABLES
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")
  const [user, setUser] = useState(null);
  const [lists, setLists] = useState([])


//INITIAL FETCHES ON PAGE LOAD AND USR VERIFICATION 

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/items')
    .then(res => res.json())
    .then(setItems)

    fetch('/lists')
    .then(res => res.json())
    .then(setLists)
  },[])

//USER LOGOUT HANDLER
  function onLogout() {
    setUser(null);
  }

//CRUD FETCHES

  //DELETE LIST FROM WISHLIST PAGE FETCH
  // const handleListDelete = (id) => {
  //   fetch(`/lists/${id}`, {
  //       method: "DELETE",
  //       headers: {'Content-type':'application/json'}
  //   })
  //   .then(res => res.json())
  //   .then(() => setLists(lists.filter(list => list.id !== id)))
  // }

  //DELETE ITEM FROM ITEM LIST FETCH
  const handleItemDelete = (id) => {
    fetch(`/items/${id}`, {
        method: 'DELETE',
        headers:{'Content-type':'application/json'}
    })
    .then(res => res.json())
    .then(() => setItems(items.filter(item => item.id !== id)))
  }

  //UPDATE ITEM FETCH
  function updateItem(formData, id){
    fetch(`/items/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(updatedItem => { 
      setItems(items.map(item => item.id === updatedItem.id ? updatedItem : item))
    })
  }

  //CREATE NEW WISHLIST
  function postList(newList) {
    fetch('/lists', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
    },
        body: JSON.stringify(newList)
    })
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(newWishlist => {setLists([newWishlist, ...lists])})
  }

// ITEM AND LIST VARIABLES THAT HOLD STATE
  const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase())).sort()
  const listsDisplay = user ? lists.filter(list => list.user.id === user.id) : lists

  if (user && user.name) {
    return (
      <div className="App">
        <Header user={user} onLogout={onLogout}/>
        <Nav search={search} setSearch={setSearch} onLogout={onLogout}/> 
        <Switch>
          <Route path='/wishlist'>
            <WishList userLists={listsDisplay} user={user} postList={postList} lists={lists} setLists={setLists}/>
            {/* handleListDelete={handleListDelete} */}
          </Route>
          <Route path="/itemcontainer">
          <ItemContainer filteredItems={filteredItems} items={items} setItems={setItems} handleDelete={handleItemDelete} lists={listsDisplay} updateItem={updateItem}/>
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
}

export default App;
