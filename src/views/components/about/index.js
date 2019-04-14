import React from "react";
import { connect } from "react-redux";
import { Row, Card, CardBody, Col, Container } from "reactstrap";

import Nav from "../../utils/navbar";
import Footer from "../../utils/footer";
import { mapStateToProps, mapDispatchToProps } from "./actions";

class About extends React.Component {
  render() {
    return (
      <>
        <Nav />
        <Container style={{ marginTop: "100px" }}>
          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col />
                  <Col>
                    <p>Perlu Bantuan</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col />
                  <Col>
                    <p>Bagaimana cara bergabung</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col className="col-sm-2" />
                  <p>Kenali Founder GetPro</p>
                  <br />
                  <br />
                  <Col className="col-sm-6" />
                </Row>
                <Row>
                  <Col />
                  <Col>
                    <Row>
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/james.jpg")}
                        style={{
                          height: "40px",
                          width: "40px",
                          margin: "auto"
                        }}
                      />
                    </Row>
                    <br />
                    <p className="text-center">Chief Executive Officer</p>
                    <p className="text-center">Randika Alditia</p>
                  </Col>
                  <Col>
                    <Row>
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/james.jpg")}
                        style={{
                          height: "40px",
                          width: "40px",
                          margin: "auto"
                        }}
                      />
                    </Row>
                    <br />
                    <p className="text-center">Chief Technical Officer</p>
                    <p className="text-center">Muhammad Sandy</p>
                  </Col>
                  <Col>
                    <Row>
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/james.jpg")}
                        style={{
                          height: "40px",
                          width: "40px",
                          margin: "auto"
                        }}
                      />
                    </Row>
                    <br />
                    <p className="text-center">Chief Financial Officer</p>
                    <p className="text-center">Royyan Faizin</p>
                  </Col>
                  <Col>
                    <Row>
                      <img
                        alt="..."
                        className="img-fluid rounded-circle shadow-lg"
                        src={require("assets/img/james.jpg")}
                        style={{
                          height: "40px",
                          width: "40px",
                          margin: "auto"
                        }}
                      />
                    </Row>
                    <br />
                    <p className="text-center">Chief Product Officer</p>
                    <p className="text-center">Deni Dahlan</p>
                  </Col>
                  <Col />
                </Row>
              </CardBody>
            </Card>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(About);
