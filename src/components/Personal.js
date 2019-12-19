import React, { Component } from 'react';
import '../App.css';
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
            <h3>{props.title}</h3>
            {props.list.map(race => 
                <li>{race}</li>
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
                <div className="lead">Listed below is a list of the half and full marathons I've run so far!</div>
                <div class="row">
                    <CreateList class="col-md-6 lead" title="Full Marathons" list={PersonalList[0].fullList} />
                    <CreateList class="col-md-6 lead" title="Half Marathons" list={PersonalList[0].halfList} />
                </div>
            </PersonalTab>
            )
        }else if(this.state.show === "Football"){
            interest = <PersonalTab list={PersonalList[1]} image={OSUPic} />
        }else if(this.state.show === "Travel"){
            interest = <PersonalTab list={PersonalList[2]} image={BeachPic} />
        }
        return (
            <div id={this.props.id}>
                <h1 className="text-center text-white">Interests</h1>
                <div className="container marketing">
                    <Slide right>
                        <Jumbotron>
                            <div className="row">
                                <div className="col-3">
                                    <Nav className="flex-column" variant="pills" onSelect={selectedKey => this.setState({show: `${selectedKey}`})}>
                                        <Nav.Link eventKey="Running">Running</Nav.Link>
                                        <Nav.Link eventKey="Football">Watching OSU Football</Nav.Link>
                                        <Nav.Link eventKey="Travel">Travel</Nav.Link>
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
                </div>
            </div>
        )
    }
}

export default Personal;