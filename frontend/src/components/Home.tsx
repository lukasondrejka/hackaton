import './App.css'
import axios from "axios";
import { useState, useEffect } from "react";

function Home() {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    // send a request to the API
    axios.get('/api/test').then(response => {
      setResponse(response.data);
    }).catch(error => {
      console.error('Error fetching data:', error);
    });
  }, []);

  return (
    <>
      <h1>Home</h1>
      {response ? <p>{response}</p> : <p>Loading...</p>}
    </>
  )
}

export default Home
