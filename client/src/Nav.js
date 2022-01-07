import { Link } from 'react-router-dom';

function Nav({search, setSearch}) {

    return (
        <div>  
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#0275d8", borderRadius:"10px"}}>
                {/* <h3 style={{color:"white", margin: "auto", padding:"10px", fontFamily:"yellowtail", marginTop:"4px"}}>The WishList!</h3> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px", textDecoration:"none"}}>Home<span className="sr-only">(current)</span></h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/wishlist"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px"}}>My Wishlists</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/itemcontainer"><h5 style={{color:"white", margin: "auto", marginTop:"10px", padding:"10px"}}>View All Items</h5></Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2 " type="text" value= {search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Items..." />     
                    </form> 
                </div>
            </nav>
        </div>
    )
}

export default Nav