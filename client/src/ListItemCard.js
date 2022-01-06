

function ListItemCard({id, name, price, description, image}){

    function handleListItemDelete(id){
        //deletes item from list, does not delete item from DB
        console.log(id)
    }

    return(
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
            <button type="button" class="btn btn-danger" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px"}} onClick={() => handleListItemDelete(id)}>Remove From List</button>

        </div>
    )
}

export default ListItemCard