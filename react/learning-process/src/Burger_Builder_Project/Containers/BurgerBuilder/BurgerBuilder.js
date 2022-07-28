import React, { Component } from "react";
import Burger from "../../Components/Burger/Burger";
import BuildControls from "../../Components/Burger/BuildControls/BuildControls";
import Modal from "../../Components/UI/Modal/Modal";
import OrderSummary from "../../Components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../Components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

import axios from "../../axios-orders";

import withRouter from "../../hoc/withRouter/withRouter";

const INGREDIENT_PRICES = {
  salad: 0.2,
  cheese: 0.5,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    console.log(this.props.router);
    axios
      .get(
        "https://react-my-burger-e68ad-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json"
      )
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((res) => {
        this.setState({ error: true });
        new Error("Network error!");
      });
  }

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((sum, el) => sum + el, 0);

    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState(updatedIngredients);
  };

  purchasingHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };
  purchaseContinueHandler = () => {
    // alert("You continue!");
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Muhammed Fayad",
    //     address: {
    //       street: "sidi beshr",
    //       zipCode: 52315,
    //       country: "Egypt",
    //     },
    //     email: "mo@gmail.com",
    //   },
    //   deliveryMethod: "fastest",
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((res) => {
    //     console.log(res);
    //     this.setState({
    //       loading: false,
    //       purchasing: false,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     this.setState({
    //       loading: false,
    //       purchasing: false,
    //     });
    //   });

    const params = [];
    for (const ing in this.state.ingredients) {
      //   console.log(ing, this.state.ingredients[ing]);
      params.push(
        `${encodeURIComponent(ing)}=${encodeURIComponent(
          this.state.ingredients[ing]
        )}`
      );
    }

    this.props.router.navigate({
      pathname: "/checkout",
      search: `?${params.join("&")}`,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    if (this.state.ingredients)
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
          price={this.state.totalPrice}
        />
      );

    if (this.state.loading) orderSummary = <Spinner />;

    return (
      <>
        <Modal
          modalClosed={this.purchaseCancelHandler}
          show={this.state.purchasing}
        >
          {orderSummary}
        </Modal>

        {this.state.ingredients ? (
          <>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
              ingredientAdded={this.addIngredientHandler}
              ingredientRemoved={
                this.removeIngredientHandler
              }
              disabled={disabledInfo}
              purchasable={this.state.purchasable}
              price={this.state.totalPrice}
              purchasing={this.purchasingHandler}
            />
          </>
        ) : this.state.error ? (
          <h2 style={{ textAlign: "center" }}>
            ingredinets can't be loaded!
          </h2>
        ) : (
          <Spinner />
        )}
      </>
    );
  }
}

export default withRouter(
  withErrorHandler(BurgerBuilder, axios)
);
