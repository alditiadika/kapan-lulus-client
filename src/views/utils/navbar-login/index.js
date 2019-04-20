import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Button
} from "reactstrap";

import Loader from "../../utils/spinner";

class PagesNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapseOpen: false,
      color: "navbar-transparent",
      username: "",
      password: ""
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
        color: "bg-success"
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
    this.setState({
      collapseOpen: !this.state.collapseOpen
    });
  };
  onCollapseExiting = () => {
    this.setState({
      collapseOut: "collapsing-out"
    });
  };
  onCollapseExited = () => {
    this.setState({
      collapseOpen: false,
      collapseOut: ""
    });
  };

  onChangeInput = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => this.props.emptyReport(false)
    );
  };
  onLoginClick = () => {
    if (this.state.username === "" || this.state.password === "") {
      localStorage.setItem("wrong", true);
      window.location.href = "/wrong";
    } else {
      this.props.refreshRequest(true);
      this.props.login(
        {
          username: this.state.username,
          password: this.state.password
        },
        this.props.refreshRequest,
        () => this.props.emptyReport(true)
      );
    }
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
              title="KAPAN• Lulus"
              tag={Link}
            >
              <img
                src={require("../../../assets/img/logo.1.png")}
                alt="..."
                className="mr-1"
                style={{ width: "18px", height: "18px" }}
              />
              <span>KAPAN• </span>
              Lulus
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
                    KAPAN•Lulus
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
            <Nav navbar>
              <NavbarBrand>
                <InputGroup>
                  <Input
                    placeholder="Username"
                    onChange={this.onChangeInput}
                    onKeyPress={event =>
                      event.key === "Enter" && this.onLoginClick()
                    }
                    value={this.state.username}
                    name="username"
                    type="text"
                    disabled={
                      this.props.isNeedRefresh || this.props.interruptAllAction
                    }
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="fa fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </NavbarBrand>
              <NavbarBrand>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    type="password"
                    name="password"
                    onChange={this.onChangeInput}
                    onKeyPress={event =>
                      event.key === "Enter" && this.onLoginClick()
                    }
                    value={this.state.password}
                    disabled={
                      this.props.isNeedRefresh || this.props.interruptAllAction
                    }
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="tim-icons icon-lock-circle" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </NavbarBrand>
              <NavbarBrand>
                <div className="btn-wrapper">
                  <Button
                    color="info"
                    onClick={this.onLoginClick}
                    rel="noopener noreferrer"
                    target="_blank"
                    disabled={
                      this.props.isNeedRefresh || this.props.interruptAllAction
                    }
                  >
                    Login
                  </Button>
                </div>
              </NavbarBrand>
              <div className="text-center">
                {this.state.collapseOpen && (
                  <Loader isNeedRefresh={this.props.isNeedRefresh} />
                )}
              </div>
              <NavItem className="p-0 mt-2">
                <NavLink
                  data-placement="bottom"
                  href="https://twitter.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Twitter"
                >
                  <i className="fab fa-twitter" />
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0 mt-2">
                <NavLink
                  data-placement="bottom"
                  href="https://www.facebook.com/CreativeTim"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Like us on Facebook"
                >
                  <i className="fab fa-facebook-square" />
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
              </NavItem>
              <NavItem className="p-0 mt-2">
                <NavLink
                  data-placement="bottom"
                  href="https://www.instagram.com/CreativeTimOfficial"
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Follow us on Instagram"
                >
                  <i className="fab fa-instagram" />
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesNavbar;
