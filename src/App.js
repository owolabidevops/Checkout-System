import React, { useEffect, useState } from "react";
import "./App.css";

import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Chekout from "./Chekout";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const promise = loadStripe(
    "pk_test_51HQYRhCVWmSReMepV6i0cu8j712mxuJUEIHus2qeZ9N7LXgU3bAKGdQm01c1J3U9y4eTMbzhOkj2eN9m9dMOcTwN00TBHZPSmm"
  );
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
          </Route>
          <Route path="/checkout">
            <Header />
            <Chekout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          {/* the last one is the default route start page*/}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
