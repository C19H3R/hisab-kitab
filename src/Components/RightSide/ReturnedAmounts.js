import React from "react";

const ReturnedAmounts = (props) => {
  console.log(props);
  return (
    <div className="row">
      <div className="ml-4">
        <pre> {props.index} </pre>
      </div>
      <div className="col">
        <p>₹{props.Amount}</p>
      </div>
      <div className="col">
        <p>{props.date}</p>
      </div>
    </div>
  );
};

export default ReturnedAmounts;
