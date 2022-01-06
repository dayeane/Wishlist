
function ListCard({id, name, displayItems, setListItems}){

    function displayItems(id){  
        fetch(`/lists/${id}`)
        .then(res => res.json())
        .then(setListItems)    
    }   
    function handleListDelete(id){
        //Add Delete Functionality, deletes entire list and associations.
        console.log(id)
    }
    
    return(
        <div className="card mt-3 " style={{width: "18rem", textAlign:"center"}}>
            <div className="card-body">
                <h3 className="card-text">{name}</h3>
            </div>
            <button type="button" class="btn btn-secondary" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px"}} onClick={() => displayItems(id)}>View Items</button>
            <button type="button" class="btn btn-danger" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px" }} onClick={() => handleListDelete(id)}>Delete List</button>
        </div>  
    )
}

export default ListCard