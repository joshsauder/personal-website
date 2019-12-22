import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css'
import { Jumbotron , Nav, Card} from 'react-bootstrap';
import Slide from 'react-reveal';
import PersonalList from '../data/personal.json';
import OSUPic from '../images/OSU.png';
import BeachPic from '../images/Beach.png';
import RunningPic from '../images/Running.png';
import SpecialOlympics from '../images/SpecialOlympics.png';

function PersonalTab(props){
    return (
        <div className="tab-pane fade show active" id={props.list.title} role="tabpanel">
            <div className="row">
                <div className="col-md-8">
                    <div className="lead">
                        {props.list.description}
                    </div>
                    <Card className="mt-3 mb-3 shadow">
                        <Card.Title className="chewy-font text-center mt-2">Fun Fact</Card.Title>
                        {props.list.funFact.map((item, index) =>                            
                            <div className="lead card-text" key={index}>{item}</div>
                        )}
                    </Card>
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
            interest = (<PersonalTab list={PersonalList[0]} image={RunningPic} />)
        }else if(this.state.show === "Watching OSU Football"){
            interest = (<PersonalTab list={PersonalList[2]} image={OSUPic} />)
        }else if(this.state.show === "Travel"){
            interest = (<PersonalTab list={PersonalList[3]} image={BeachPic} />)
        }else if (this.state.show === "Volunteer Work"){
            interest = (<PersonalTab list={PersonalList[1]} image={SpecialOlympics} />)
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
                                        {PersonalList.map(item => 
                                            <Nav.Link eventKey={item.title} className="navNotActive">{item.title}</Nav.Link>
                                        )}
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