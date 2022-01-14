import "./App.css";
import CentralCard from "./components/centralCard/CentralCard";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Template from "./components/template/Template";
import React, { useState } from "react";
import Button from "./components/centralCard/Button";

function App() {
  const [showModal, setShowModal] = useState(false);

  const modalHandler = () => {
    setShowModal(!showModal);
    console.log("Hai Cliccato");
  };

  return (
    <div className="App">
      {showModal ? (
        <div className="overlay" onClick={modalHandler}>
          <div className="modal">
            <Button test={modalHandler}>Ok</Button>
            <Button test={modalHandler}>Cancella</Button>
          </div>
        </div>
      ) : (
        ""
      )}
      <Sidebar />
      <Navbar />
      <CentralCard />
      <Template click={modalHandler} />
    </div>
  );
}

export default App;
