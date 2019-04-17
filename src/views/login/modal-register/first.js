import React from "react";
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

import { isEmpty } from "../../../validator";
import data from "./data-dummy.js";

export default class extends React.Component {
  state = {
    emailFocus: false,
    passwordFocus: false,
    data: data,
    formdata: {
      university: "",
      yearOfEntry: "",
      department: "",
      cardID: { name: "" },
      studentID: ""
    },
    warning: { status: false, message: "" }
  };
  changeFormdata = (event, mode = false) => {
    this.setState({ warning: { status: false } });
    if (mode) {
      this.setState({
        formdata: {
          ...this.state.formdata,
          studentID: event.target.value.toUpperCase()
        }
      });
    } else {
      this.setState({
        formdata: {
          ...this.state.formdata,
          [event.target.name]: event.target.value
        }
      });
    }
  };
  validator = () => {
    let university = isEmpty(this.state.formdata.university);
    let yearOfEntry = isEmpty(this.state.formdata.yearOfEntry);
    let department = isEmpty(this.state.formdata.department);
    let cardID = isEmpty(this.state.formdata.cardID.name);
    let studentID = isEmpty(this.state.formdata.studentID);
    if (university || yearOfEntry || department || cardID || studentID) {
      this.setState({
        warning: { status: true, message: "Harap isi semua data" }
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
                value={this.state.formdata.university}
                onChange={event => this.changeFormdata(event)}
                inputProps={{
                  name: "university"
                }}
              >
                {this.state.data.university.map(item => (
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
                value={this.state.formdata.yearOfEntry}
                onChange={event => this.changeFormdata(event)}
                inputProps={{
                  name: "yearOfEntry"
                }}
              >
                {this.state.data.yearOfEntry.map(item => (
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
                value={this.state.formdata.department}
                onChange={event => this.changeFormdata(event)}
                inputProps={{
                  name: "department"
                }}
              >
                {this.state.data.department.map(item => (
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
                  value={this.state.formdata.studentID}
                  onChange={e => this.changeFormdata(e, true)}
                  name="studentID"
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
                        this.changeFormdata({
                          ...e,
                          target: {
                            ...e.target,
                            name: "cardID",
                            value: e.target.files[0]
                          }
                        })
                      }
                    />
                  </Button>
                </Col>
                <Col>
                  <Input
                    style={{ color: "white" }}
                    placeholder="File Not Chosen"
                    value={this.state.formdata.cardID.name}
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
                onClick={this.props.close}
                className="my-4"
                color="info"
                type="button"
              >
                Batal
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
