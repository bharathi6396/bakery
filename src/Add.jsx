import React from 'react';
import { FormControl } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
class Add extends React.Component {
  constructor(){
    super()
    this.state={
      productName : " ",
      price : 1,
    }
    this.updateProductName = this.updateProductName.bind(this)
  }
   updateProductName = () => {

   }
    render() {
        return (
          <InputGroup className="mb-3" onChange={this.updateProductName}
          >
          <FormControl
            placeholder="Taper le nom de votre article"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Ajouter
          </Button>
        </InputGroup>
        )
    }
}
export default Add
// 