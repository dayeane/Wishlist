import { useEffect, useState } from "react"
import ListCard from "./ListCard"


function WishList({userLists}){
    console.log(userLists)
    // console.log(user)
    // const [lists, setLists] = useState([])

    // useEffect(() => {
    // fetch('/lists')
    // .then(res => res.json())
    // .then(setLists)
    // // .then(() => setLists(lists.filter(list => list.user.id === user.id)))
    // },[])

    const listsDisplay = userLists.map(list => <ListCard key={list.id} id={list.id} name={list.name} items={list.items} />)
    // .filter(() => lists.user.id === user.id).
    return(
        <div>
            {listsDisplay}  
        </div>
    )
}

export default WishList