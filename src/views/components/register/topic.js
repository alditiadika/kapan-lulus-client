import React from "react";
import classnames from "classnames";
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  UncontrolledCarousel
} from "reactstrap";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

export default class extends React.Component {
  state = {
    iconTabs: 1,
    dummyArr: new Array(4).fill(0),
    category: "",
    status: "",
    data: {
      category: [
        { id: 1, label: "Fisika Medis" },
        { id: 2, label: "Fisika Instrumentasi" }
      ],
      status: [{ id: 1, label: "Ikatan Dinas" }],
      internship: [
        {
          id: 1,
          title: "Fokus Diabetes Tipe 2",
          from: "Nutrifood",
          location: "Kawasan Industri Pulogadung Jl. Rawabali II No. 3",
          type: "Makanan & Minuman Kesehatan"
        }
      ]
    }
  };

  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <Container>
        <Card style={{ marginBottom: "10px" }}>
          <CardBody>
            <Row>
              <Col>
                <a href="#!">0</a> Beasiswa Diterima | <a href="#!">0</a>{" "}
                Beasiswa Tersimpan
              </Col>
              <Col className="text-right">
                <a href="#!">0</a> Proyek Dosen Diterima | <a href="#!">0</a>{" "}
                Proyek Dosen Tersimpan
              </Col>
            </Row>
          </CardBody>
        </Card>
        <Row>
          <Col>
            <Card>
              <CardHeader style={{ paddingBottom: "10px" }}>
                <Nav className="nav-tabs-info" role="tablist" tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.iconTabs === 1
                      })}
                      onClick={e => {
                        this.toggleTabs(e, "iconTabs", 1);
                      }}
                      href={window.location.hash}
                    >
                      <i className="tim-icons icon-spaceship" />
                      Beasiswa Penelitian
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.iconTabs === 2
                      })}
                      onClick={e => {
                        this.toggleTabs(e, "iconTabs", 2);
                      }}
                      href={window.location.hash}
                    >
                      <i className="tim-icons icon-settings-gear-63" />
                      Proyek Dosen
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: this.state.iconTabs === 3
                      })}
                      onClick={e => {
                        this.toggleTabs(e, "iconTabs", 3);
                      }}
                      href={window.location.hash}
                    >
                      <i className="tim-icons icon-spaceship" />
                      Jurnal
                    </NavLink>
                  </NavItem>
                </Nav>
              </CardHeader>
              <CardBody>
                <Row className="mb-2">
                  <Col>
                    <InputLabel style={{ color: "white" }}>
                      <small>Kategori: </small>
                    </InputLabel>
                    <Select
                      style={{ width: "100%", color: "white" }}
                      value={this.state.category}
                      onChange={event =>
                        this.setState({ category: event.target.value })
                      }
                      inputProps={{
                        name: "category"
                      }}
                    >
                      {this.state.data.category.map(item => (
                        <MenuItem key={Math.random()} value={item.label}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Col>
                  <Col>
                    <InputLabel style={{ color: "white" }}>
                      <small>Status: </small>
                    </InputLabel>
                    <Select
                      style={{ width: "100%", color: "white" }}
                      value={this.state.status}
                      onChange={event =>
                        this.setState({ status: event.target.value })
                      }
                      inputProps={{
                        name: "status"
                      }}
                    >
                      {this.state.data.status.map(item => (
                        <MenuItem key={Math.random()} value={item.label}>
                          {item.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Col>
                  <Col className="pt-3">
                    <InputGroup>
                      <Input
                        placeholder="Cari Beasiswa"
                        color="black"
                        onKeyPress={event =>
                          event.key === "Enter" && alert("SOON")
                        }
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
                {this.state.dummyArr.map(() => (
                  <Row className="pb-3">
                    <Col className="col-sm-3">
                      <img
                        alt="..."
                        className="img-fluid shadow-lg"
                        src="https://upload.wikimedia.org/wikipedia/id/0/0b/Nutrifood.jpg"
                        style={{ cursor: "pointer" }}
                        onClick={() => alert("SOON")}
                      />
                    </Col>
                    <Col className="ml-1 mr-1">
                      <Row>
                        <a href="#!">{this.state.data.internship[0].title}</a>
                      </Row>
                      <Row>
                        <a href="#!">{this.state.data.internship[0].from}</a>
                      </Row>
                      <Row>
                        <a href="#!">{this.state.data.internship[0].type}</a>
                      </Row>
                      <Row>
                        <a href="#!">
                          {this.state.data.internship[0].location}
                        </a>
                      </Row>
                    </Col>
                    <Col className="col-sm-4">
                      <Row>
                        <small>Diposting 5 hari yang lalu</small>
                      </Row>
                      <Row className="mt-4">
                        <a href="#!">Selengkapnya</a>
                      </Row>
                    </Col>
                  </Row>
                ))}
              </CardBody>
            </Card>
          </Col>
          <Col className="col-sm-4">
            <Card>
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
            <Card>
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
