import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Left from "./LeftSide/Left";
import Right from "./RightSide/Right";

const MainBody = () => {
  return (
    <div className="row">
      <div className="col bg-light text-dark border-right border-top border-dark">
        <Left />
      </div>
      <div className="col bg-light text-dark border-right border-top border-dark">
        <Right />
      </div>
    </div>
  );
};
export default MainBody;
