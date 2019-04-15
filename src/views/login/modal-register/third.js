import React from "react";
import {
  Button,
  FormGroup,
  Modal,
  Form,
  Input,
  Col,
  Row,
  Alert
} from "reactstrap";

export default class extends React.Component {
  state = {
    profilePhoto: { name: "" },
    warning: { status: false, message: "" }
  };
  validator = () => {
    this.props.next();
  };
  render() {
    return (
      <Modal isOpen={true} modalClassName="modal-black">
        <div
          style={{ backgroundColor: "#27A7E4", paddingBottom: "20px" }}
          className="modal-header justify-content-center"
        >
          <div className="text-muted text-center ml-auto mr-auto">
            <h4 className="mb-0">Tambahkan Foto Profil Anda</h4>
            <small style={{ color: "white" }}>
              Foto akan mempermudah anda untuk memperoleh beasiswa penelitian &
              dosen pembimbing
            </small>
          </div>
        </div>
        <div className="modal-body">
          <Form role="form">
            <FormGroup>
              <Row>
                <Col className="col-sm-3">
                  <Button
                    color="info"
                    style={{
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      marginTop: "6px"
                    }}
                  >
                    Upload Foto
                    <input
                      type="file"
                      onChange={e =>
                        this.setState({
                          profilePhoto: e.target.files[0]
                        })
                      }
                    />
                  </Button>
                </Col>
                <Col>
                  <Input
                    style={{ color: "white" }}
                    placeholder="File Not Chosen"
                    value={this.state.profilePhoto.name}
                    readOnly
                    className="mt-2"
                  />
                </Col>
              </Row>
              <FormGroup />
            </FormGroup>
            {this.state.warning.status && (
              <Alert style={{ marginTop: "20px" }} color="danger">
                {this.state.warning.message}
              </Alert>
            )}
            <div className="text-right">
              <Button
                onClick={this.props.before}
                className="my-4"
                color="info"
                type="button"
              >
                Sebelumnya
              </Button>
              <Button
                onClick={this.validator}
                className="my-4"
                color="info"
                type="button"
              >
                Selanjutnya
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    );
  }
}
