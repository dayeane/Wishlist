import { Link } from 'react-router-dom'

function Header({user, onLogout}) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        }).then(() => onLogout());
      }

    return (
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between">
            <Link to="/"><h1 style={{color:"black", margin: "auto", marginTop:"10px", padding:"10px", fontFamily:"yellowtail"}}>The Wishlist!<span class="sr-only">(current)</span></h1></Link>
            <div className="d-flex justify-content-end">
             <h4 className="mt-4 mr-2" >Welcome, {user.name}!</h4>
             <Link to="/"><button className="btn btn-danger mt-3 mb-3" type="submit" value="Add Item" onClick={handleLogout} >Logout</button></Link>
            </div>
        </nav>
    )
}

export default Header