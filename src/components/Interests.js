import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css'
import { Jumbotron , Nav, Card} from 'react-bootstrap';
import Slide from 'react-reveal';
import PersonalList from '../data/personal.json';
import OSUPic from '../images/OSU.png';
import BeachPic from '../images/Beach.png';
import RunningPic from '../images/Running.png';

function PersonalTab(props){
    return (
        <div className="tab-pane fade show active" id={props.list.title} role="tabpanel">
            <div className="row">
                <div className="col-md-8">
                    <div className="lead">
                        {props.list.description}
                    </div>
                    {props.list.funFact &&
                    <Card className="mt-3 mb-3 shadow">
                        <Card.Title className="chewy-font text-center mt-2">Fun Fact</Card.Title>
                        {props.list.funFact.map((item, index) =>                            
                            <div className="lead card-text" key={index}>{item}</div>
                        )}
                    </Card>
                    }
                </div>
                <div className="col-md-4"> 
                    <div className="featurette-img-align">
                        <img className="featurette-image img-fluid mx-auto rounded" alt="Logo" src={props.image}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

class Personal extends Component {

    constructor(props){
        super(props)
        this.state = {show: "Running"}
    }

    render() {
        let interest;

        if(this.state.show === "Running"){
            interest = (
            <PersonalTab list={PersonalList[0]} image={RunningPic}>
                <div className="lead mt-2">Full Marathons - Columbus Nationwide Childrens Hospital Marathon - 2016, Toledo Glass City Marathon - 2015</div>
                <div className="lead mt-2">Half Marathons - Cap City Half Marathon - 2019, 2016, Jen Abby Memorial Half Marathon - 2014</div>
            </PersonalTab>
            )
        }else if(this.state.show === "Football"){
            interest = (
            <PersonalTab list={PersonalList[1]} image={OSUPic}>
                <div className="lead mt-2">As you can see by the picture on the right, I did travel to the Big House in 2018 to watch the Buckeyes win.</div>
            </PersonalTab>
            )
        }else if(this.state.show === "Travel"){
            interest = (
            <PersonalTab list={PersonalList[2]} image={BeachPic}>
            </PersonalTab>
            )
        }
        return (
            <div id={this.props.id}>
                <div className="container marketing">
                    <Slide right>
                        <Jumbotron>
                            <h1 className="text-center chewy-font mb-4">Interests</h1>
                            <div className="row">
                                <div className="col-md-3">
                                    <Nav className="flex-column" variant="pills" defaultActiveKey="Running" onSelect={selectedKey => this.setState({show: `${selectedKey}`})}>
                                        <Nav.Link eventKey="Running" className="navNotActive">Running</Nav.Link>
                                        <Nav.Link eventKey="Football" className="navNotActive">Watching OSU Football</Nav.Link>
                                        <Nav.Link eventKey="Travel" className="navNotActive">Travel</Nav.Link>
                                    </Nav>
                                </div>
                                <div className="col-md-9">
                                    <div className="tab-content" id="tabContent">
                                        {interest}
                                    </div>
                                </div>
                            </div>
                        </Jumbotron>
                    </Slide>
                    <hr className="featurette-divider"/>
                </div>
            </div>
        )
    }
}

export default Personal;