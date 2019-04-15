import React from "react";
import "./style.css";
export default class extends React.Component {
  render() {
    return (
      this.props.isNeedRefresh && (
        <div style={{ position: "fixed" }} className="lds-dual-ring" />
      )
    );
  }
}
