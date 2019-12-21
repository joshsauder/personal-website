import React, { Component } from 'react';
import '../App.css';
import '../styles/About.css'
import { Jumbotron , Nav} from 'react-bootstrap';
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
                    {props.children}
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

function CreateList(props){
    return (
        <ul className={props.class}>
            <h4>{props.title}</h4>
            {props.list.map((race, index) => 
                <li key={index}>{race}</li>
            )}
        </ul>
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
                <div className="lead mt-2">Listed below is a list of the half and full marathons I've run so far!</div>
                <div className="row">
                    <CreateList class="col-md-6 lead" title="Full Marathons" list={PersonalList[0].fullList} />
                    <CreateList class="col-md-6 lead" title="Half Marathons" list={PersonalList[0].halfList} />
                </div>
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
                                <div className="col-3">
                                    <Nav className="flex-column" variant="pills" defaultActiveKey="Running" onSelect={selectedKey => this.setState({show: `${selectedKey}`})}>
                                        <Nav.Link eventKey="Running" className="navNotActive">Running</Nav.Link>
                                        <Nav.Link eventKey="Football" className="navNotActive">Watching OSU Football</Nav.Link>
                                        <Nav.Link eventKey="Travel" className="navNotActive">Travel</Nav.Link>
                                    </Nav>
                                </div>
                                <div className="col-9">
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