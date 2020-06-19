import React, { useReducer } from "react";
import TotalReducer from "./Context/TotalReducer";
import "bootstrap/dist/css/bootstrap.min.css";

import MainBody from "./Components/MainBody";
import HeaderSection from "./Components/HeaderSection";
import Settings from "./Components/Total";
import { TotalContext } from "./Context/TotalContext";
function App() {
  const [TotalInterest, dispatch] = useReducer(TotalReducer, 0);
  return (
    <TotalContext.Provider value={{ TotalInterest, dispatch }}>
      <div className="container-fluid text-center d-block">
        <HeaderSection />
        <Settings />
        <MainBody />
      </div>
    </TotalContext.Provider>
  );
}

export default App;
