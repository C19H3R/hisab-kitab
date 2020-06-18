import React, { useState } from "react";

import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalRight from "./TotalRight";
import ReturnedAmounts from "./ReturnedAmounts";

const Right = () => {
  const [rightAmount, setRightAmount] = useState([]);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [totalGiven, setTotalGiven] = useState(0);
  const [rightInterest, setRightInterest] = useState(0);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(date);
    console.log(amount);
    if (amount === "") {
      return alert("please enter amount");
    }
    if (date === "") {
      return alert("please enter date");
    }
    const x = {
      amount,
      date,
    };
    setRightAmount([...rightAmount, x]);
    setAmount("");
    setDate("");
    setTotalGiven(parseInt(totalGiven) + parseInt(amount));
  };

  return (
    <div>
      <h1>Returned To Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="row">
              <InputGroup className="container">
                <InputGroupAddon addonType="prepend">₹</InputGroupAddon>
                <Input
                  type="number"
                  placeholder="Amount"
                  name="LeftAmount"
                  id="LeftAmount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                {/* TODO*/}
              </InputGroup>
            </div>
          </div>
          <div className="col">
            <InputGroup>
              <Input
                type="date"
                placeholder="Date"
                name="InvestingDate"
                id="InvestingDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              {/* TODO*/}
            </InputGroup>
          </div>
          <div className="col">
            <Button type="submit" color="secondary" className="container">
              Submit
            </Button>
            {/* TODO*/}
          </div>
        </div>
      </form>
      <div className="border-bottom mt-3">
        <TotalRight Taken={totalGiven} Interest={rightInterest} />
      </div>
      {/* TODO*/}

      <div className="my-4">
        <div className="row">
          <div className="ml-4">
            <b>SR. NO.</b>
          </div>
          <div className="col">
            <b>AMOUNT</b>
          </div>
          <div className="col">
            <b>DATE</b>
          </div>
        </div>
      </div>
      {rightAmount.map(function (amt, index) {
        return (
          <ReturnedAmounts
            key={index}
            index={index + 1}
            Amount={amt.amount}
            date={amt.date}
          />
        );
      })}
    </div>
  );
};

export default Right;
