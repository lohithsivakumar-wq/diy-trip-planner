import { useState } from "react";

export default function ApiTest() {
  const [response, setResponse] = useState("");

  const callApi = async () => {
    try {
      const res = await fetch("https://diy-trip-planner-474540318794.europe-west1.run.app");
      const data = await res.text();
      setResponse(data);
    } catch (error) {
      setResponse("Error: " + error.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>Backend API Test</h1>
      <button onClick={callApi}>Call Backend</button>
      <p>Response: {response}</p>
    </div>
  );
}
