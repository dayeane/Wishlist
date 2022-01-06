import { Link } from 'react-router-dom';

function Nav({search, setSearch}) {


    // function handleLogout() {
    //     fetch("/logout", {
    //       method: "DELETE",
    //     }).then(() => onLogout());
    //   }



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
                <h3 style={{color:"white", margin: "auto", padding:"10px"}}>The WishList!</h3>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <Link to="/"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px"}}>Home<span class="sr-only">(current)</span></h5></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/wishlist"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px"}}>My Wishlists</h5></Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/itemcontainer"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px"}}>View Current Items</h5></Link>
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

        
    )
}

export default Nav