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
                  <Row key={Math.random()}>
                    {this.state.col.map((_, i) => (
                      <Col key={Math.random()}>
                        <Card
                          style={{
                            backgroundColor: "#C6D7DF"
                          }}
                        >
                          <CardBody>
                            <div className="text-center mb-3">
                              <img
                                alt="..."
                                className="img-fluid shadow-lg"
                                src={listTeacher[i].photo}
                                style={{
                                  width: "80px",
                                  height: "50px",
                                  cursor: "pointer"
                                }}
                              />
                            </div>
                            <div
                              style={{ color: "black" }}
                              className="text-center"
                            >
                              <a href="#!">
                                <strong style={{ color: "blue" }}>
                                  {listTeacher[i].name}
                                  <br />
                                </strong>
                              </a>
                              <small>
                                <br />
                                <a
                                  style={{
                                    color: "blue",
                                    paddingBottom: "0px"
                                  }}
                                  href={listTeacher[i].goto}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
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
const listTeacher = [
  {
    goto: "https://scholar.google.co.id/citations?user=mk9mz_cAAAAJ&hl=id",
    name: "Akhiruddin",
    photo: "http://fi.uhamka.ac.id/images/kuliahumum19052017.jpg"
  },
  {
    goto: "https://scholar.google.com/citations?user=fdvmmEwAAAAJ&hl=en",
    name: "Husin Alatas",
    photo:
      "data:image/jpeg;base64,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"
  },
  {
    goto: "https://scholar.google.com/citations?user=pvzTqlQAAAAJ&hl=en",
    name: "Tony Sumaryada",
    photo: "http://fisika.ui.ac.id/images/Foto_Seminar/TonyS_PhD_gallery1.jpg"
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
