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
    e.currentTarget.reset()
  }

  return (
    <div className='card mt-5'>
      <div className="card-header">
        <h2>Add a New Item</h2>
      </div>
      <form onSubmit={handleNewItem} style={{padding: "20px"}}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input className="form-control" placeholder="Name" ref={name} type="text" id="name" name="name" />
          </div>

          <div className="form-group col-md-6">
            <input className="form-control"  placeholder="Description" ref={description} type="text" id="description" name="description" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input className="form-control" placeholder="Image_url" ref={image_url} type="text" id="image_url" name="image_url" />
          </div>

          <div className="form-group col-md-6">
            <input className="form-control" placeholder="Price" ref={price} type="text" id="price" name="price" />
          </div>
        </div>
        <button className="btn btn-primary mt-3 mb-3" type="submit" value="Add Item">Submit</button>
      </form>  
    </div>
  )
    
}

export default ItemCreateForm;