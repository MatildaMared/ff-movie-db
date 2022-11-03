import React, { useEffect } from "react";

import "./App.css";

function App() {
  useEffect(() => {
    callBackendAPI();
  }, []);

  const callBackendAPI = async () => {
    const response = await fetch("/movies");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  return (
    <div className="App">
      <p>Forefront movie database</p>
    </div>
  );
}

export default App;
