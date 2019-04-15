import React from "react";
import {
  NavItem,
  NavLink,
  Nav,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import classnames from "classnames";
export default class extends React.Component {
  state = {
    iconTabs: 1,
    nameShow: false,
    arrowClick: false
  };

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };

  render() {
    return (
      <Nav
        className="nav-tabs-info"
        role="tablist" /*tabs={this.props.isTabs}*/
      >
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
            href="#"
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
            href="#"
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
            href="#"
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
            href="#"
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
            href="#"
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
            href="#"
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
            href="#"
          >
            <i className="tim-icons icon-bag-16" />
            {this.state.nameShow && "TEXT"}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            <img
              alt="..."
              className="img-fluid rounded-circle shadow-lg"
              src={require("assets/img/james.jpg")}
              style={{ width: "20px", height: "20px" }}
            />
          </NavLink>
        </NavItem>
        <NavItem>
          <UncontrolledDropdown>
            <DropdownToggle
              caret
              color="default"
              data-toggle="dropdown"
              href="#"
              id="navbarDropdownMenuLink"
              nav
              onClick={e => e.preventDefault()}
            >
              <i
                aria-hidden={true}
                className="tim-icons icon-settings-gear-63"
              />
            </DropdownToggle>
            <DropdownMenu
              style={{ backgroundColor: "black" }}
              aria-labelledby="navbarDropdownMenuLink"
              right
            >
              <DropdownItem header>Pilihan</DropdownItem>
              <DropdownItem href="#" onClick={e => e.preventDefault()}>
                Pengaturan
              </DropdownItem>
              <DropdownItem
                href="#"
                onClick={e => {
                  e.preventDefault();
                  localStorage.clear();
                  window.location.href = "/";
                }}
              >
                Keluar
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </NavItem>
      </Nav>
    );
  }
}
