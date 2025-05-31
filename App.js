import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_BASE_URL } from "./config";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    axios.get(`${API_BASE_URL}/ping`)
      .then(response => setMessage(response.data))
      .catch(error => setMessage("Error connecting to backend."));
  }, []);

  return (
    <div style={{ padding: 20, fontSize: 24 }}>
      <h1>VidWink is Live</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;