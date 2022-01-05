


function ItemCard({name, description, image, price}) {

    return (
        <div>
            <div style={{border: '1px solid', margin: '5px'}}>

                <h2>{name}</h2>
                <p>{description}</p>
                <p>{price}</p>
                <img src={image} alt='products'></img>
                
                {/* <select name='wishlist' onChange={handleChange}>
                        <option>Select Wishlist</option>
                        {list.map(l => <option value={l.id} key={l.id}>{l.name} </option>)}
                    </select> */}

            </div>
        </div>
    )
}

export default ItemCard