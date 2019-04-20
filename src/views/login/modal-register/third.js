import React from "react";
import { connect } from "react-redux";
import { Button, FormGroup, Modal, Form, Col, Row } from "reactstrap";

import { mapStateToProps, mapDispatchToProps } from "../actions";
class ThirdModal extends React.Component {
  render() {
    const formdata = this.props.biodataReducer;
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
                        this.props.onChange({
                          name: "profilePhoto",
                          value: e.target.files[0]
                        })
                      }
                    />
                  </Button>
                </Col>
                <Col>
                  <div className="mt-3">
                    {formdata.profilePhoto.name === ""
                      ? "No File Chosen"
                      : formdata.profilePhoto.name}
                  </div>
                </Col>
              </Row>
              <FormGroup />
            </FormGroup>
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
                onClick={this.props.next}
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThirdModal);
