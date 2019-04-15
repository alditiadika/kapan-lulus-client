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
import Navbar from "../utils/navbar-login";
import Footer from "../utils/footer";
import { mapStateToProps, mapDispatchToProps } from "./actions";
import Loader from "../utils/spinner";
import First from "./modal-register/first";
import Second from "./modal-register/second";
import Third from "./modal-register/third";
import Fourth from "./modal-register/fourth";
import Fifth from "./modal-register/fifth";
import End from "./modal-register/end";
// import { isEmpty, emailValidator } from "../../validator";

class RegisterPage extends React.Component {
  state = {
    iconTabs: 1,
    isNeedRefresh: false,
    isEmpty: false,
    modalOpen: {
      first: false,
      second: false,
      third: false,
      fourth: false,
      fifth: false,
      end: false
    },
    formdata: {
      role: { id: 2, name: "Mahasiswa" },
      name: "",
      email: "",
      password: "",
      rePassword: "",
      isAgree: true
    },
    warning: { status: false, message: "" }
  };
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  changeFormData = (name, value) =>
    this.setState({
      warning: false,
      formdata: {
        ...this.state.formdata,
        [name]: value
      }
    });
  validator = () => {
    // let role = !isEmpty(this.state.formdata.role);
    // let name = !isEmpty(this.state.formdata.name);
    // let email = emailValidator(this.state.formdata.email);
    // let password = this.state.formdata.password.length >= 6;
    // let rePassword =
    //   this.state.formdata.password === this.state.formdata.rePassword;
    // if (!role || !name) {
    //   this.setState({
    //     warning: {
    //       status: true,
    //       message: "harap isi semua data"
    //     }
    //   });
    // } else if (!password) {
    //   this.setState({
    //     warning: {
    //       status: true,
    //       message: "Password setidaknya 6 karaketer"
    //     }
    //   });
    // } else if (!rePassword) {
    //   this.setState({
    //     warning: {
    //       status: true,
    //       message: "Kombinasi password tidak cocok"
    //     }
    //   });
    // } else if (!email) {
    //   this.setState({
    //     warning: {
    //       status: true,
    //       message: "Email tidak valid"
    //     }
    //   });
    // } else {
    //   this.setState({
    //     modalOpen: {
    //       ...this.state.modalOpen,
    //       first: true
    //     }
    //   });
    // }
    this.setState({
      modalOpen: {
        ...this.state.modalOpen,
        first: true
      }
    });
  };
  render() {
    if (this.state.isEmpty) {
      setTimeout(() => {
        this.setState({ isEmpty: false });
      }, 10000);
    }
    return (
      <>
        {this.state.modalOpen.first && (
          <First
            close={() =>
              this.setState({
                modalOpen: { ...this.state.modalOpen, first: false }
              })
            }
            next={() =>
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  first: false,
                  second: true
                }
              })
            }
            name={this.state.formdata.name.split(" ")[0]}
          />
        )}
        {this.state.modalOpen.second && (
          <Second
            close={() =>
              this.setState({
                modalOpen: { ...this.state.modalOpen, second: false }
              })
            }
            next={() =>
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  second: false,
                  third: true
                }
              })
            }
            before={() => {
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  second: false,
                  first: true
                }
              });
            }}
          />
        )}
        {this.state.modalOpen.third && (
          <Third
            close={() =>
              this.setState({
                modalOpen: { ...this.state.modalOpen, third: false }
              })
            }
            next={() =>
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  third: false,
                  fourth: true
                }
              })
            }
            before={() => {
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  third: false,
                  second: true
                }
              });
            }}
          />
        )}
        {this.state.modalOpen.fourth && (
          <Fourth
            close={() =>
              this.setState({
                modalOpen: { ...this.state.modalOpen, fourth: false }
              })
            }
            next={() =>
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  fourth: false,
                  fifth: true
                }
              })
            }
            before={() => {
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  fourth: false,
                  third: true
                }
              });
            }}
          />
        )}
        {this.state.modalOpen.fifth && (
          <Fifth
            close={() =>
              this.setState({
                modalOpen: { ...this.state.modalOpen, fifth: false }
              })
            }
            next={() =>
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  fifth: false,
                  end: true
                }
              })
            }
            before={() => {
              this.setState({
                modalOpen: {
                  ...this.state.modalOpen,
                  fifth: false,
                  fourth: true
                }
              });
            }}
          />
        )}
        {this.state.modalOpen.end && (
          <End
            close={() =>
              this.setState({
                modalOpen: { ...this.state.modalOpen, end: false }
              })
            }
          />
        )}
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
                              onClick={e => {
                                this.toggleTabs(e, "iconTabs", 1);
                                this.changeFormData("role", {
                                  id: 2,
                                  name: "Mahasiswa"
                                });
                              }}
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
                              onClick={e => {
                                this.toggleTabs(e, "iconTabs", 2);
                                this.changeFormData("role", {
                                  id: 2,
                                  name: "Dosen"
                                });
                              }}
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
                              value={this.state.formdata.name}
                              onKeyPress={e =>
                                e.key === "Enter" && this.validator()
                              }
                              onChange={e =>
                                this.changeFormData("name", e.target.value)
                              }
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
                              value={this.state.formdata.email}
                              onKeyPress={e =>
                                e.key === "Enter" && this.validator()
                              }
                              onChange={e =>
                                this.changeFormData("email", e.target.value)
                              }
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
                              type="password"
                              value={this.state.formdata.password}
                              onKeyPress={e =>
                                e.key === "Enter" && this.validator()
                              }
                              onChange={e =>
                                this.changeFormData("password", e.target.value)
                              }
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
                              type="password"
                              value={this.state.formdata.rePassword}
                              onKeyPress={e =>
                                e.key === "Enter" && this.validator()
                              }
                              onChange={e =>
                                this.changeFormData(
                                  "rePassword",
                                  e.target.value
                                )
                              }
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
                              <Input
                                checked={this.state.formdata.isAgree}
                                onChange={() => {
                                  this.changeFormData(
                                    "isAgree",
                                    !this.state.formdata.isAgree
                                  );
                                }}
                                type="checkbox"
                              />
                              <span className="form-check-sign" />
                              Dengan ini saya menyetujui{" "}
                              <a href="#!">syarat dan ketentuan</a>.
                            </Label>
                          </FormGroup>
                        </Form>
                      </CardBody>
                      <CardFooter>
                        {this.state.warning.status && (
                          <Alert color="danger">
                            {this.state.warning.message}
                          </Alert>
                        )}
                        <Button
                          onClick={this.validator}
                          className="mr-5"
                          color="info"
                          size="lg"
                        >
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
