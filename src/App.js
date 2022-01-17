import "./App.css";
import CentralCard from "./components/centralCard/CentralCard";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Template from "./components/template/Template";
import React, { useState } from "react";
import Button from "./components/centralCard/Button";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [changeContent, setChangeContent] = useState();

  const modalHandler = () => {
    setShowModal(!showModal);
    console.log("Hai Cliccato");
  };

  const iconHandler = (iconId) => {
    setChangeContent(iconId);
    console.log(changeContent);
  };

  let content;

  if (changeContent === "speedometer") {
    content = <div className="mainContent">Speedometer</div>;
  } else if (changeContent === "diary") {
    content = <div className="mainContent">Diary</div>;
  } else if (changeContent === "focus") {
    content = <div className="mainContent">Focus</div>;
  } else if (changeContent === "calendar") {
    content = <div className="mainContent">Calendar</div>;
  } else if (changeContent === "chevron-left-solid") {
    content = <CentralCard />;
  } else {
    content = <CentralCard />;
  }

  return (
    <div className="App">
      {showModal ? (
        <div className="overlay" onClick={modalHandler}>
          <div className="modal">
            <Button test={modalHandler} show={showModal}>
              Ok
            </Button>
            <Button test={modalHandler} show={showModal}>
              Cancella
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
      <Sidebar onIconClick={iconHandler} />
      <Navbar />
      {content}
      <Template onModalShow={modalHandler} />
    </div>
  );
}

export default App;
