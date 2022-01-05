import { Link } from 'react-router-dom';

function Nav({search, setSearch}) {


    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }



    return (
        <div>

            {/* <div style = {{backgroundColor: 'gray'}}> */}
                {/* <input type="text"
                value= {search} 
                onChange={(e)=>setSearch(e.target.value)}>
                </input> */}


                {/* <button type="button" style={{float:'right', paddingRight: '10px;' }}>Create Wishlist</button> */}
{/* 
                <select style={{float: 'right'}}>
                    <option value="one">Wishlist 1</option>
                    <option value="two">Wishlist 2</option>
                    <option value="three">Wishlist 3</option>
                    <option value="four">Wishlist 4</option>  
                </select> */}


                {/* <header>
                <button onClick={handleLogout}>Logout</button>
                </header> */}

            {/* </div> */}
        <div>  
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#0275d8", borderRadius:"10px", margin:"10px"}}>
                <a class="navbar-brand" style={{color:"white"}}>The WishList!</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/"><a class="nav-link" style={{color:"white"}}>Home<span class="sr-only">(current)</span></a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/wishlist"><a class="nav-link" style={{color:"white"}}>My Wishlists</a></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/itemcontainer"><a class="nav-link" style={{color:"white"}}>View Current Items</a></Link>
                    </li>
 
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2 " type="text" value= {search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search" />
                        {/* <button class="btn btn-danger my-2 my-sm-0" onClick={handleLogout}>Logout</button> */}
                    </form> 
                </div>
            </nav>
        </div>

             

            </div>

        </div>
    )
}

export default Nav