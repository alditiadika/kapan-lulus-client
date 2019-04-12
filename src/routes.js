import React from "react";
import Loadable from "react-loadable";
import "./views/login/loader-style.css";
const Loading = () => {
  return (
    <span>
      <div className="lds-dual-ring" />{" "}
      <h1>
        <strong>LOADING...</strong>
      </h1>
    </span>
  );
};
const LoginComponent = Loadable({
  loader: () => import("./views/login"),
  loading: Loading
});
export const routes = [{ path: "/login", render: LoginComponent }];
