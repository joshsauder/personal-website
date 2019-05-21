import React from 'react';
import InTheClear from '../InTheClear.png';
import ReactLogo from '../React.png';
import Cover from '../CoverPhoto.png'
import Navigation from './Navigation';
import Jumbotron from 'react-bootstrap/Jumbotron';

class AboutMe extends React.Component {
    render(){
        return(
            <div>
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="first-slide" src={Cover} alt="First slide" />
                  </div>
                </div>
              </div>
              <div className="container marketing">
                <Jumbotron>
                  <div className="row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">In The Clear</h2>
                            <p className="lead">An iOS app built that allows the user to get weather information during there travel.</p>
                        </div>
                        <div className="col-md-5 featurette-img-align">
                            <img className="featurette-image img-fluid mx-auto" src={InTheClear}></img>
                        </div>
                  </div>
                </Jumbotron>

                <hr className="featurette-divider"/>
                <Jumbotron>
                  <div className="row featurette">
                      <div className="col-md-7 order-md-2">
                          <h2 className="featurette-heading">Personal Website</h2>
                          <p class="lead">A website I built using React that shows what I have done professionally and in my free time</p>
                      </div>
                      <div className="col-md-5 featurette-img-align">
                          <img className="featurette-image img-fluid mx-auto" src={ReactLogo}></img>
                      </div>
                  </div>
                </Jumbotron>
              </div>
            </div>
        )
    }
}

export default AboutMe;
