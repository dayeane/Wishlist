

function Header({user}) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between ">
            <a className="navbar-brand" href="/"><h2>WishList</h2></a>
            <div className="d-flex justify-content-end">
             <h5 className="mt-4 mr-2">Welcome, {user.name}!</h5>
             <button className="btn btn-primary mt-3 mb-3" type="submit" value="Add Item">LogOut</button>
            </div>
            {/* <p><span className="font-weight-bold">logout button here</span></p> */}

        </nav>
    )
}

export default Header