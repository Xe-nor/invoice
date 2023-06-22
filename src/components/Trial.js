import React, { Component } from "react";
import axios from "axios";

class YourComponent extends Component {
  componentDidMount() {
    this.fetchData();
    this.postData();
    this.updateData();
    this.deleteData();
  }

  fetchData() {
    axios
      .get("http://localhost:8080/h2h_milestone_3/api/invoices")
      .then((response) => {
        // Handle the successful GET response here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error response here
        console.error("GET error:", error);
      });
  }

  postData() {
    axios
      .post("http://localhost:8080/h2h_milestone_3/api/invoices", {
        // Provide the data you want to send in the POST request body
      })
      .then((response) => {
        // Handle the successful POST response here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error response here
        console.error("POST error:", error);
      });
  }

  updateData() {
    axios
      .put("http://localhost:8080/h2h_milestone_3/api/invoices", {
        // Provide the data you want to send in the PUT request body
      })
      .then((response) => {
        // Handle the successful PUT response here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error response here
        console.error("PUT error:", error);
      });
  }

  deleteData() {
    axios
      .delete("http://localhost:8080/h2h_milestone_3/api/invoices")
      .then((response) => {
        // Handle the successful DELETE response here
        console.log(response.data);
      })
      .catch((error) => {
        // Handle the error response here
        console.error("DELETE error:", error);
      });
  }

  render() {
    return <div>Your component content here</div>;
  }
}

export default YourComponent;
