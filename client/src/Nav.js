

function Nav({search, setSearch}) {

    return (

        

        <div>
            <div style = {{backgroundColor: 'red'}}>
                <input type="text"
                value= {search} 
                onChange={(e)=>setSearch(e.target.value)}>
                </input>
            </div>
        </div>
    )
}

export default Nav