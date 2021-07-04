import React from "react";
import Header from "./Header";
import SpeakerList from "./SpeakerList";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="jumbotron">
          <p className="lead"></p>
          <hr className="my-4" />
          <p></p>
        </div>
        <SpeakerList />
      </div>
    </>
  );
};

export default App;
