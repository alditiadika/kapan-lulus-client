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
  Col,
  Row,
  Alert
} from "reactstrap";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";

import { mapStateToProps, mapDispatchToProps } from "../actions";
import { isEmpty } from "../../../validator";
import data from "./data-dummy.js";

class FirstModal extends React.Component {
  state = {
    emailFocus: false,
    passwordFocus: false,
    warning: { status: false, message: "" }
  };

  changeFormdata = (name, value, file = null) => {
    if (file !== null) {
      this.setState({ warning: { status: false } });
      this.props.onChange({ name: name, value: value, file: file });
    } else {
      this.setState({ warning: { status: false } });
      this.props.onChange({ name: name, value: value });
    }
  };

  validator = formdata => {
    let university = isEmpty(formdata.university);
    let yearOfEntry = isEmpty(formdata.yearOfEntry);
    let department = isEmpty(formdata.department);
    let cardPhoto = isEmpty(formdata.cardPhoto.name);
    let studentID = isEmpty(formdata.studentID);
    if (university || yearOfEntry || department || cardPhoto || studentID) {
      this.setState({
        warning: { status: true, message: "Harap isi semua data" }
      });
    } else {
      this.props.next();
    }
  };

  render() {
    const formdata = this.props.biodataReducer;
    return (
      <Modal isOpen={true} modalClassName="modal-black">
        <div
          style={{ backgroundColor: "#27A7E4", paddingBottom: "20px" }}
          className="modal-header justify-content-center"
        >
          <div className="text-muted text-center ml-auto mr-auto">
            <h4 className="mb-0">
              Hai {this.props.name}, Selamat datang di KAPAN• Lulus
            </h4>
            <small style={{ color: "white" }}>
              Mulai Dengan melengkapi Profil anda
            </small>
          </div>
        </div>
        <div className="modal-body">
          <Form role="form">
            <FormGroup className="mb-3">
              <InputLabel style={{ color: "white" }}>
                <small>Pilih Universitas</small>
              </InputLabel>
              <Select
                style={{ width: "100%", color: "white" }}
                value={formdata.university}
                onChange={event =>
                  this.changeFormdata("university", event.target.value)
                }
              >
                {data.university.map(item => (
                  <MenuItem key={Math.random()} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <InputLabel style={{ color: "white" }}>
                <small>Pilih Tahun Masuk</small>
              </InputLabel>
              <Select
                style={{ width: "100%", color: "white" }}
                value={formdata.yearOfEntry}
                onChange={event =>
                  this.changeFormdata("yearOfEntry", event.target.value)
                }
              >
                {data.yearOfEntry.map(item => (
                  <MenuItem key={Math.random()} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <InputLabel style={{ color: "white" }}>
                <small>Pilih Bidang Studi</small>
              </InputLabel>
              <Select
                style={{ width: "100%", color: "white" }}
                value={formdata.department}
                onChange={event =>
                  this.changeFormdata("department", event.target.value)
                }
              >
                {data.department.map(item => (
                  <MenuItem key={Math.random()} value={item.label}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormGroup>
            <FormGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.idMahasiswa
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-key-25 mr-2" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="ID Mahasiswa"
                  style={{ color: "white" }}
                  value={formdata.studentID}
                  onChange={event =>
                    this.changeFormdata(
                      "studentID",
                      event.target.value.toUpperCase()
                    )
                  }
                  onKeyPress={event =>
                    event.key === "Enter" && this.validator(formdata)
                  }
                  onFocus={e => this.setState({ idMahasiswa: true })}
                  onBlur={e => this.setState({ idMahasiswa: false })}
                />
              </InputGroup>
            </FormGroup>
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
                    Upload KTM
                    <input
                      type="file"
                      onChange={e =>
                        this.changeFormdata(
                          "cardPhoto",
                          e.target.files[0],
                          e.target.files
                        )
                      }
                    />
                  </Button>
                </Col>
                <Col>
                  <div className="mt-3">
                    {formdata.cardPhoto.name === ""
                      ? "No File Chosen"
                      : formdata.cardPhoto.name}
                  </div>
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
                onClick={this.props.close}
                className="my-4"
                color="info"
                type="button"
              >
                Batal
              </Button>
              <Button
                onClick={() => this.validator(formdata)}
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
)(FirstModal);
