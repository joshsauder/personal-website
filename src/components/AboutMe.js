import React from 'react';
import InTheClear from '../InTheClear.png';
import ReactLogo from '../React.png';

class AboutMe extends React.Component {
    render(){
        return(
            <div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">About Me</h5>
                        <ul class="list-group list-group-flush">
                            <li class="list-item">B.S. Computer Science Engineering - The Ohio State University</li>
                            <li class="list-item">Software Engineer - Network Technologies International</li>
                            <li class="list-item">Passion for Web and iOS Application Development</li>
                            <li class="list-item">Love Running Full/Half Marathons</li>
                        </ul>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">My Projects</h5>
                        <div class="row">
                            <div class="col textWithBlurredBg">
                                <img class="img-fluid rounded textOverImage" src={InTheClear}></img>
                                <h2>In The Clear</h2>
                                <h3>An iOS app built that allows the user to get weather information during there travel.</h3>
                            </div>
                            <div class="col textWithBlurredBg">
                                <img class="img-fluid rounded textOverImage" src={ReactLogo}></img>
                                <h2>Personal Website</h2>
                                <h3>A website I built using React that shows what I have done professionally and in my free time</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;