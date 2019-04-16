import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  UncontrolledCarousel
} from "reactstrap";

export default class extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="col-sm-3">
            <Card style={{ marginBottom: "10px" }}>
              <CardHeader>Dosen Pembimbing</CardHeader>
              <CardBody>
                <Row>
                  <Col className="col-sm-3">
                    <img
                      alt="..."
                      className="img-fluid rounded-circle shadow-lg ml-2"
                      src={require("assets/img/james.jpg")}
                      style={{ width: "100%", cursor: "pointer" }}
                    />
                  </Col>
                  <Col>
                    <a href="#!" className="ml-3 text-center">
                      Husin Alatas
                    </a>
                  </Col>
                </Row>
                <div className="text-center mt-3">
                  <a href="#!">Lainnya...</a>
                </div>
              </CardBody>
            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <CardHeader>Arsip</CardHeader>
              <CardBody>
                <p>Test</p>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-sm-6">
            <Card style={{ marginBottom: "10px" }}>
              <CardBody>
                <div className="text-center mb-3">
                  <img
                    alt="..."
                    className="img-fluid rounded-circle shadow-lg"
                    src={require("assets/img/james.jpg")}
                    style={{ width: "20%", cursor: "pointer" }}
                  />
                </div>
                <div className="text-center">
                  <a href="#!">
                    <strong>
                      Randika Alditia
                      <br />
                    </strong>
                  </a>
                  <a href="#!">Mahasiswa Fisika</a>
                  <br />
                  <a href="#!">Institut Pertanian Bogor</a>
                  <br />
                  <a href="#!">Bogor, Jawa Barat, Indonesia (16680)</a>
                </div>
              </CardBody>
            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <CardBody>
                <Row style={{ marginBottom: "10px" }}>
                  <Col className="col-sm-4">Topik Penelitian:</Col>
                  <Col>
                    <a href="#!">Fisika Teori</a>
                  </Col>
                </Row>
                <Row>
                  <Col className="col-sm-4">Judul Penelitian:</Col>
                  <Col>
                    <a href="#!">
                      Analisa Ruang Parameter Persamaan Friedmann-Lemaitre pada
                      Teori Minimal Gravitasi Bermassa
                    </a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <CardHeader>
                <Row>
                  <Col>Artikel</Col>
                  <Col className="text-right">
                    <a href="#!">Tambah Artikel anda</a>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Carousel />
              </CardBody>
            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <CardHeader>Pendidikan</CardHeader>
              <CardBody>
                <Row style={{ marginBottom: "10px" }}>
                  <Col className="col-sm-3">SD:</Col>
                  <Col>
                    <a href="#!">SDN 01 Curup Patah</a>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col className="col-sm-3">SMP:</Col>
                  <Col>
                    <a href="#!">SMPN 04 Gunung Labuhan</a>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col className="col-sm-3">SMA:</Col>
                  <Col>
                    <a href="#!">SMAN 01 Bukit Kemuning</a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
            <Card style={{ marginBottom: "50px" }}>
              <CardHeader>Pengalaman</CardHeader>
              <CardBody>
                <Row style={{ marginBottom: "10px" }}>
                  <Col className="col-sm-3">SD:</Col>
                  <Col>
                    <a href="#!">SDN 01 Curup Patah</a>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col className="col-sm-3">SMP:</Col>
                  <Col>
                    <a href="#!">SMPN 04 Gunung Labuhan</a>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "10px" }}>
                  <Col className="col-sm-3">SMA:</Col>
                  <Col>
                    <a href="#!">SMAN 01 Bukit Kemuning</a>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col className="col-sm-3">
            <Card style={{ marginBottom: "10px" }}>
              <CardHeader>Logbook Tugas Akhir</CardHeader>
              <CardBody>
                <p>Test</p>
              </CardBody>
            </Card>
            <Card style={{ marginBottom: "10px" }}>
              <CardHeader>Beasiswa Terkini</CardHeader>
              <CardBody>
                <Carousel />
                <br />
                <div
                  onClick={() => (window.location.href = "/internship")}
                  className="text-center"
                >
                  <a href="#!">
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

const carouselItems = [
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925835%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925835%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.45%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 1",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925837%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925837%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.45%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 2",
    caption: ""
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_1692f925838%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_1692f925838%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.45%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Slide 3",
    caption: ""
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
