import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  Container,
  Input,
  InputGroupText,
  InputGroup,
  InputGroupAddon
} from "reactstrap";

export default class extends React.Component {
  render() {
    return (
      <Container>
        <Col />
        <Col style={{ width: "70%", margin: "auto", marginTop: "100px" }}>
          <Card>
            <CardHeader>Password atau Username anda tidak cocok</CardHeader>
            <CardBody>
              <Row style={{ margin: "auto" }}>
                <InputGroup>
                  <Input
                    placeholder="Username"
                    // onChange={this.onChangeInput}
                    // onKeyPress={event =>
                    //   event.key === "Enter" && this.onLoginClick()
                    // }
                    // value={this.state.username}
                    // name="username"
                    type="text"
                    // disabled={this.props.isNeedRefresh}
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="fa fa-user" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
              <Row style={{ margin: "auto" }}>
                <InputGroup>
                  <Input
                    placeholder="Password"
                    // onChange={this.onChangeInput}
                    // onKeyPress={event =>
                    //   event.key === "Enter" && this.onLoginClick()
                    // }
                    // value={this.state.username}
                    // name="username"
                    type="text"
                    // disabled={this.props.isNeedRefresh}
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="tim-icons icon-lock-circle" />
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Row>
              <Row className="ml-1 mb-2">
                <a href="#!">
                  <small>Lupa Akun?</small>
                </a>
              </Row>
              <Row className="ml-1 mb-2">
                <small>
                  Belum punya akun? <a href="#!">Daftar</a>
                </small>
              </Row>
              <Row>
                <Button className="ml-3" color="info">
                  Login
                </Button>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col />
      </Container>
    );
  }
}
