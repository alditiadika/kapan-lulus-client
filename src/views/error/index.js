import React from "react";
// reactstrap components
import { TabContent, TabPane, Card, CardBody, Button } from "reactstrap";

// import Footer from "../utils/footer";

export default class extends React.Component {
  state = {
    iconTabs: 1
  };
  render() {
    return (
      <Card
        style={{
          width: "50%",
          margin: "auto",
          marginTop: "100px",
          height: "auto",
          backgroundColor: "#27A7E4"
        }}
      >
        <CardBody>
          <TabContent
            className="tab-space"
            activeTab={"link" + this.state.iconTabs}
          >
            <TabPane tabId="link1">
              <h4>
                Page is'nt available, please check your URL correctly <br />
                <br />
                <Button
                  onClick={() => (window.location.href = "/dashboard")}
                  color="info"
                  size="lg"
                >
                  Go Back To Home
                </Button>
              </h4>
            </TabPane>
          </TabContent>
        </CardBody>
      </Card>
    );
  }
}
