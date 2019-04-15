import React from "react";
import { Button, FormGroup, Modal, Form, Alert, Input } from "reactstrap";
import InputLabel from "@material-ui/core/InputLabel";
import moment from "moment";
export default class extends React.Component {
  state = {
    emailFocus: false,
    passwordFocus: false,
    estimatedDate: moment()
      .add(6, "months")
      .format("YYYY-MM-DD"),
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
            <h4 className="mb-0">
              Selanjutnya, perkirakan tanggal kelulusan anda
            </h4>
            <small style={{ color: "white" }}>
              Kami akan menghitung mundur waktu kelulusan anda, dimulai dari
              anda menentukan tanggal tersebut
            </small>
          </div>
        </div>
        <div className="modal-body">
          <Form role="form">
            <InputLabel style={{ color: "white" }}>
              <small>Estimasi Kelulusan</small>
            </InputLabel>
            <div className="datepicker-container">
              <FormGroup>
                <Input
                  value={this.state.estimatedDate}
                  onChange={e => {
                    this.setState({
                      estimatedDate: e.target.value
                    });
                  }}
                  type="date"
                />
              </FormGroup>
            </div>
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
