import React from "react";

const ReturnedAmounts = (props) => {
  console.log(props);
  return (
    <div className="row">
          <div className="ml-4 col-2"><p>{props.index}</p></div>
          <div className="col-4"><p>-{props.Amount}</p></div>
          <div className="col-5"><p>{props.date}</p></div>
        </div>
  );
};

export default ReturnedAmounts;
