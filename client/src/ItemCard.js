


function ItemCard({ id, name, description, image, price, handleDelete}) {

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
            <button type="button" class="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
            {/* <button onClick={handleDelete(id)}>Delete</button> */}
        </div>
    )
}

export default ItemCard