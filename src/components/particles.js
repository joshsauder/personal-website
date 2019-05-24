import React, { Component } from 'react';
import Particles from 'react-particles-js';

var style = {
    width: "100%",
    height: "100%",
    position: "absolute"
};


class ParticlesBackground extends Component {

    render() {
        return (
            <div style={style}>
            <Particles
                params={{
                    "particles": {
                    "number": {
                    "value": 90
                    },
                    "size": {
                    "value": 2.5
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