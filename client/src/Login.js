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
      <div class="container">
        <div class="h-100 justify-content-center align-items-center">
          <form  onSubmit={handleSubmit}>
            <h3 className="mt-6 mr-2 text-center" >Login</h3>
            <p className="text-center">
              <label className="mr-2" htmlFor="name">Name:</label>
              <input 
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </p>
            <p className="text-center">
              <button className="btn btn-primary mt-3 mb-3" type="submit">Login</button>
            </p>
            <br></br>
            <br></br>  
          </form>
          </div>
      </div>
    );
}

export default Login



