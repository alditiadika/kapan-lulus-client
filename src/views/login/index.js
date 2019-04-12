import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  UncontrolledTooltip,
  Alert
} from "reactstrap";

// core components
import Navbar from "../navbar-login";
import Footer from "../footer";
import { mapStateToProps, mapDispatchToProps } from "./actions";
import Loader from "./loader";

class RegisterPage extends React.Component {
  state = {
    iconTabs: 1,
    isNeedRefresh: false,
    isEmpty: false
  };
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    })
  };
  render() {
    if (this.state.isEmpty) {
      setTimeout(() => {
        this.setState({ isEmpty: false });
      }, 10000);
    }
    return (
      <>
        <Navbar
          login={this.props.login}
          isNeedRefresh={this.state.isNeedRefresh}
          refreshRequest={status => this.setState({ isNeedRefresh: status })}
          emptyReport={status => this.setState({ isEmpty: status })}
          isEmpty={this.state.isEmpty}
        />
        <div className="wrapper">
          <div className="page-header">
            <div className="page-header-image" />
            <div className="content">
              <Loader isNeedRefresh={this.state.isNeedRefresh} />
              {((this.props.auth.status !== null &&
                this.props.auth.status !== 200) ||
                this.state.isEmpty) && (
                <Alert
                  style={{ marginLeft: "200px", width: "800px" }}
                  className="alert-with-icon"
                  color="info"
                >
                  <span
                    data-notify="icon"
                    className="tim-icons icon-support-17"
                  />
                  <span>Username atau password tidak cocok, </span>
                  <span>
                    <a style={{ color:'red' }} href={window.location.hash}>lupa password?</a>
                  </span>
                </Alert>
              )}
              <Container>
                <Row>
                  <Col className="offset-lg-0 offset-md-3" lg="5" md="6">
                    <Card className="card-register">
                      <CardBody>
                        <h3 className="mt-2 ml-2">
                          Era Baru Bimbingan Tugas Akhir
                        </h3>
                        <h3 className="ml-2">Gabung Sekarang sebagai:</h3>
                        <Nav className="nav-tabs-info" role="tablist" tabs>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.iconTabs === 1
                              })}
                              onClick={e => this.toggleTabs(e, "iconTabs", 1)}
                              href={window.location.hash}
                            >
                              <i className="tim-icons icon-spaceship" />
                              Mahasiswa
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink
                              className={classnames({
                                active: this.state.iconTabs === 2
                              })}
                              onClick={e => this.toggleTabs(e, "iconTabs", 2)}
                              href={window.location.hash}
                            >
                              <i className="tim-icons icon-settings-gear-63" />
                              Dosen
                            </NavLink>
                          </NavItem>
                        </Nav>
                        <Form className="form">
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.fullNameFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-single-02" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Nama Lengkap"
                              type="text"
                              onFocus={e =>
                                this.setState({ fullNameFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ fullNameFocus: false })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.emailFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-email-85" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Email"
                              type="text"
                              onFocus={e => this.setState({ emailFocus: true })}
                              onBlur={e => this.setState({ emailFocus: false })}
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.passwordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Password"
                              type="text"
                              onFocus={e =>
                                this.setState({ passwordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ passwordFocus: false })
                              }
                            />
                          </InputGroup>
                          <InputGroup
                            className={classnames({
                              "input-group-focus": this.state.repasswordFocus
                            })}
                          >
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>
                                <i className="tim-icons icon-lock-circle" />
                              </InputGroupText>
                            </InputGroupAddon>
                            <Input
                              placeholder="Re-Password"
                              type="text"
                              onFocus={e =>
                                this.setState({ repasswordFocus: true })
                              }
                              onBlur={e =>
                                this.setState({ repasswordFocus: false })
                              }
                            />
                          </InputGroup>
                          <FormGroup check className="text-left">
                            <Label check>
                              <Input type="checkbox" />
                              <span className="form-check-sign" />
                              Dengan ini saya menyetujui{" "}
                              <a
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                syarat dan ketentuan
                              </a>
                              .
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        <Button className="mr-5" color="info" size="lg">
                          Daftar
                        </Button>
                        <Button
                          className="btn-icon btn-neutral btn-round btn-simple mr-2"
                          color="default"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip23045080110"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-square" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip23045080110"
                        >
                          Daftar dengan Facebook
                        </UncontrolledTooltip>
                        <Button
                          className="btn-icon btn-neutral btn-round btn-simple"
                          color="default"
                          href="https://www.facebook.com/creativetim"
                          id="tooltip230450801101"
                          target="_blank"
                        >
                          <i className="fab fa-google-plus" />
                        </Button>
                        <UncontrolledTooltip
                          delay={0}
                          target="tooltip230450801101"
                        >
                          Daftar dengan Gmail
                        </UncontrolledTooltip>
                      </CardFooter>
                    </Card>
                  </Col>
                </Row>
                <div className="register-bg" />
              </Container>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
