

function Nav({search, setSearch, onLogout}) {


    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (

        

        <div>
            <div style = {{backgroundColor: 'red'}}>
                <input type="text"
                value= {search} 
                onChange={(e)=>setSearch(e.target.value)}>
                </input>

                <button type="button" style={{float:'right', paddingRight: '10px;' }}>Create Wishlist</button>

                <select style={{float: 'right'}}>
                    <option value="one">Wishlist 1</option>
                    <option value="two">Wishlist 2</option>
                    <option value="three">Wishlist 3</option>
                    <option value="four">Wishlist 4</option>  
                </select>

                <header>
                <button onClick={handleLogout}>Logout</button>
                </header>

            </div>

        </div>
    )
}

export default Nav