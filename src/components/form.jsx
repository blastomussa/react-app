import { useState } from "react";
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username)
    console.log(password)
  }

  return (
    <form className="pt-10 flex flex-col" onSubmit={handleSubmit}>
      <label className="p-2 flex flex-row">Username:
        <input 
          className="m-auto border-2 rounded-md border-slate-200"
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label className="p-2 flex flex-row">Password:
        <input 
          className="m-auto border-2 rounded-md border-slate-200 "
          type="text" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <input className='m-auto mt-16 p-1 border-2 rounded-md bg-slate-200 border-slate-300 hover:bg-blue-200 ' type="submit"/>
    </form>
  )
}

export default MyForm;