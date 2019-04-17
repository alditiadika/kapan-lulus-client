import React from "react";
import { connect } from "react-redux";
import {
  Card,
  CardBody,
  Row,
  Col,
  // Button,
  Container,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  UncontrolledCarousel
} from "reactstrap";

import { mapStateToProps } from "./actions";

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        {/* <Card>
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
        <Card>
          <CardBody>
            <Row>
              <Col>
                <a href={window.location.hash}>0</a> Permintaan belum terjawab |{" "}
                <a href={window.location.hash}>0</a> Dosen Pembimbing |{" "}
                <a href="#!" onClick={() => this.props.changeComponent(2)}>
                  Undang Dosen
                </a>
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
                    src={require("assets/img/james.jpg")}
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
export default connect(mapStateToProps)(Dashboard);

const carouselItems = [
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

class Carousel extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={carouselItems} />
      </>
    );
  }
}
