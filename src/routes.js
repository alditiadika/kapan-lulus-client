import React from "react";
import Loadable from "react-loadable";
import "./views/utils/spinner/style.css";
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
const DashboardComponent = Loadable({
  loader: () => import("./views/components/dashboard"),
  loading: Loading
});
const ErrorComponent = Loadable({
  loader: () => import("./views/error"),
  loading: Loading
});
const TestComponent = Loadable({
  loader: () => import("./views/components/test"),
  loading: Loading
});
export const Error = { Path: "/error", render: ErrorComponent };
export const Login = { path: "/", render: LoginComponent };

// navbar nya bangsat, jadi jangan sampai komponen yang gapunya navbar indexnya lebih tinggi dari yang punya navbar
export const routesAfterLogin = [
  { path: "/test", render: TestComponent, index: 1 },
  { path: "/dashboard", render: DashboardComponent, index: 100 },
  { path: "/", render: DashboardComponent, index: 101 }
].sort((a, b) => (a.index < b.index ? -1 : 1));
