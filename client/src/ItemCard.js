import { useState } from 'react'
import EditItemForm from './EditItemForm'


function ItemCard({ id, name, description, image, price, handleDelete, lists, updateItem}) {
    //Still need to add functionality to the item card so that it adds to the selected list
    const [showForm, setShowForm] = useState(false)

    function handleEditClick(){
        setShowForm((prevShowForm) => !prevShowForm)
    }

    function addItemToList(e) {
        e.preventDefault()
        const list_id = e.currentTarget.value
        
        fetch(`lists/${list_id}/add_item?item_id=${id}`, {
            method: 'POST',
            headers: {'Content-Type':'application/json'}
          })
          .then(res => res.json())
          .then(res => console.log(res))
    }

    return (
        <div className="card mt-3" style={{width: "18rem", }}>
            
            <img className="card-img-top" src={image} alt='products' style={{padding:"15px"}}></img>
            
            <div className="card-body">
                <h2 className="card-text">{name}</h2>
                <p className="card-text">{description}</p>
                <p className="card-text"><strong>${price}</strong></p>
            </div>
            
            <div className="input-group">
                <select onChange={addItemToList} className="custom-select" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px"}} id="inputGroupSelect04">
                    <option value="Add to wishlist">Add Item to Wishlist</option>
                    {lists.map(list => <option value={list.id} key={list.id} id={list.id}>{list.name} </option>)}
                </select>
            </div>

            <button type="button" className="btn" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px" }} onClick={handleEditClick}>Edit Item</button>
            <button type="button" className="btn btn-danger" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px"}} onClick={() => handleDelete(id)}>Delete Item</button>

            
            <div>
                {showForm ? <EditItemForm id={id} name={name} description={description} image={image} price={price} updateItem={updateItem}/> : null}
            </div>  

        </div>
    )
}

export default ItemCard