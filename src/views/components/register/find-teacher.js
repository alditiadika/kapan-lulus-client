import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  UncontrolledCarousel
} from "reactstrap";

export default class extends React.Component {
  state = {
    row: new Array(3).fill(0),
    col: new Array(3).fill(0)
  };
  render() {
    return (
      <Container>
        {/* <Card style={{ marginBottom: "10px" }}>
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
        </Card> */}
        <Card style={{ marginBottom: "10px" }}>
          <CardBody>
            <Row>
              <Col>
                <a href={window.location.hash}>0</a> Permintaan belum terjawab |{" "}
                <a href={window.location.hash}>0</a> Dosen Pembimbing
                {/* <a href={window.location.hash}>Undang Dosen</a> */}
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row>
          <Col className="col-sm-3">
            <Card>
              <CardBody>
                <p>Profil Saya</p>
                <div className="text-center">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow-lg"
                    src={
                      "data:image/jpeg;base64,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"
                    }
                    style={{ height: "40px", width: "40px" }}
                  />
                  <br />
                  <br />
                  <p>
                    <a href="#!" onClick={() => this.props.changeComponent(1)}>
                      Perbaharui Profil anda
                    </a>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col>
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
                        <Card style={{ backgroundColor: "#C6D7DF" }}>
                          <CardBody>
                            <div className="text-center mb-3">
                              <img
                                alt="..."
                                className="img-fluid rounded-circle shadow-lg"
                                src={
                                  "data:image/jpeg;base64,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"
                                }
                                style={{ width: "20%", cursor: "pointer" }}
                              />
                            </div>
                            <div
                              style={{ color: "black" }}
                              className="text-center"
                            >
                              <a href="#!">
                                <strong style={{ color: "blue" }}>
                                  Randika Alditia
                                  <br />
                                </strong>
                              </a>
                              <small>
                                Profesor Theoretical Physics Bogor Agricultural
                                University
                                <br />
                                <a style={{ color: "blue" }} href="#!">
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
          </Col>

          <Col className="col-sm-3">
            <Card>
              <CardHeader>Beasiswa Terkini</CardHeader>
              <CardBody>
                <CarouselInternship />
                <br />
                <div className="text-center">
                  <a href="#!" onClick={() => this.props.changeComponent(3)}>
                    <small>Lainnya</small>
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const dataInternship = [
  {
    src:
      "https://www.inboundid.com/wp-content/uploads/2015/03/nutrifood-inboundid.png",
    altText: "Slide 1",
    caption: ""
  },
  {
    src:
      "http://asiatefl2017.uny.ac.id/sites/asiatefl2017.uny.ac.id/files/tanotofoundation.png",
    altText: "Slide 2",
    caption: ""
  },
  {
    src:
      "https://cdn.sindonews.net/dyn/620/content/2014/11/05/25/920306/batan-beri-beasiswa-pendidikan-untuk-anak-sulbar-Xcy.jpg",
    altText: "Slide 3",
    caption: ""
  }
];

class CarouselInternship extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={dataInternship} />
      </>
    );
  }
}
