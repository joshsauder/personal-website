import React, { Component } from 'react';
import '../App.css';
import {interests} from '../data/personal';
import { Jumbotron } from 'react-bootstrap';
//need running, travel, and osu football pic


class Personal extends Component {

    render() {
        return (
            <div id={this.props.id}>
                <h1 className="text-center text-white">Interests</h1>
                <Slide right>
                    <Jumbotron>
                        <div className="featurette row">
                            {interests.map(interest => {
                                <div className="lead col-md-3">
                                    <p>{interest}</p>
                                </div>
                            })}
                        </div>
                    </Jumbotron>
                </Slide>
            </div>
        )
    }
}

export default Personal;