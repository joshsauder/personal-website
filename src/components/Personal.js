import React, { Component } from 'react';
import '../App.css';
import {Interests} from '../data/personal'
import { Jumbotron } from 'react-bootstrap';
import Slide from 'react-reveal';
//need running, travel, and osu football pic


class Personal extends Component {

    render() {
        return (
            <div id={this.props.id}>
                <h1 className="text-center text-white">Interests</h1>
                <div className="container marketing">
                    <Slide right>
                        <Jumbotron>
                            <div className="featurette row">
                                {Interests.map(interest => 
                                    <div className="lead col-md-3">
                                        <p>{interest}</p>
                                    </div>
                                )}
                            </div>
                        </Jumbotron>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Personal;