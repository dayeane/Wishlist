import { useEffect, useState } from "react"
import ListCard from "./ListCard"
import ListItemCard from "./ListItemCard"
import EmptyListDisplay from "./EmptyListDisplay"


function WishList({userLists, user, postList, lists, setLists}){
    const [listItems, setListItems] = useState([])
    const [formData, setFormData] = useState({name:"", user_id: user.id})

    
    function handleOnChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        postList(formData)
        setFormData({name:"", user_id: user.id})
    }
    
    const handleListDelete = (id) => {
        fetch(`/lists/${id}`, {
            method: "DELETE",
            headers: {'Content-type':'application/json'}
        })
        .then(res => res.json())
        .then(() => {
            setLists(lists.filter(list => list.id !== id))
            setListItems([])
        })
    }

    const itemsToDisplay = listItems.items 
    const listsDisplay = userLists.map(list => <ListCard key={list.id} id={list.id} name={list.name} setListItems={setListItems} handleListDelete={handleListDelete} />)
    const listItemsDisplay = itemsToDisplay?.map(item => <ListItemCard key={item.id} id={item.id} list_id={listItems.id} description={item.description} image={item.image_url} name={item.name} price={item.price} setListItems={setListItems}/>)
    
    return(
        <div className="card mt-3" style={{borderRadius:"10px", fontFamily:"dosis"}}>
            <div className="card-header" >
                <h3 style={{float:"left"}}><strong>Your Wishlists</strong></h3>
                <form className="form-inline" style={{float:"right"}} onSubmit={handleSubmit}>
                    <div className="form-group mx-sm-3 ">
                        <label style={{marginRight:"5px"}}><strong>Create a New List:</strong> </label>
                        <input value={formData.name} name="name" required="required" type="input" className="form-control"  placeholder="Wishlist Name..." onChange={handleOnChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
            <div className="card-body d-flex justify-content-around flex-wrap">
                {listsDisplay}
            </div>
            <hr/>
            <div className="card-body d-flex justify-content-around flex-wrap">
                {listItems ? listItemsDisplay : <EmptyListDisplay />}
            </div>
        </div>
    )
}

export default WishList