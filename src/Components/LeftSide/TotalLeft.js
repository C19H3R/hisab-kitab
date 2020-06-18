import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const TotalLeft = (props) => {
  return (
    <div className="row">
      <h4 className="col">Total Amount: {props.Taken}</h4>
      <h4 className="col">Total Interest: {props.Interest}</h4>
    </div>
  );
};
export default TotalLeft;
