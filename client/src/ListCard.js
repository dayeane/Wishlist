
function ListCard({id, name, items,}){

    return(
        <div className="card mt-3" style={{width: "18rem"}}>
        <div className="card-body">
            <h2 className="card-text">{name}</h2>
        </div>
        <button type="button" class="btn btn-danger">Delete List</button>
    </div>  
    )
}

export default ListCard