import React, {Component} from 'react';
import Slide from 'react-reveal/Slide';
import { Jumbotron } from 'react-bootstrap';
import jobModal from '../data/jobModal.json'

/*
Populates each Featurette with paragraph items 
*/
function PopulateList(props){
  console.log(props.list)
  return props.list.map((item, index) =>
    <div className="lead col-md-4" key={index}>
      <h3>{item.title}</h3> 
      <p>{item.company}</p>
      <p>{item.date}</p>
    </div>
  )
}


class Professional extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div id={this.props.id}>
                <h1 className="text-center text-white">Professional Experience</h1>
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

export default Professional;