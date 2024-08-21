import React from "react";
import "./App.css"
import NavBar from "./Componet/NavBar/NavBar";
import Banner from "./Componet/Banner/Banner";
import RowPost from "./Componet/RowPost/RowPost";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner/>
      <RowPost/>
    </div>
  );
}

export default App;
