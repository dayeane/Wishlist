import ItemCard from './ItemCard'


function ItemContainer({items}) {
    
    const products = items.map(item => <ItemCard key={item.id} name={item.name} description={item.description} image={item.image_url}/> )

    return (
        
        <div>
            {products}
        </div>
    )
}

export default ItemContainer