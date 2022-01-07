import ItemCard from './ItemCard'
import ItemCreateForm from './ItemCreateForm'


function ItemContainer({filteredItems, items, setItems, handleDelete, lists, updateItem}) {


    
    const cardItems = filteredItems.map(item => 
        <ItemCard 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            description={item.description} 
            image={item.image_url} 
            price={item.price} 
            handleDelete={handleDelete} 
            lists={lists}
            updateItem={updateItem}
            /> )

    return (
    <>
        <div className="card mt-5" style={{borderRadius:"10px"}}>
            <div className="card-header">
                <h3>All Items</h3>
            </div>
            <div className="card-body d-flex justify-content-around flex-wrap">
                {cardItems}
            </div>
        </div>
        <ItemCreateForm items={items} setItems={setItems}/>
    </>
    )
}

export default ItemContainer