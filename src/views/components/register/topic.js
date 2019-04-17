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
          <Col className="col-sm-3">
            <Card>
              <CardHeader>Dosen Pembimbing</CardHeader>
              <CardBody>
                <Row>
                  <CarouselTeacher />
                </Row>
                <div className="text-center mt-3">
                  <a href="#!" onClick={() => this.props.changeComponent(2)}>
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

const dataTeacher = [
  {
    src:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQEhAQEA8PDw8QEA8PDw0PDQ8NDg8PFREWFhURFRUYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0NFRAPFS0dFh0rKysrKy0tKystLSstLS0tLSsrLS0rNy0rKy0rKys3KystKystKysrLSsrKysrKysrK//AABEIALYBFQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xAA3EAACAgECAwYCCgEEAwAAAAABAgADEQQhBRIxBhMiQVFhcYEHFDJCUmKRobHBI3KCouEzQ9H/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EAB4RAQEAAgMBAQEBAAAAAAAAAAABAhEDITESQQRh/9oADAMBAAIRAxEAPwDQCD0jhB6QhHAmnGB5RH5B6R8RwIUPKPSEEHpCxCCyKj7sekcVj0koWEFhZEXdD0j90PSShY/LC6VjWPSGtY9ITiEkJoPdD0iNY9JLiMZlpAax6TP4jWNtpqNKHERsIGSyCQsolhhIWE0jA7ToO7B9DOYAnXdo0zSfYiciJiumHghDAgCEJGnpnAiDRWfYS8VEx+y1udOvttNYvI0kYDEragDEkZ9pV1D7S6GDxJcNLWksHLK3EesHStCaaasMSJWG8jSyR951l0iasjeOhGDKwtkYsMIsZGDARhiQrneFUhkGRrsC1/flP7RRuOLy2fFRHmbHWXp6YBHAhhYQWd3iiPEQEkKwVEKMLCCwgI4EjUMFhBY+IQgCVjYhGISKgtEeuHcu0CuVBwTCgmSqBpS148MuNKus+yYGOxkTw36wGlRncZTNT/CcSJ3XEVzW/wDpM4WYybwEIQgiEJHR2vY+z/ER6NN2cz2NfwuPcGdMFMKYnaVrm2lsVyJ6djKMPWCVVJmtra9pRpTJhDV5MJa95bqqhiveVFRKYlo3l1U3jhN4ZVq6ZJVX1llat4ddPiMiua7SU+JD6qY01OOaXPJ8G/qKZ01t2uI4EePOzzwLCNWIZkamBNHEYRCRUhG0GEx2gCFKPmCTGzIFd0kSGHY8jWVEhMEmMTBJhTMZX1PQwr7lUZZgo9WIH8zM1fGtOuQbVJ/KGYfqBAruN4DQRq63+zYh/wBwEJoRW1S5Vh7GcE4wT8T/ADPQLOh+E4LVDDuPzGZreABCEEQhMujqOxDeKwewM7ILOJ7Dn/Mw9VnfqsKgSuMaustqIJHWVGNradplUL4pva0bGY9Q8Uou11dJI1G8lr8pJaOkIrCnBhNXuJM67iM6nI2hAsu4j/ehOpyNozIeYbQINfTzcvtn+o0tXIdopkbEUbMU6uEOZFJCYKLvCpAYgYDNALyG0+Y3PiQc8EtBtMbIDPAzBzBsZaOsjkyCFKUNdrlQEKcsNttwD7y5qzhGOcYUzg69XaMsxA5twCOg33Pr/wByyANRqefvHd2dwQAGPQHqQJSepGfBzygEluuwmvp3V+qgn15QJr6TQ1sPsj5TN5NO+HDv9chYK13wVHkpGc/HMu6HWFfvgp+E4XA9p1b8Lq5ccgx7jM5vi/Z8Ahq9jkDGdvmJn77avD1uVfDZAI6ETh+JjFr/ABnWcLrZFZGGCGz1z19Pacxx1cXN8pa44+qQhAwRHmXRu9jnxqV9wRPSFaeX9mXxqKz74npXDit5sFZyazhx6GVU6uM9Yi4z1kRGDERvLpNoryuDmZK2oG6TTvHWYVgw3zjSbbtdq/hktlwx0lGk7Sw/SBJZqOmwgW6g7SFzsIFjQm092oO0C205G8ju+zAsfwgwLTMTFOo7H8Eo1VHe2ZLc7LgfdwcYMaQ2zsxZgZjzq8+xEwOaGBGKyKiJiJjsIuWAEUlFcIIIEMcLJu7hokLpCtcIDEmAgsN4VFqE5lZfUEftOGrGCyOM8jAKfLzBH8TvwJxfEnXv2rVSwNhHMNsN57ecspr9VtOwGSB0J9pp6PX0rjNi59AwmNxashO7UcxdyOYcy4AGcTnqeEkkgqVI+8zY3nPLHt6cM7rx6ZqOJ0BOc7L65nOaztLQx5a+ZsnchTiZlVGosqevwdxWyK5we936nr0GRJuHcG5SVJYgZ25CB8JjUdfq3yNMWgsfXlGcTlO0i4uz6qJ01ejWt3ZcjmwCpJwDgdJz/alfGh9RN/jy2ayYwhQBCEy2vcHbF1R/MJ6T2epbT23ud0uwRjqJ5honw6H0YfzPWKjkA+oH8SiVhvn1jMu8c+UVkqK94mDq/tfOb9wmFrhvILems2lgv4ZnadtpZVtpUGz7QC+0iDbGNzbQiw7ZX5Su7eGLvxy9ZWe4csDT0eusqB7ux6w2CQrYBPrFM6u8YEUDrQI+IUU6OAlEFhJFgsJGvwAXMMVxIJKBAArI5M0iPWBKseJY8ihg2dYeIN0oacXx+s06lXBwrWLbnGdvvD9h+s7PMocY4auoUDYMp8LHyz1Hzma3jlpzvHnCk483Dqw/CZSFuRkIhbyJ33+GZo8f4e4Sv7xRCpIHUCYNocAcuQfLywPOTP124rNLnC+O10d5XYhYtnmLYGWOcgSzp3DAHnPIw8Kh+bl2+yZhppbHznuOv3myR8zLumRkwxdXAYKwQYXl/uYsdpbPWmoyufcj9MTnO1a/+M/GdZqaQgRQc+HmPznM9ql8CH0abk6eXPLebmhCEEQxMtDrO4+Inq/D3zWh9VH8TyZZ6lwJwaKj+UCWDRIjsNo5IxBewYlRDcNpja9d5q3WbTI1zmBVS4CSjU7SoleZYrpgRi87xjaSJKlG5hJTCKagmOtexluurrCrr6witXXtFLdSRQOtijRzOrjElcZ4qo7zKmWSCAokggC0iaTNIXgTLHjJHkUoN8IwdQJRGDEZBqtXXUpex1rQdWYgD95x/FfpBqGV01bWEdbXHJX8h1Mmhq8W49VXetH2mCk2gdAp2x8fOV9dp0sIdW25dgOh9/3nD8E09uss1LB/855bfEcBxk8y58uoxN/gWms7/lt7xeUEsm4Lb7L8PeX/ABuddxcu4dSo57E5t98Mcbewlynum5AigBvsIBgfObN61OvIykjBBUKD+mDsRMnS8MWqtrVduSpHbmYqrEgH1GBHw392ztyY7RlLrhbl0DsqFcZAViB8sSPjHFqbqsKx5uYHBXE5vr16nf5mCRGnP9WwR7QgZUSGJn5a+lsT0Psw+aE9tp5mHM7zsBxJXDUMQHXxJ+ZfOT5WZOpwZItZIk4rElRdoVQejaZev086Ar1mZxAbQMfT1iWUUSGhMsZo1afeBTxvEi9ZfakZjrWMmVGelRyRDroOTLuAGhAeKEUK6OseXAMExSDUU7CPINK2UQ+qqf2ks6uMTVx3gVQ7JloyGTCQIsmEBmkLyZpC8IlrhQK4ZkVnca43RpApufBbPKgGWbE4njP0g2P4dOgrX8b+Jz8uglH6SdVzavl8q61UfE7mcmZpVjiPEbtQ2bbGsPlk7D4DpKdtvIABjJ6/CJlPqR8IxqHx9z1kGx2X1Xd6il1YqGYVsf8AVtg/Oeua7T4RnAyQjMCBjyzPCtMxRtvPp7Ebg/rifRmjuTUaMW53agMVIxklB19Z145stefaHtBbb3KCir/KeVWXmDBsgdc4O86jt01ek0NvOfG6mtQMDmdvP4AZMo6bRacXaW1XpXuX5jVX9knIJ2PTpOf+lyvVahxcOU6OsBVw+WBPViJn7k23ePLTzr60vTeMdUvoTBWgZ9ZMKQPKYZOjZGYYjNEDtKHzJtFqWrZbEYqynII9f/kqk9BJOkg9l7PcWXV0rYMBvs2J+F/MfDzmok8s7A8V7jUd2xxXd4T6B/I/1PU0mbG5dmPnM3XjaaJMz9b0MisrTfammnUTKqbDTRR+kCa0biD5xWv0gO+4lQn6iGTuJDY24ju24hD3nBjSLUtvFIi3wa3mopPrWn8S7mZHZRubS0H8uP0mxyzo5JKTDskdckeRo9ckEjQyQQGMiskpkTwCqhmR1SLil/d1Wv8AhRjn5bQPGu02p7zU3NnObG/TOJmEx9Q+ST5kkn9YJlWCMaImKBHYJ7b2Y4j3vDak8xStZI2O23WeJvPWPo+XOjG+PCdz02Jm+O6pe45rhnD7r7k/wCumk3A3klO95mYjP4sEzo6OG7Y7xLlI5Lk6DcYJG8yNbe7mqzUasIlqs4oqr5WZQ7L9o+yjp6y/wvVaOtuVO9Uj7zOW5s+s8/Lvb18OteuI4pwN6NT9XG/MwFTHoyk7fp5/CdrouxNBQgo9rKvisDspLZAIUDYdfP3knafTCzkvpwbKCLE/MAd1+YEt8L7VaflJFqrzg/432KP5k+4M9v8AHcMsb9evL/TjccuvHAdpuC/VWBUlqnzylh4lI6qfeYmdp1nbjiVbrXUjiwhmtdgQQMjA3HnOPdsD5zHPjjjnfnxnC2zsaep84eZEgJ+J8vQSUKOk4tJKnKlWGxUhs+4OZ7do7eZUb8SqfjkTxDk/SetdnNQzaeg5/wDUo/YSVrFssDKmqrJB6QmY56ypqmO8jSgKcN9oS+iL+Kc/c2Gl6p9pE21rQmOsGx69pSd9oFlmwl0bXbbE22iusUAHEoPbtC1F45esqbWrtR02imf9ZXA3ikE/YS3OkT2Zh+86Kcj9HVmaHHpYf3nWzbkJJK8hUyRjIoQ0nWVgZYUwCMieSEyJ4D1GY3be/k0ln5sJ+pmvUZyv0l3YoqX8Vv7BTEHltvnGBhP5yNTK0kUx4CRzAZp6b2cLLwi1lODy2YI9OYzzKem9kdK1uh7rm5AyuOnMDlz5TWHqVzzVG4aVc5CUuqj0Xx/3mZvBeNLzViwb7KH6g56Azv8ARdl2rPOzV8qK2AnMS3hYAb9PtGeQaivkZl6crMvzBx/UmUaxunrOk1CZ5GOCdsdAczhePUCq+xBuA2R0895R0vH7fArsCBgc5B5seWcRtZqO8ctnmzjxA5BxOWOOq68nJMoEmVyoPxG8kDSInB+M24kCR6b+vnG7wH8p9+kcjy8uvwMe5MjI6wJKrPIz03sjqB9VpyegYfoxnlVDA7Zx6A+XznXcA1TioKM+FiD89/7kqx3tmpX1lHV61d95z1l7n1lO61veZ23poarVrmJOJADrMYgmCymE02X4xtK13GCRtMorA5YRft4s585HZxJyMZkKViShV9IAfXH9TFJNvSKBvfRtb4bl91P7Ttczz76ObP8AJcvqoP6Gd+DNuVKxsSBrzCvaQZgSCwy3p7/KUQYdZ3gaZMjYyPvYBshUtZnF/SZbtQPIc7fPYCdcHnnn0j6rmuRPw15+bH/qIOPYyEHcyTMiIwfjK0mSPAQ9YYkCnsHYWofVKDn7nKR/vY5/eeQz3PsjpuTR6YYGTWhOB1yMzph6L9qbEdf4E8F7T6butVqE9LWI/wB3i/ufQjUMwPKJ439JfDGq1eWGO8rVvjjaXOdDiVUmTK2PlHsTHSRhmGfQ9ZyEoeJvEMeci7z23ghoE63eRG8kVpBzA9f1EdcDoYDXJg5HTOZ2HZ2vFXMfvsW+WAP6nNaLSvYeUDbzYjYD4zr9OgRVUdFAA+UzWsYsWN7SncJOzSvbMtoSJGVhtAJlRGRAMNpGYZog0fmkcWYB80Ulo1lSDD1lm65il0bT9greXUMPVD/M9E7yKKac6itOYEUUIKEseKFGWgloooDc08z7aHm1VufIIP8AiI8UQc+2JXsJ2iihpJX0kqx4pUC5n0XwqoCrTqOgrqH/AAEUU6YejpKUCjpPJ/ps0+fq1u2fHXj26xRTWXlSPKWXMblEUU4NBakGQtViKKFNyQkGI8UlHZaU+BNsbCTAx4ph1NmR2RRQiBpHFFKlA0iMUUMmjR4oCiiigf/Z",
    altText: "Husin Alatas",
    caption: "Husin Alatas"
  },
  {
    src: "http://fi.uhamka.ac.id/images/kuliahumum19052017.jpg",
    altText: "Akhiruddin Maddu",
    caption: "Akhiruddin Maddu"
  },
  {
    src: "http://fisika.ui.ac.id/images/Foto_Seminar/TonyS_PhD_gallery2.jpg",
    altText: "Tony Sumaryada",
    caption: "Tony Sumaryada"
  }
];

class CarouselTeacher extends React.Component {
  render() {
    return (
      <>
        <UncontrolledCarousel items={dataTeacher} />
      </>
    );
  }
}
