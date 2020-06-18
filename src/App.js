import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import MainBody from "./Components/MainBody";
import HeaderSection from "./Components/HeaderSection";
import Settings from "./Components/Total";
function App() {
  return (
    <div className="container-fluid text-center">
      <HeaderSection/>
      <Settings/>
      <MainBody/>
    </div>
  );
}

export default App;
