
function ListCard({id, name, displayItems, setListItems, handleListDelete}){

    function displayItems(id){  
        fetch(`/lists/${id}`)
        .then(res => res.json())
        .then(setListItems)    
    } 
   
    return(
        <div className="card mt-3 " style={{width: "18rem", textAlign:"center"}}>
            <div className="card-body">
                <h3 className="card-text">{name}</h3>
            </div>
            <button type="button" className="btn btn-secondary" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px"}} onClick={() => displayItems(id)}>View Items</button>
            <button type="button" className="btn btn-danger" style={{marginLeft:"10px", marginRight:"10px", marginBottom:"10px" }} onClick={() => handleListDelete(id)}>Delete List</button>
        </div>  
    )
}

export default ListCard