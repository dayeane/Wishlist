

function HomePage(){
    return(
        <div className="container">   
            <div className="row justify-content-center" style={{fontFamily:"dosis"}}>
                <h2 className="mt-4 mr-2" >Welcome To <span style={{fontFamily:"yellowtail"}}>The WishList!</span></h2> 
                <h5 className="mt-2">Our mission: This app is here to provide a service, and that service is to help our users make a list, but not just any kind of list.
                    We make it easy for users to create their own personal wishlists with a customizable name, allowing you to add items to those list with just a simple 
                    click. Don't see what you're looking for? No biggie, we allow you to add your own items that you found from outside sources, with the name of the product, price, image, and description.
                    This will allow you to keep track of multiple items from outside sources if you so wish to do so.
                </h5>
                <br></br>
                <h5 >We pride ourselves with how easy it is to get started on creating, adding, updating and deleting products and lists with just a few key strokes. The user should be able to login 
                    with ease and be confident in how to navigate and use the Wishlist application. 
                </h5>
                <h2 className="mt-2">Let's go shopping!</h2>
            </div>
        </div>
    )
}

export default HomePage