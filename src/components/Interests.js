import React, {useState} from "react";
import "../App.css";
import "../styles/About.css";
import { Jumbotron, Nav, Card } from "react-bootstrap";
import Slide from "react-reveal";
import PersonalList from "../data/personal.json";
import OSUPic from "../images/OSU.png";
import BeachPic from "../images/Beach.png";
import RunningPic from "../images/Running.png";
import SpecialOlympics from "../images/SpecialOlympics.png";

/*
Renders each personal item
list - the personal list item, 
image - the applicable image
*/
const PersonalTab = ({ list, image }) => {
  return (
    <div className="tab-pane fade show active" id={list.title} role="tabpanel">
      <div className="row">
        <div className="col-lg-8">
          <div className="lead">{list.description}</div>
          <Card className="mt-3 mb-3 shadow">
            <Card.Title className="chewy-font text-center mt-2">
              Fun Fact
            </Card.Title>
            {list.funFact.map((item, index) => (
              <div className="lead card-text" key={index}>
                {item}
              </div>
            ))}
          </Card>
        </div>
        <div className="col-lg-4">
          <div className="featurette-img-align">
            <img
              className="featurette-image img-fluid mx-auto rounded"
              alt="Logo"
              src={image}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

function Personal({ id }) {
  const [show, setShow] = useState("Running");

  let interest;
  //Show the personal item selected
  if (show === "Running") {
    interest = <PersonalTab list={PersonalList[0]} image={RunningPic} />;
  } else if (show === "Ohio State Football") {
    interest = <PersonalTab list={PersonalList[1]} image={OSUPic} />;
  } else if (show === "Volunteer Work") {
    interest = <PersonalTab list={PersonalList[2]} image={SpecialOlympics} />;
  } else if (show === "Travel") {
    interest = <PersonalTab list={PersonalList[3]} image={BeachPic} />;
  }

  return (
    <div id={id}>
      <div className="container marketing">
        <Slide right>
          <Jumbotron className="shadow-lg">
            <h1 className="text-center chewy-font mb-4">Interests</h1>
            <div className="row">
              <div className="col-lg-3">
                <Nav
                  className="flex-column"
                  variant="pills"
                  defaultActiveKey="Running"
                  onSelect={(selectedKey) => setShow(`${selectedKey}`)}
                >
                  {PersonalList.map((item) => (
                    <Nav.Link
                      eventKey={item.title}
                      key={item.title}
                      className="navNotActive"
                    >
                      {item.title}
                    </Nav.Link>
                  ))}
                </Nav>
              </div>
              <div className="col-lg-9">
                <div className="tab-content" id="tabContent">
                  {interest}
                </div>
              </div>
            </div>
          </Jumbotron>
        </Slide>
        <hr className="featurette-divider" />
      </div>
    </div>
  );
}

export default Personal;
