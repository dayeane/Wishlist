import {useState} from 'react'

function EditItemForm({id}){
    const [formData, setFormData] = useState("")

    function handleItemEdit(e){
        //Handle Editing of Item, will be a post to backend, must capture form data in state.
        e.preventDefault()
        console.log(id)

    }

    return(
        <div>
            <form onSubmit={handleItemEdit}>
                <div class="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>
                    {/* <label for="exampleFormControlInput1">Name:</label> */}
                    <input type="email" class="form-control"  placeholder="Name..."/>
                </div>
                <div class="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>
                    {/* <label for="exampleFormControlInput1">Image:</label> */}
                    <input type="email" class="form-control"  placeholder="Image URL..."/>
                </div>
                <div class="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>
                    {/* <label for="exampleFormControlInput1">Description:</label> */}
                    <input type="email" class="form-control"  placeholder="Description..."/>
                </div>
                <div class="form-group" style={{ marginLeft:"15px", marginRight:"15px"}}>
                    {/* <label for="exampleFormControlInput1">Price:</label> */}
                    <input type="email" class="form-control"  placeholder="Price..."/>
                </div>
                <div class="form-group" style={{marginBottom:"5px", marginLeft:"15px"}}>
                 <button type="submit" class="btn btn-secondary" >Submit Edit</button>
                 </div>
            </form>
        </div>
    )
}

export default EditItemForm