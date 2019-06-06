import React, { Component } from 'react';
import Particles from 'react-particles-js';

var style = {
    width: "102%",
    height: "100%",
    position: "absolute",
    top: "7rem"
};


class ParticlesBackground extends Component {

    render() {
        return (
            <div style={style}>
            <Particles
                params={{
                    "particles": {
                    "number": {
                        "value": 85,
                        "density": {
                            "enable": true,
                            "value_area": 780 
                        }
                    },
                    "size": {
                        "value": 2.5,
                        random: true
                    }
                },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": false,
                                "mode": "repulse"
                            }
                        }
                    }
                }}/>
            </div>
            )
    }
}

export default ParticlesBackground;