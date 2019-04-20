import React from "react";
import { connect } from "react-redux";
import classnames from "classnames";
import {
  Button,
  FormGroup,
  Modal,
  Form,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Alert
} from "reactstrap";

import { isEmpty } from "../../../validator";
import { mapStateToProps } from "../actions";
class SecondModal extends React.Component {
  state = {
    emailFocus: false,
    passwordFocus: false,
    verificationCode: "",
    warning: { status: false, message: "" }
  };
  validator = () => {
    if (isEmpty(this.state.verificationCode)) {
      this.setState({
        warning: {
          status: true,
          message: "Harap isi semua data"
        }
      });
    } else if (
      this.state.verificationCode !== this.props.biodataReducer.verificationCode
    ) {
      this.setState({
        warning: {
          status: true,
          message: "Kode Verifikasi tidak cocok"
        }
      });
    } else {
      this.props.next();
    }
  };
  render() {
    return (
      <Modal isOpen={true} modalClassName="modal-black">
        <div
          style={{ backgroundColor: "#27A7E4", paddingBottom: "20px" }}
          className="modal-header justify-content-center"
        >
          <div className="text-muted text-center ml-auto mr-auto">
            <h4 className="mb-0">Verifikasi Keamanan</h4>
            <small style={{ color: "white" }}>
              Kami telah mengirimkan kode verifikasi melalui email anda
              <br />
              Masukkan kode tersebut untuk konfirmasi bahwa anda dapat mengakses
              email
            </small>
          </div>
        </div>
        <div className="modal-body">
          <Form role="form">
            <FormGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.passwordFocus
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-key-25 mr-2" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Masukkan kode verifikasi"
                  style={{ color: "white" }}
                  value={this.state.verificationCode}
                  onChange={e =>
                    this.setState({
                      verificationCode: e.target.value,
                      warning: { status: false }
                    })
                  }
                  onKeyPress={e => e.key === "Enter" && this.validator()}
                  onFocus={e => this.setState({ passwordFocus: true })}
                  onBlur={e => this.setState({ passwordFocus: false })}
                />
              </InputGroup>
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

export default connect(mapStateToProps)(SecondModal);
