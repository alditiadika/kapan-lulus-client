import React from "react";
import Navbar from "../../utils/navbar";
export default class extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <div className="wrapper">
          <div className="page-header">
            <div className="content">
              <h1>TEST PAGE</h1>
              <div style={{ height: "1000px" }} />
            </div>
          </div>
        </div>
      </>
    );
  }
}
