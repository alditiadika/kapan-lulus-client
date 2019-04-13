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
                  <Col>
                    <p>Perlu Bantuan</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Col>
                  <Col className="text-right">
                    <img
                      alt="..."
                      className="img-fluid shadow-lg"
                      src={require("assets/img/james.jpg")}
                      style={{ width: "60%" }}
                    />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col className="text-left">
                    <img
                      alt="..."
                      className="img-fluid shadow-lg"
                      src={require("assets/img/james.jpg")}
                      style={{ width: "60%" }}
                    />
                  </Col>
                  <Col>
                    <p>Bagaimana cara bergabung</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Row>
          <Row>
            <Card>
              <CardBody>
                <Row>
                  <Col>
                    <p>Apa yang GetPro berikan</p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                  </Col>
                  <Col className="text-right">
                    <img
                      alt="..."
                      className="img-fluid shadow-lg"
                      src={require("assets/img/james.jpg")}
                      style={{ width: "60%" }}
                    />
                  </Col>
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
