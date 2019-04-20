import React from "react";
import { connect } from "react-redux";
import { Card, CardBody, Row, Col, Button, Container } from "reactstrap";

import { mapStateToProps } from "../dashboard/actions";
class FirstRegister extends React.Component {
  state = {
    isProfileComplete: false,
    isTeacherFound: false,
    isTopicFound: false,
    completingProfile: false,
    findingTeacher: false,
    findingTopic: false
  };
  componentDidMount() {
    if (this.props.indexRender === 1) {
      this.setState({ completingProfile: true });
    } else if (this.props.indexRender === 2) {
      this.setState({ findingTeacher: true });
    } else if (this.props.indexRender === 3)
      this.setState({ findingTopic: true });
  }
  render() {
    return (
      <Container style={{ marginTop: "100px" }}>
        <Row style={{ marginBottom: "20px" }}>
          <Col>
            Hai {this.props.auth.user.username} selamat datang, mulai gunakan
            KAPAN• Lulus dengan 3 langkah mudah:
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ paddingBottom: "5px" }}>
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
                  {this.state.isProfileComplete && "Lengkap"}
                  <br />
                  <p>
                    <Button
                      onClick={() => {
                        this.props.changeComponent(1);
                        // this.setState({
                        //   completingProfile: true,
                        //   findingTeacher: false,
                        //   findingTopic: false
                        // });
                      }}
                      disabled={this.state.completingProfile}
                    >
                      Lengkapi Profil
                    </Button>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card style={{ paddingBottom: "5px" }}>
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
                  {this.state.isTeacherFound && "Lengkap"}
                  <p>
                    <Button
                      onClick={() => {
                        this.props.changeComponent(2);
                        // this.setState({
                        //   completingProfile: false,
                        //   findingTeacher: true,
                        //   findingTopic: false
                        // });
                      }}
                      disabled={this.state.findingTeacher}
                    >
                      Temukan dosen pembimbing
                    </Button>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>

          <Col>
            <Card style={{ paddingBottom: "5px" }}>
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
                  {this.state.isTopicFound && "Lengkap"}
                  <p>
                    <Button
                      onClick={() => {
                        this.props.changeComponent(3);
                        // this.setState({
                        //   completingProfile: false,
                        //   findingTeacher: false,
                        //   findingTopic: true
                        // });
                      }}
                      disabled={this.state.findingTopic}
                    >
                      Info seputar topik penelitian
                    </Button>
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

export default connect(mapStateToProps)(FirstRegister);
