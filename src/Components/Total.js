import React from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Total = () => {
  return (
    <div className="my-3 ">
      <div className="row">
        <div className="col">
          <h3>TotalAmount: <span className="bg-dark  text-light">00.00</span></h3>
        </div>

        <div className="col">
          <h3>Principle: <span className="bg-success">00.00</span></h3>
        </div>
        <div className="col">
          <h3>Interest: <span className="bg-warning">00.00</span></h3>
        </div>
      </div>

      <Button className="my-2">CALCULATE</Button>
    </div>
  );
};
export default Total;
