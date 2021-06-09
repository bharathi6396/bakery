import React from 'react';
import { Button } from 'react-bootstrap';
class Onglet extends React.Component{
    constructor () {
        super()
        this.state={}
    }
    render (){
        return (
              <div></div>
              variant="outline-dark"
              onClick =  {this.props.onClick}
              >
              {this.props.children}
              </Button>
        )
    }
}
export default Onglet