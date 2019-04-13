import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  Container,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledCarousel
} from "reactstrap";

import { mapStateToProps } from "./actions";
import Nav from "../../utils/navbar";
import Footer from "../../utils/footer";

class Dashboard extends React.Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <FirstRegister />
        <Container>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <InputGroup>
                    <Input
                      placeholder="Cari Dosen pembimbing"
                      color="black"
                      onKeyPress={event =>
                        event.key === "Enter" && alert("SOON")
                      }
                      type="text"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i
                          onClick={() => alert("SOON")}
                          className="fa fa-search"
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup>
                    <Input
                      placeholder="Cari Universitas"
                      color="black"
                      onKeyPress={event =>
                        event.key === "Enter" && alert("SOON")
                      }
                      type="text"
                    />
                    <InputGroupAddon addonType="append">
                      <InputGroupText>
                        <i
                          onClick={() => alert("SOON")}
                          className="fa fa-search"
                        />
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <Row>
                <Col>
                  <a href={window.location.hash}>0</a> Permintaan belum terjawab
                  | <a href={window.location.hash}>0</a> Dosen Pembimbing |{" "}
                  <a href={window.location.hash}>Undang Dosen</a>
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
                      src={require("assets/img/mike.jpg")}
                      style={{ height: "40px", width: "40px" }}
                    />
                    <br />
                    <br />
                    <p>Selamat datang Administrator</p>
                    <p>
                      <a href={window.location.hash}>Perbaharui Profil anda</a>
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col>
              <Card>
                <CardBody>
                  <p>
                    Bidang Studi: <a href={window.location.hash}>Fisika</a>
                  </p>
                  <div className="text-center">
                    *Mohon Maaf saat ini anda belum memiliki dosen pembimbing,
                    anda diperbolehkan memilih maksimal 2 dosen pembimbing
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col className="col-sm-4">
              <Card>
                <CardBody>
                  <p>Beasiswa Terkini</p>
                  <Carousel />
                  <br />
                  <div className="text-center">
                    <Button>Selengkapnya</Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
        <Footer />
      </Fragment>
    );
  }
}
export default connect(mapStateToProps)(Dashboard);

class FirstRegister extends React.Component {
  render() {
    return (
      <Container style={{ marginTop: "100px" }}>
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            Hai Administrator selamat datang, mulai gunakan KAPAN• Lulus dengan
            3 langkah mudah:
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ height: "220px" }}>
              <CardBody>
                <div className="text-center">
                  <p>
                    <strong>1. Perkenalkan diri anda</strong>
                  </p>
                  <br />
                  <p>
                    Lengkapi profil anda guna meningkatkan kesuksesan anda di
                    KAPAN• Lulus
                  </p>
                  <br />
                  <br />
                  <p>
                    <Button>Lengkapi Profil</Button>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: "220px" }}>
              <CardBody>
                <div className="text-center">
                  <p>
                    <strong>2. Temukan dosen pembimbing anda</strong>
                  </p>
                  <br />
                  <p>
                    Disini anda dapat mencari dosen pembimbing yang sesuai
                    dengan minat penelitian anda dari berbagai bidang studi
                  </p>
                  <br />
                  <p>
                    <Button>Temukan dosen pembimbing</Button>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Card style={{ height: "220px" }}>
              <CardBody>
                <div className="text-center">
                  <p>
                    <strong>3. Ketahui info seputar minat anda</strong>
                  </p>
                  <br />
                  <p>
                    Proyek dosen mungkin bisa jadi inspirasi anda untuk tugas
                    akhir, temukan juga info seputar dana penelitian serta
                    referensi jurnal anda
                  </p>
                  <br />
                  <p>
                    <Button>Info seputar topik penelitian</Button>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

const carouselItems = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925835%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925835%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.45%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1",
    caption: "Picture 1"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925837%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925837%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.45%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: "Picture 2"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925838%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925838%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.45%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: "Picture 3"
  }
];

class Carousel extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={carouselItems} />
      </>
    );
  }
}
