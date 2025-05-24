import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import SecondaryContainer from "./components/SecondaryContainer";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <MainContainer/>
         <SecondaryContainer />
      </div>
    </>
  );
}

export default App;
