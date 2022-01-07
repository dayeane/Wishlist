import {useState} from 'react'

function EditItemForm({id, name, description, image, price, updateItem}){
    const image_url = image
    const [formData, setFormData] = useState({
        name,
        description,
        image_url,
        price,
    })

    function handleOnSubmit(e){
        e.preventDefault()
        updateItem(formData, id)
    }

    function handleOnChange(e){
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <div className="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>       
                    <input type="text" className="form-control"  placeholder="Name..." name="name" value={formData.name} onChange={handleOnChange}/>
                </div>
                <div className="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>
                    <input type="text" className="form-control"  placeholder="Image URL..." name="image_url" value={formData.image_url} onChange={handleOnChange}/>
                </div>
                <div className="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>
                    <input type="text" className="form-control"  placeholder="Description..." name="description" value={formData.description} onChange={handleOnChange}/>
                </div>
                <div className="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>
                    <input type="number" className="form-control"  placeholder="Price..." name="price" value={formData.price} onChange={handleOnChange}/>
                </div> 
                <div className="form-group" style={{marginBottom:"5px", marginLeft:"15px"}}>
                 <button type="submit" className="btn btn-secondary" >Submit Edit</button>
                 </div>
            </form>
        </div>
    )
}

export default EditItemForm