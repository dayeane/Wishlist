import { Link } from 'react-router-dom';

function Nav({search, setSearch}) {

    return (
        <div>  
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#0275d8", borderRadius:"10px"}}>
                {/* <h3 style={{color:"white", margin: "auto", padding:"10px", fontFamily:"yellowtail", marginTop:"4px"}}>The WishList!</h3> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav" >
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link to="/"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px", textDecoration:"none"}}>Home<span class="sr-only">(current)</span></h5></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/wishlist"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px"}}>My Wishlists</h5></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/itemcontainer"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px"}}>View All Items</h5></Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2 " type="text" value= {search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Items..." />     
                    </form> 
                </div>
            </nav>
        </div>
    )
}

export default Nav