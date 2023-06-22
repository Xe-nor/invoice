import React, { useState } from "react";
import axios from "axios";
import "../styles/addData.css";

const AddData = () => {
  const [formData, setFormData] = useState({
    Customer_order_id: "",
    sales_org: "",
    DISTRIBUTION_CHANNEL: "",
    CUSTOMER_NUMBER: "",
    COMPANY_CODE: "",
    ORDER_CURRENCY: "",
    AMOUNT_IN_USD: "",
    ORDER_CREATION_DATE: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/h2h_milestone_3/add", formData)
      .then((response) => {
        // Handle success response
        console.log("Data added successfully");
      })
      .catch((error) => {
        // Handle error
        console.error("Error occurred while adding data", error);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="inp1 ">
          <input
            type="number"
            className="inputbox"
            placeholder="CUSTOMER ORDER ID"
            name="Customer_order_id"
            value={formData.Customer_order_id}
            onChange={handleChange}
          />
        </div>
        <div className="inp2 ">
          <input
            type="number"
            className="inputbox"
            placeholder="SALES ORG"
            name="sales_org"
            value={formData.sales_org}
            onChange={handleChange}
          />
        </div>
        <div className="inp3">
          <input
            type="number"
            className="inputbox"
            placeholder="DISTRIBUTION CHANNEL"
            name="DISTRIBUTION_CHANNEL"
            value={formData.DISTRIBUTION_CHANNEL}
            onChange={handleChange}
          />
        </div>
        <div className="inp4 ">
          <input
            type="number"
            className="inputbox"
            placeholder="CUSTOMER NUMBER"
            name="CUSTOMER_NUMBER"
            value={formData.CUSTOMER_NUMBER}
            onChange={handleChange}
          />
        </div>
        <div className="inp5 ">
          <input
            type="text"
            className="inputbox"
            placeholder="COMPANY CODE"
            name="COMPANY_CODE"
            value={formData.COMPANY_CODE}
            onChange={handleChange}
          />
        </div>
        <div className="inp6 ">
          <input
            type="text"
            className="inputbox"
            placeholder="ORDER CURRENCY"
            name="ORDER_CURRENCY"
            value={formData.ORDER_CURRENCY}
            onChange={handleChange}
          />
        </div>
        <div className="inp7 ">
          <input
            type="number"
            className="inputbox"
            placeholder="AMOUNT IN USD"
            name="AMOUNT_IN_USD"
            value={formData.AMOUNT_IN_USD}
            onChange={handleChange}
          />
        </div>
        <div className="inp8 ">
          <input
            type="text"
            className="inputbox"
            placeholder="ORDER CREATION DATE"
            name="ORDER_CREATION_DATE"
            value={formData.ORDER_CREATION_DATE}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-button">
        <div className="btn1">
          <button className="form-btn button1" onClick={handleSubmit}>
            ADD
          </button>
        </div>
        <div className="btn2">
          <button className="form-btn button2" onClick={handleSubmit}>
            CLEAR DATA
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddData;
