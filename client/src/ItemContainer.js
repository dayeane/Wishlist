import ItemCard from './ItemCard'
import ItemCreateForm from './ItemCreateForm'


function ItemContainer({filteredItems, items, setItems}) {
    
    const cardItems = filteredItems.map(item => <ItemCard key={item.id} name={item.name} description={item.description} image={item.image_url} price={item.price}/> )

    return (
    <>
        <div>{cardItems}</div>
        <ItemCreateForm items={items} setItems={setItems}/>
    </>
    )
}

export default ItemContainer