import React, { Component } from "react";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import withRouter from "../../hoc/withRouter/withRouter";
import { Outlet } from "react-router-dom";

export class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      meat: 2,
      cheese: 1,
      bacon: 1,
    },
  };

  componentDidMount() {
    const query = this.props.router.location.search
      .slice(1)
      .split("&")
      .map((q) => q.split("="));

    let ingredients = {};

    query.map((arr) => {
      const [key, val] = [arr[0], +arr[1]];
      ingredients[key] = val;
    });

    this.setState({ ingredients });
  }

  CheckoutCancelled = () => {
    this.props.router.navigate(-1);
  };

  CheckoutContinued = () => {
    this.props.router.navigate(
      `${this.props.router.location.pathname}/contact-data`
    );
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckoutCancelled={this.CheckoutCancelled}
          onCheckoutContinued={this.CheckoutContinued}
        />

        <Outlet />
      </div>
    );
  }
}

export default withRouter(Checkout);
