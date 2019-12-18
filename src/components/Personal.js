import React, { Component } from 'react';
import '../App.css';
import {Interests} from '../data/personal'
import { Jumbotron } from 'react-bootstrap';
import Slide from 'react-reveal';
//need running, travel, and osu football pic


class Personal extends Component {

    render() {
        let interest;

        if(this.state.show === "Running"){
            interest = (
                <div className="tab-pane fade show active" id="Running" role="tabpanel">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="lead">
                                I'm sort of a self-proclaimed running fanatic. I've run 2 full marathons, 3 half marathons, and numerous 5K and 10K races. If you're wondering what I'm doing after work, there's a good chance I'm out running.
                            </div>
                        </div>
                        <div>
                            LIST RACES
                        </div>
                        <div className="col-md-4"> 
                            <div className="featurette-img-align">
                                <img className="featurette-image img-fluid mx-auto rounded" alt="In The Clear Logo" src={InTheClear}></img>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else if(this.state.show === "Football"){

        }else if(this.state.show === "Travel"){

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
                                        {project}
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