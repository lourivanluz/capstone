import { Route, Switch } from "react-router";
import { About } from "../Pages/ About";
import { BoxDeteil } from "../Pages/BoxDeteil";
import { BuyConfirm } from "../Pages/BuyConfirm";
import { Home } from "../Pages/Home";
import { Products } from "../Pages/Products";
import { ProductsDeteil } from "../Pages/ProductsDeteil";
import { Register } from "../Pages/Register";

export const Routers = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/products">
        <Products />
      </Route>
      <Route path="/products/:id">
        <ProductsDeteil />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/boxDeteil/:id">
        <BoxDeteil />
      </Route>
      <Route path="/confirm">
        <BuyConfirm />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
    </Switch>
  );
};
