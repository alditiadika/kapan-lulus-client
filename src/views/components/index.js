import React, { Fragment } from "react";
import { connect } from "react-redux";

import { mapStateToProps } from "../login/actions";
import Nav from "../utils/navbar";
import Footer from "../utils/footer";
import FirstRegister from "./register/first-register";
import ProfileComplete from "./register/profile-complete";
import FindTeacher from "./register/find-teacher";
import Topic from "./register/topic";
import Dashboard from "./dashboard";

class EntryPoint extends React.Component {
  state = {
    isFirstRegister: true,
    indexRender: 0
  };
  controller = indexRender => {
    if (indexRender === 1)
      return <ProfileComplete changeComponent={this.changeComponent} />;
    else if (indexRender === 2)
      return <FindTeacher changeComponent={this.changeComponent} />;
    else if (indexRender === 3)
      return <Topic changeComponent={this.changeComponent} />;
    else return <Dashboard changeComponent={this.changeComponent} />;
  };
  changeComponent = indexRender => {
    this.setState({ indexRender: indexRender });
  };
  render() {
    return (
      <Fragment>
        <Nav />
        {this.state.isFirstRegister && (
          <FirstRegister
            indexRender={this.state.indexRender}
            changeComponent={this.changeComponent}
          />
        )}
        {this.controller(this.state.indexRender)}
        <Footer />
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(EntryPoint);
