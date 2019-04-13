import React, { Fragment } from "react";
import { connect } from "react-redux";

import { mapStateToProps } from "./actions";
import Nav from "../../utils/navbar";
import Footer from "../../utils/footer";

class Dashboard extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <div style={{ height: "1000px" }} />
        <Footer />
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(Dashboard);
