
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      activeTab :"add",
      items :[ ]
    }
  }
  // selectAdd=()=>

  render() {
    return (
      <div className="App">
     <h>Bakery</h>
     <onglet isSelected={this.state.activeTab} onClick={this.selectAdd}>add</onglet>
      </div>
    );
  }
}

export default App;