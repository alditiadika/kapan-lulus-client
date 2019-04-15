import React from "react";
import { Button, FormGroup, Modal, Form, Alert } from "reactstrap";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import data from "./data-dummy.js";

export default class extends React.Component {
  state = {
    emailFocus: false,
    passwordFocus: false,
    data: data.department[0].topic,
    topic: "",
    warning: { status: false, message: "" }
  };
  validator = () => {
    // let university = isEmpty(this.state.formdata.university);
    // let yearOfEntry = isEmpty(this.state.formdata.yearOfEntry);
    // let department = isEmpty(this.state.formdata.department);
    // let cardID = isEmpty(this.state.formdata.cardID.name);
    // let studentID = isEmpty(this.state.formdata.studentID);
    // if (university || yearOfEntry || department || cardID || studentID) {
    //   this.setState({
    //     warning: { status: true, message: "Harap isi semua data" }
    //   });
    // } else {
    //   this.props.next();
    // }
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
            <h4 className="mb-0">Topik apa yang paling anda minati?</h4>
            <small style={{ color: "white" }}>
              Pilihlah 1 topik yang paling anda minati untuk penelitian tugas
              akhir. Topik ini akan membantu kami untuk menyajikan berita
              seputar penelitian yang sesuai dengan topik penelitian anda serta
              informasi lainnya
            </small>
          </div>
        </div>
        <div className="modal-body">
          <Form role="form">
            <FormGroup className="mb-3">
              <InputLabel style={{ color: "white" }}>
                <small>Pilih Topik Penelitian</small>
              </InputLabel>
              <Select
                style={{ width: "100%", color: "white" }}
                value={this.state.topic}
                onChange={event => this.setState({ topic: event.target.value })}
                inputProps={{
                  name: "topic"
                }}
              >
                {this.state.data.map(item => (
                  <MenuItem key={Math.random()} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
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
