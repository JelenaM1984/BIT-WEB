import React from "react";
import "./App.css";
import { useState } from "react";
import Header from "./components/HEADER/Header";
import People from "./components/PEOPLE/People";
import SearcBox from "./components/SEARCH_BAR/SearchBar";
import SeearchList from "./components/SEARCH_BAR/SeearchList";

function App() {
  const [results, setResults] = useState([]);
  return (
    <>
      <Header />
      <SearcBox setResults={setResults} />
      <SeearchList results={results} />
      <People />
    </>
  );
}

export default App;
