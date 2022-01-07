import { useEffect, useState } from "react"
import ListCard from "./ListCard"
import ListItemCard from "./ListItemCard"


function WishList({userLists, user, postList, handleListDelete}){
    const [listItems, setListItems] = useState([])
    const [formData, setFormData] = useState({name:"", user_id: user.id})

    function handleOnChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    
    function handleSubmit(e){
        e.preventDefault()
        postList(formData)
    }
    
    const itemsToDisplay = listItems.items 
    const listItemsDisplay = itemsToDisplay?.map(item => <ListItemCard key={item.id} id={item.id} description={item.description} image={item.image_url} name={item.name} price={item.price}/>)
    const listsDisplay = userLists.map(list => <ListCard key={list.id} id={list.id} name={list.name} setListItems={setListItems} handleListDelete={handleListDelete} />)

    return(
        <div class="card mt-5" style={{borderRadius:"10px"}}>
            <div class="card-header" >
                <h3 style={{float:"left"}}>Your Wishlists</h3>
                <form class="form-inline" style={{float:"right"}} onSubmit={handleSubmit}>
                    <div class="form-group mx-sm-3 mb-2">
                        <label style={{marginRight:"5px"}}><strong>Create a New List:</strong> </label>
                        <input value={formData.name} name="name" type="input" class="form-control"  placeholder="Wishlist Name..." onChange={handleOnChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Create</button>
                </form>
            </div>
            <div class="card-body d-flex justify-content-around flex-wrap">
                {listsDisplay}
            </div>
            <hr/>
            <div class="card-body d-flex justify-content-around flex-wrap">
                {listItems ? listItemsDisplay : null}
            </div>
        </div>
    )
}

export default WishList