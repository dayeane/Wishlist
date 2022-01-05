import {useRef} from 'react'

function ItemCreateForm({items, setItems}){

  const name = useRef('') 
  const description = useRef('')
  const image_url = useRef('')
  const price = useRef('')

  function handleNewItem(e) {
    e.preventDefault();

    const newItem = {
      name: name.current.value,
      description: description.current.value,
      image_url: image_url.current.value,
      price: price.current.value
    } 

    fetch("/items", {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(createdItem => setItems([...items, createdItem]))
  }

  return (
    <div className='card mt-5'>
      <div className="card-header"><h2>Add a New Item</h2></div>
      <form onSubmit={handleNewItem}>
        <label></label>
        <input  placeholder="Name" ref={name} type="text" id="name" name="name" />

        <label></label>
        <input  placeholder="Description" ref={description} type="text" id="description" name="description" />

        <label></label>
        <input  placeholder="Image_url" ref={image_url} type="text" id="image_url" name="image_url" />

        <label></label>
        <input  placeholder="Price" ref={price} type="text" id="price" name="price" />

        <div>
        <table className="table table-striped"></table>
        <input className=" btn btn-primary row col-2 mt-3 mb-3" type="submit" value=" Add Item "/>
        </div>
      </form>
           
    </div>
  )
    
}

export default ItemCreateForm;