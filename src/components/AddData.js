import React from "react";
import "../styles/addData.css";

const AddData = () => {
  return (
    <div>
      <div class="container">
        <div class="inp1 ">
          <input
            type="number"
            className="inputbox"
            placeholder="CUSTOMER ORDER ID"
          />
        </div>
        <div class="inp2 ">
          <input type="number" className="inputbox" placeholder="SALES ORG" />
        </div>
        <div class="inp3">
          <input
            type="number"
            className="inputbox"
            placeholder="DISTRIBUTION CHANNEL"
          />
        </div>
        <div class="inp4 ">
          <input
            type="number"
            className="inputbox"
            placeholder="CUSTOMER NUMBER"
          />
        </div>
        <div class="inp5 ">
          <input type="text" className="inputbox" placeholder="COMPANY CODE" />
        </div>
        <div class="inp6 ">
          <input
            type="text"
            className="inputbox"
            placeholder="ORDER CURRENCY"
          />
        </div>
        <div class="inp7 ">
          <input
            type="number"
            className="inputbox"
            placeholder="AMOUNT IN USD"
          />
        </div>
        <div class="inp8 ">
          <input
            type="text"
            className="inputbox"
            placeholder="ORDER CREATION DATE"
            onChange={(e) => console.log(e.target.value)}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
        </div>
      </div>
      <div class="form-button">
        <div class="btn1">
          <button className="form-btn button1">ADD</button>
        </div>
        <div class="btn2">
          <button className="form-btn button2">CLEAR DATA</button>
        </div>
      </div>
    </div>
  );
};

export default AddData;
