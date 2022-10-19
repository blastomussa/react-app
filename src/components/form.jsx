import { useState } from "react";
import axios from 'axios';


function MyForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append('username', username);
    form.append('password', password);
    

    axios({
      method: "post",
      url: "http://localhost:80/token",
      data: form,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //handle success
        if (response.status === 200){
          // set session cookies
          document.cookie = `access_token=${response.data.access_token}`; // may need expire and path for prod
          document.cookie = `refresh_token=${response.data.refresh_token}`;
          document.cookie = `username=${username}`;
          document.cookie = `logged_in=true`;
          window.location = '/';
        }
        
      })
      .catch(function (response) {
        setUsername('');
        setPassword('');
        
        //remove all cookies one-liner
        document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

        // handle error
        // error message 
        // shake animation?
        console.log(response);
      });

  }

  return (
    <><form className="pt-10 flex flex-col" onSubmit={handleSubmit}>
      <label className="p-2 flex flex-row">Username:
        <input
          className="m-auto border-2 rounded-md border-slate-200"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)} />
      </label>
      <label className="p-2 flex flex-row">Password:
        <input
          className="m-auto border-2 rounded-md border-slate-200 "
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} />
      </label>
      <input className='m-auto mt-16 p-1 border-2 rounded-md bg-slate-200 border-slate-300 hover:bg-blue-200 ' type="submit" />
    </form></>
  )
}

export default MyForm;