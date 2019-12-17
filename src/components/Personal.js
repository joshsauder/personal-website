import React, { Component } from 'react';
import '../App.css';
import {interests} from '../data/personal';
import { Jumbotron } from 'react-bootstrap';
//need running, travel, and osu football pic


class Personal extends Component {

    render() {
        return (
            <div id={this.props.id}>
                <Slide right>
                    <Jumbotron>
                        <div className="featurette row">
                            {interests.map(interest => {
                                <div>{interest}</div>
                            })}
                        </div>
                    </Jumbotron>
                </Slide>
            </div>
        )
    }
}