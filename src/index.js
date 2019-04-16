import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";
import { routesAfterLogin as routes, Login, Error, Wrong } from "./routes";
import store from "./store";

if (localStorage.token) {
  let userData = JSON.parse(localStorage.getItem("user"));
  store.dispatch({
    type: "AUTH_AFTER_LOGIN",
    payload: {
      message: userData,
      status: 200
    }
  });
}

const isAvailableComponent = routes
  .map(e => e.path)
  .includes(window.location.pathname);
ReactDOM.render(
  <Provider store={store}>
    {/*delete account in localStorage at first or browser reload*/}
    {/* {localStorage.clear()} */}
    <BrowserRouter>
      {window.location.pathname === "/wrong" && localStorage.wrong ? (
        <Route render={props => <Wrong.render {...props} />} />
      ) : !localStorage.token ? (
        <Route render={props => <Login.render {...props} />} />
      ) : isAvailableComponent ? (
        <Switch>
          {routes.map((Item, i) => (
            <Route
              key={i}
              path={Item.path}
              render={props => <Item.render {...props} />}
            />
          ))}
        </Switch>
      ) : (
        <Route render={props => <Error.render {...props} />} />
      )}
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
