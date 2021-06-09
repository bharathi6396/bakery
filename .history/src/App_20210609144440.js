
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {onglet} from 'react-bootstrap';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      activeTab :"add",
      items :[ ]
    }
  }
  selectAdd=()=>{
    this.setState=
  }

  render() {
    return (
      <div className="App">
     <h>Bakery</h>
     <onglet isSelected={this.state.activeTab} onClick={this.selectAdd}>add</onglet>
     <onglet isSelected={this.state.activeTab} onClick={this.selectList}>List</onglet>
     <onglet isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</onglet>
     <Add/>
     <List/>
     <Pay/>

      </div>
    );
  }
}

export default App;