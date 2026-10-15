import { useState } from 'react'

function App() {
  const [apidata, setapidata] =useState();
  const [message,setmessage]=useState("");
 
  async function fetchapi()
  {  setmessage("api fetched successfully");
    const url='https://jsonplaceholder.typicode.com/';
    const response=await fetch(url);
    const data=await response.json();
    setapidata(data.condition_check());
  
   
  }
  return (
    <div>
      <h2>WELCOME TO API FETCH</h2>
      <h2> here you can fetch content of JSONPLACEHOLDER API </h2>
      <button onClick={()=>fetchapi()}>click here to fetch</button>
      <p>api content</p>
      <p>{message}</p>
      <p>api information about jsonplaceholder: {Number(apidata)}</p>
      
    </div>
  );
}

export default App
