

function ListItemCard({id, list_id, name, price, description, image, setListItems}){

    function handleListItemDelete(id) {

        fetch(`lists/${list_id}/remove_item?item_id=${id}`, {
            method: 'DELETE',
            headers: {'Content-Type':'application/json'}
        })
        .then(res => res.json())
        .then(res => {
            setListItems(res)
        })
    }


    return(
        <div className="card mt-3" style={{width: "18rem"}} id={id}>
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
            <button type="button" className="btn btn-danger" style={{marginBottom:"10px", marginLeft:"15px", marginRight:"15px"}} onClick={() => handleListItemDelete(id)}>Remove From List</button>

        </div>
    )
}

export default ListItemCard