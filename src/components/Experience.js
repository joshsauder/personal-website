import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';
import { Jumbotron, Button } from 'react-bootstrap';
import jobModal from '../data/jobModal.json'
import '../styles/About.css';

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  return props.list.slice(0,4).map((item, index) =>
    <div className="lead col-md-3" key={index}>
      <h4 className="text-center">{item.title}</h4> 
      <p>{item.company}</p>
      <p>{item.date}</p>
      <Button variant="outline-secondary" onClick={() => {this.setState({[item.modal]: true})}}>More Info</Button>
    </div>
  )
}


class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            NTIModal: false,
            ODModal: false,
            CASModal: false,
            XPOModal: false
        };
    }

    render(){
        
        return (
            <div id={this.props.id}>
                <h1 className="text-center text-white">Work Experience</h1>
                <div className="container marketing">
                    <Slide right>
                        <Jumbotron>
                            <div className="featurette row">
                                <PopulateList list={jobModal} />
                            </div>
                        </Jumbotron>
                    </Slide>
                </div>
            </div>
        )
    }
}

export default Experience;