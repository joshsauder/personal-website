import React, {useState} from 'react'
import {Nav} from 'react-bootstrap'

function createList(item){
    return (<Nav.Link eventKey={item.eventKey} key={item.eventKey} className="navNotActive">{item.name}</Nav.Link>)
}
  
  
export default function ListItem({project}) {
    const [show, setShow] = useState(true)

    if(project.items.length > 1){
      return (
          <React.Fragment>
            <Nav.Link className="navNotActive dropdown-toggle" onClick={() => setShow(!show)}>{project.name}</Nav.Link>
            {show && 
                <div className="ml-3">
                {project.items.map(item => createList(item))}
                 </div>
            }
          </React.Fragment>
      )
    }else {
      return createList(project.items[0])
    }
}