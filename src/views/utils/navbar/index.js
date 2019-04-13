import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  Container,
  Row,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col
} from "reactstrap";

import RightOptions from "./right-options";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      iconTabs: 1,
      nameShow: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.changeColor);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.changeColor);
  }
  changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      this.setState({
        color: /*"navbar-transparent"*/ "bg-success" /*"bg-success"*/
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        color: "navbar-transparent"
      });
    }
  };
  toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    console.log("masuk");
    this.setState({
      collapseOpen: !this.state.collapseOpen,
      nameShow: true
    });
  };
  onCollapseExiting = () => {
    console.log("tutup");
    this.setState({
      collapseOut: "collapsing-out",
      nameShow: false
    });
  };
  onCollapseExited = () => {
    console.log("exited");
    this.setState({
      collapseOut: ""
    });
  };
  render() {
    return (
      <Navbar
        className={"fixed-top " + this.state.color}
        color-on-scroll="100"
        expand="lg"
      >
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              data-placement="bottom"
              to="/"
              rel="noopener noreferrer"
              title="Designed and Coded by Creative Tim"
              tag={Link}
            >
              <span>KAPAN• </span>
              Lulus
            </NavbarBrand>
            <NavbarBrand>
              <InputGroup>
                <Input
                  placeholder="Search"
                  color="black"
                  onKeyPress={event => event.key === "Enter" && alert("SOON")}
                  type="text"
                />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i onClick={() => alert("SOON")} className="fa fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </NavbarBrand>
            <button
              aria-expanded={this.state.collapseOpen}
              className="navbar-toggler navbar-toggler"
              onClick={this.toggleCollapse}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse
            className={"justify-content-end " + this.state.collapseOut}
            navbar
            isOpen={this.state.collapseOpen}
            onExiting={this.onCollapseExiting}
            onExited={this.onCollapseExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    KAPAN• Lulus
                  </a>
                </Col>
                <Col className="collapse-close text-right" xs="6">
                  <button
                    aria-expanded={this.state.collapseOpen}
                    className="navbar-toggler"
                    onClick={this.toggleCollapse}
                  >
                    <i className="tim-icons icon-simple-remove" />
                  </button>
                </Col>
              </Row>
            </div>
            <RightOptions />
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
