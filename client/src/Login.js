import {useState} from 'react'

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      })
        .then((r) => r.json())
        .then((user) => onLogin(user));
    }
  
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8" >
            <div class="card mt-5" style={{borderRadius:"10px"}}>
              <div class="card-header bg-primary" style={{color:"white"}} >
                <h3 className="text-center" >Welcome to the Wishlist App!</h3>
              </div>
              <h5 className="text-center mt-2" >User Login:</h5>
                <form  onSubmit={handleSubmit}>
                  <div className=" form-group text-center mt-2">
                    <label className="mr-2" htmlFor="name">Username:</label>
                    <input 
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <p className="text-center">
                    <button className="btn btn-primary mt-3 mb-3" type="submit">Login</button>
                  </p>
                  <br></br>
                  <br></br>  
                </form>
            </div>
          </div>
        </div>
      </div>
    
    );
}

export default Login



