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
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown
} from "reactstrap";
import InputFile from "@material-ui/core/Input";

export default class extends React.Component {
  state = {
    emailFocus: false,
    passwordFocus: false
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
              Hai Administrator, Selamat datang di KAPAN• Lulus
            </h4>
            <small>Mulai Dengan melengkapi Profil anda</small>
          </div>
        </div>
        <div className="modal-body">
          <Form role="form">
            <FormGroup className="mb-3">
              <UncontrolledDropdown>
                <DropdownToggle
                  style={{ width: "100%" }}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Pilih Universitas
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem>
                    <i className="tim-icons icon-paper" />
                    IPB
                  </DropdownItem>
                  <DropdownItem>
                    <i className="tim-icons icon-bullet-list-67" />
                    UI
                  </DropdownItem>
                  <DropdownItem /*href='/' */>
                    <i className="tim-icons icon-image-02" />
                    ITB
                  </DropdownItem>
                  <DropdownItem>
                    <i className="tim-icons icon-single-02" />
                    ITS
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </FormGroup>
            <FormGroup>
              <UncontrolledDropdown>
                <DropdownToggle
                  style={{ width: "100%" }}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Pilih Tahun Masuk
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem>
                    <i className="tim-icons icon-paper" />
                    2014
                  </DropdownItem>
                  <DropdownItem>
                    <i className="tim-icons icon-bullet-list-67" />
                    2015
                  </DropdownItem>
                  <DropdownItem /*href='/' */>
                    <i className="tim-icons icon-image-02" />
                    2016
                  </DropdownItem>
                  <DropdownItem>
                    <i className="tim-icons icon-single-02" />
                    2017
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </FormGroup>
            <FormGroup>
              <UncontrolledDropdown>
                <DropdownToggle
                  style={{ width: "100%" }}
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  <i className="fa fa-cogs d-lg-none d-xl-none" />
                  Pilih Bidang Studi
                </DropdownToggle>
                <DropdownMenu className="dropdown-with-icons">
                  <DropdownItem>
                    <i className="tim-icons icon-paper" />
                    Fisika
                  </DropdownItem>
                  <DropdownItem>
                    <i className="tim-icons icon-bullet-list-67" />
                    Matematika
                  </DropdownItem>
                  <DropdownItem /*href='/' */>
                    <i className="tim-icons icon-image-02" />
                    Biologi
                  </DropdownItem>
                  <DropdownItem>
                    <i className="tim-icons icon-single-02" />
                    Kimia
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </FormGroup>
            <FormGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.idMahasiswa
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-key-25" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="ID Mahasiswa"
                  type="password"
                  onFocus={e => this.setState({ idMahasiswa: true })}
                  onBlur={e => this.setState({ idMahasiswa: false })}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup
                className={classnames("input-group-alternative", {
                  "input-group-focus": this.state.fileKTM
                })}
              >
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="tim-icons icon-key-25" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Upload KTM"
                  // type="file"
                  onFocus={e => this.setState({ fileKTM: true })}
                  onBlur={e => this.setState({ fileKTM: false })}
                />
              </InputGroup>
              <FormGroup />
            </FormGroup>
            <div className="text-right">
              <Button
                onClick={this.props.close}
                className="my-4"
                color="info"
                type="button"
              >
                Batal
              </Button>
              <Button className="my-4" color="info" type="button">
                Selanjutnya
              </Button>
            </div>
          </Form>
        </div>
      </Modal>
    );
  }
}
