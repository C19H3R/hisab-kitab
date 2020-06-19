import React, { useContext } from "react";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { TotalContext } from "../Context/TotalContext";

const Total = () => {
  const { TotalInterest} = useContext(TotalContext);
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });
  return (
    <div className="my-3 ">
      <div className="row">
        <div className="col">
          <h3>Final-Interest: <span className="border border-dark rounded px-2">{formatter.format(TotalInterest)}</span></h3>
        </div>
      </div>
    </div>
  );
};
export default Total;
