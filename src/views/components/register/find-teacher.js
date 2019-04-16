import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup
} from "reactstrap";

export default class extends React.Component {
  state = {
    row: new Array(4).fill(0),
    col: new Array(5).fill(0)
  };
  render() {
    return (
      <Container>
        <Card style={{ marginBottom: "10px" }}>
          <CardBody>
            <Row>
              <Col>
                <InputGroup>
                  <Input
                    placeholder="Cari Dosen pembimbing"
                    color="black"
                    onKeyPress={event => event.key === "Enter" && alert("SOON")}
                    type="text"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <a
                        onClick={() => alert("SOON")}
                        href="#!"
                        className="fa fa-search"
                      >
                        {" "}
                      </a>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
              <Col>
                <InputGroup>
                  <Input
                    placeholder="Cari Universitas"
                    color="black"
                    onKeyPress={event => event.key === "Enter" && alert("SOON")}
                    type="text"
                  />
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <a
                        onClick={() => alert("SOON")}
                        href="#!"
                        className="fa fa-search"
                      >
                        {" "}
                      </a>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card style={{ marginBottom: "10px" }}>
          <CardBody>
            <Row>
              <Col>
                <a href={window.location.hash}>0</a> Permintaan belum terjawab |{" "}
                <a href={window.location.hash}>0</a> Dosen Pembimbing |{" "}
                <a href={window.location.hash}>Undang Dosen</a>
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Card>
          <CardHeader>
            Bidang Studi: <a href="#!">Fisika</a>
          </CardHeader>
          <CardBody>
            <p className="mb-3">Institut Pertanian Bogor</p>
            {this.state.row.map(() => (
              <Row>
                {this.state.col.map(() => (
                  <Col>
                    <Card style={{ backgroundColor: "#27A7E4" }}>
                      <CardBody>
                        <div className="text-center mb-3">
                          <img
                            alt="..."
                            className="img-fluid rounded-circle shadow-lg"
                            src={require("assets/img/james.jpg")}
                            style={{ width: "20%", cursor: "pointer" }}
                          />
                        </div>
                        <div style={{ color: "black" }} className="text-center">
                          <a href="#!">
                            <strong style={{ color: "white" }}>
                              Randika Alditia
                              <br />
                            </strong>
                          </a>
                          <small>
                            Profesor Theoretical Physics Bogor Agricultural
                            University
                            <br />
                            <a style={{ color: "white" }} href="#!">
                              Selengkapnya
                            </a>
                          </small>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
            ))}
          </CardBody>
        </Card>
      </Container>
    );
  }
}
