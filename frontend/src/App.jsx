import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Checking backend...");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5001")
      .then((res) => res.text())
      .then((data) => {
        setMessage(data);
        setSuccess(true);
      })
      .catch(() => {
        setMessage("Backend connection failed");
        setSuccess(false);
      });
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial",
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Three-Tier DevOps Project</h1>

      <h2>Frontend is running</h2>

      <h3
        style={{
          color: success ? "green" : "red",
        }}
      >
        {success ? "✔ " : "✘ "}
        {message}
      </h3>
    </div>
  );
}

export default App;
