import ItemCard from './ItemCard'
import ItemCreateForm from './ItemCreateForm'


function ItemContainer({filteredItems, items, setItems, handleDelete, lists}) {


    
    const cardItems = filteredItems.map(item => <ItemCard key={item.id} id={item.id} name={item.name} description={item.description} image={item.image_url} price={item.price} handleDelete={handleDelete} lists={lists}/> )

    return (
    <>
        <div class="card mt-5" style={{borderRadius:"10px"}}>
            <div class="card-header">
                <h3>All Items</h3>
            </div>
            <div class="card-body d-flex justify-content-around flex-wrap">
                {cardItems}
            </div>
        </div>
        <ItemCreateForm items={items} setItems={setItems}/>
    </>
    )
}

export default ItemContainer