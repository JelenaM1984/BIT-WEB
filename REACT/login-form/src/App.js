import React, { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin",
  };
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("You are logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      setError("Details do not mach");
    }
  };

  const Logout = () => {
    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <div className="App">
      {user.email !== "" ? (
        <div className="wellcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
