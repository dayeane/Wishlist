import { useState } from 'react'
import EditItemForm from './EditItemForm'


function ItemCard({ id, name, description, image, price, handleDelete, lists}) {
    //Still need to add functionality to the item card so that it adds to the selected list
    const [showForm, setShowForm] = useState(false)

    function handleEditClick(){
        setShowForm((prevShowForm) => !prevShowForm)
    }


    return (
        <div className="card mt-3" style={{width: "18rem"}}>
            <img className="card-img-top" src={image} alt='products'></img>
            <div className="card-body">
                <h2 className="card-text">{name}</h2>
                <p className="card-text">{description}</p>
                <p className="card-text">{price}</p>
                {/* <select name='wishlist' onChange={handleChange}>
                        <option>Select Wishlist</option>
                        {list.map(l => <option value={l.id} key={l.id}>{l.name} </option>)}
                    </select> */}
            </div>
            
            <div class="input-group">
                <select class="custom-select" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px"}} id="inputGroupSelect04">
                    <option value="Add to wishlist">Add Item to Wishlist</option>
                    {lists.map(list => <option value={list.id} key={list.id} id={list.id}>{list.name} </option>)}
                    {/* <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option> */}
                </select>
            </div>
            <button type="button" class="btn" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px" }} onClick={handleEditClick}>Edit Item</button>
            <button type="button" class="btn btn-danger" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px"}} onClick={() => handleDelete(id)}>Delete Item</button>
            <div>
                {showForm ? <EditItemForm id={id}/> : null}
            </div>  

        </div>
    )
}

export default ItemCard