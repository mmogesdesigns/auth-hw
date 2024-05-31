import { FormEvent, useState } from "react";

const JWTdemo = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Server endpoint not working
    // hard code token simulating token
    // fetch('https://fakestoreapi.com/auth/login', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         username: 'mor_2314',
    //         password: '83r5^_'
    //     })
    // })
    // .then(res=>res.json())
    // .then(json=>console.log(json))

  
    const jwtToken = "djagloeijao35465354";

    
    sessionStorage.setItem("jwtToken", jwtToken);
  };
  const handleLogout = () => {
  
    sessionStorage.clear();
  };

  const getToken = () => {
    const token = sessionStorage.getItem("jwtToken");
    console.log(token);
  };

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={getToken}>Get Token</button>
    </div>
  );
};
export default JWTdemo;
