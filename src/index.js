import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import { routes } from "./routes";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    {/*delete account in localStorage at first or browser reload*/}
    {localStorage.clear()}
    <BrowserRouter>
      <Switch>
        {routes.map((Item, i) => (
          <Route
            key={i}
            path={Item.path}
            render={props => <Item.render {...props} />}
          />
        ))}
        {!localStorage.token && <Redirect to="/login" />}
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
