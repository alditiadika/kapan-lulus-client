import React from "react";
import { NavItem, NavLink, Nav } from "reactstrap";
import classnames from "classnames";
export default class extends React.Component {
  state = {
    iconTabs: 1,
    nameShow: false
  };

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    return (
      <Nav className="nav-tabs-info" role="tablist" /*tabs*/>
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.iconTabs === 6
            })}
            style={{
              width: this.state.nameShow ? "100%" : "",
              marginBottom: this.state.nameShow ? "10px" : ""
            }}
            onClick={e => this.toggleTabs(e, "iconTabs", 6)}
            href="#pablo"
          >
            Forum
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.iconTabs === 7
            })}
            style={{
              width: this.state.nameShow ? "100%" : "",
              marginBottom: this.state.nameShow ? "10px" : ""
            }}
            onClick={e => this.toggleTabs(e, "iconTabs", 7)}
            href="#pablo"
          >
            Info
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.iconTabs === 1
            })}
            style={{
              width: this.state.nameShow ? "100%" : "",
              marginBottom: this.state.nameShow ? "10px" : ""
            }}
            onClick={e => this.toggleTabs(e, "iconTabs", 1)}
            href="#pablo"
          >
            <i className="tim-icons icon-spaceship" />
            {this.state.nameShow && "TEXT"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.iconTabs === 2
            })}
            style={{
              width: this.state.nameShow ? "100%" : "",
              marginBottom: this.state.nameShow ? "10px" : ""
            }}
            onClick={e => this.toggleTabs(e, "iconTabs", 2)}
            href="#pablo"
          >
            <i className="tim-icons icon-settings-gear-63" />
            {this.state.nameShow && "TEXT"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.iconTabs === 3
            })}
            style={{
              width: this.state.nameShow ? "100%" : "",
              marginBottom: this.state.nameShow ? "10px" : ""
            }}
            onClick={e => this.toggleTabs(e, "iconTabs", 3)}
            href="#pablo"
          >
            <i className="tim-icons icon-bag-16" />
            {this.state.nameShow && "TEXT"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.iconTabs === 4
            })}
            style={{
              width: this.state.nameShow ? "100%" : "",
              marginBottom: this.state.nameShow ? "10px" : ""
            }}
            onClick={e => this.toggleTabs(e, "iconTabs", 4)}
            href="#pablo"
          >
            <i className="tim-icons icon-bag-16" />
            {this.state.nameShow && "TEXT"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({
              active: this.state.iconTabs === 5
            })}
            style={{
              width: this.state.nameShow ? "100%" : "",
              marginBottom: this.state.nameShow ? "10px" : ""
            }}
            onClick={e => this.toggleTabs(e, "iconTabs", 5)}
            href="#pablo"
          >
            <i className="tim-icons icon-bag-16" />
            {this.state.nameShow && "TEXT"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={window.location.hash}>
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/mike.jpg")}
              style={{ width: "20px", height: "20px" }}
            />
          </NavLink>
        </NavItem>
      </Nav>
    );
  }
}
