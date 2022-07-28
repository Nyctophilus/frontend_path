import React, { Component } from "react";
import Button from "../../../Components/UI/Button/Button";
import classes from "./ContactData.module.css";

export class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.context);
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter your contact Data</h4>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
          />
          <input
            type="text"
            name="Street"
            placeholder="Your Street"
          />
          <input
            type="text"
            name="postal"
            placeholder="Your postal code"
          />

          <Button
            btnType="Success"
            clicked={this.orderHandler}
          >
            Order
          </Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
