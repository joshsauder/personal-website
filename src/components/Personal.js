import React, { Component } from 'react';
import '../App.css';
import { Jumbotron , Nav} from 'react-bootstrap';
import Slide from 'react-reveal';
//need running, travel, and osu football pic


class Personal extends Component {

    constructor(props){
        super(props)
        this.state = {show: "Running"}
    }

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
                               
                            </div>
                        </div>
                    </div>
                </div>
            )
        }else if(this.state.show === "Football"){
            interest = (
                <div className="tab-pane fade show active" id="Football" role="tabpanel">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="lead">
                                    As you can probably guess, I'm a a huge Ohio State Buckeye fan. I absolutely love watching and attending OSU football games.
                                </div>
                            </div>
                            <div className="col-md-4"> 
                                <div className="featurette-img-align">
                                
                                </div>
                            </div>
                        </div>
                    </div>
            )
        }else if(this.state.show === "Travel"){
            interest = (
                <div className="tab-pane fade show active" id="Travel" role="tabpanel">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="lead">
                                    Traveling and exploring new places has always been something I try and do on a normal basis. It forces me to get out of my confort zone and exposes me to new cuisines, and experiences. It also allows me to venture around and see various places and landmarks.
                                </div>
                            </div>
                            <div className="col-md-4"> 
                                <div className="featurette-img-align">
                                
                                </div>
                            </div>
                        </div>
                    </div>
            )
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