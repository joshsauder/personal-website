import React from 'react';
import InTheClear from '../InTheClear.png';
import ReactLogo from '../React.png';
import selfie from '../SelfImage.png'
import Navigation from './Navigation';

class AboutMe extends React.Component {
    render(){
        return(
            <div>
              <Navigation />
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="first-slide" src={selfie} alt="First slide" />
                    <div className="container">
                      <div className="carousel-caption">
                          <h5>Welcome!</h5>
                          <p>B.S. Computer Science Engineering - The Ohio State University</p>
                          <p>Software Engineer - Network Technologies Internation</p>
                          <p>Passion for Web and iOS Application Developemt</p>
                          <p>Running and Fitness Fanatic</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container marketing">
                <div className="row featurette">
                      <div className="col-md-7">
                          <h2 className="featurette-heading">In The Clear</h2>
                          <p className="lead">An iOS app built that allows the user to get weather information during there travel.</p>
                      </div>
                      <div className="col-md-5">
                          <img className="featurette-image img-fluid mx-auto" src={InTheClear}></img>
                      </div>
                </div>

                <hr className="featurette-divider"/>

                <div className="row featurette">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading">Personal Website</h2>
                        <p class="lead">A website I built using React that shows what I have done professionally and in my free time</p>
                    </div>
                    <div className="col-md-5">
                        <img className="featurette-image img-fluid mx-auto" src={ReactLogo}></img>
                    </div>
                </div>
              </div>
            </div>
        )
    }
}

export default AboutMe;
