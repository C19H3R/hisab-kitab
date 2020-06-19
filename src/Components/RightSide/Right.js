import React, { useState, useContext } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalRight from "./TotalRight";
import ReturnedAmounts from "./ReturnedAmounts";
import { TotalContext } from "../../Context/TotalContext";
import { RETURNED_AMOUNT } from "../../Context/actions.types";

const Right = () => {
  const [rightAmount, setRightAmount] = useState([]);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [totalTaken, setTotalTaken] = useState(0);
  const [rightInterest, setRightInterest] = useState(0);
  const {dispatch} = useContext(TotalContext)
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      return alert("please enter amount");
    }
    if (date === "") {
      return alert("please enter date");
    }
    const dateArray = date.split("-");
    const givingDay = parseInt(dateArray[2]);
    const givingMonth = parseInt(dateArray[1]);
    const givingYear = parseInt(dateArray[0]);
    const presentDay = new Date().getDate();
    const presentMonth = new Date().getMonth() + 1;
    const presentYear = new Date().getFullYear();
    console.log(presentDay + "/" + presentMonth + "/" + presentYear);
    console.log(givingDay + "/" + givingMonth + "/" + givingYear);

    var countMonths=0;

    if (givingYear === presentYear) {
      if (
        (givingDay < 15 && presentDay < 15) ||
        (givingDay >= 15 && presentDay >= 15)
      ) {
        countMonths = presentMonth - givingMonth;
      }
      if (givingDay >= 15 && presentDay < 15) {
        countMonths = presentMonth - givingMonth - 1;
      }
      if (givingDay < 15 && presentDay >= 15) {
        countMonths = presentMonth - givingMonth + 1;
      }
    }
    if (presentYear> givingYear) {
      if (givingMonth === presentMonth) {
        if (
          (givingDay < 15 && presentDay < 15) ||
          (givingDay >= 15 && presentDay >= 15)
        ) {
          countMonths = 12;
        }
        if (givingDay >= 15 && presentDay < 15) {
          countMonths = 11;
        }
        if (givingDay < 15 && presentDay >= 15) {
          countMonths = 13;
        }
      }
      if (givingMonth > presentMonth) {
        if (
          (givingDay < 15 && presentDay < 15) ||
          (givingDay >= 15 && presentDay >= 15)
        ) {
          countMonths = 12 - givingMonth + presentMonth;
        }
        if (givingDay >= 15 && presentDay < 15) {
          countMonths = 11 - givingMonth + presentMonth;
        }
        if (givingDay < 15 && presentDay >= 15) {
          countMonths = 13 - givingMonth + presentMonth;
        }
      }
      if (givingMonth < presentMonth) {
        if (
          (givingDay < 15 && presentDay < 15) ||
          (givingDay >= 15 && presentDay >= 15)
        ) {
          countMonths = 12 - givingMonth + presentMonth;
        }
        if (givingDay >= 15 && presentDay < 15) {
          countMonths = 12 - givingMonth + presentMonth - 1;
        }
        if (givingDay < 15 && presentDay >= 15) {
          countMonths = 12 - givingMonth + presentMonth + 1;
        }
      }
    }
    console.log(countMonths);

    const Interest = amount * 0.02 * countMonths;
    console.log(Interest);
    setRightInterest(parseFloat(rightInterest) + parseFloat(Interest));
    const x = {
      amount,
      date,
    };
    dispatch({
      type: RETURNED_AMOUNT,
      payload: Interest,
    });
    setRightAmount([...rightAmount, x]);
    setAmount("");
    setDate("");
    setTotalTaken(parseFloat(totalTaken) + parseFloat(amount));
  };

  return (
    <div>
      <h1>Returned By Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col">
            <div className="row">
              <InputGroup className="container">
                <InputGroupAddon addonType="prepend">₹</InputGroupAddon>
                <Input
                  type="number"
                  placeholder="Amount"
                  name="RightAmount"
                  id="RightAmount"
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
        <TotalRight
          Taken={formatter.format(totalTaken)}
          Interest={formatter.format(rightInterest)}
        />
      </div>
      {/* TODO*/}

      <div className="my-4">
        <div className="row">
          <div className="ml-4 col-2">
            <b>SR. NO.</b>
          </div>
          <div className="col-4">
            <b>AMOUNT</b>
          </div>
          <div className="col-5">
            <b>DATE</b>
          </div>
        </div>
      </div>

      <div className="amounts">
        {rightAmount.map(function (amt, index) {
          return (
            <ReturnedAmounts
              key={index}
              index={index + 1}
              Amount={formatter.format(amt.amount)}
              date={amt.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Right;
