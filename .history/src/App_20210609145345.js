
import React from "react";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Add from './components/Add';
import List from './components/List';
import Pay from './components/Pay';
import Onglet from './components/Onglet';
import './App.css';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeTab: "add",
      items: []
    }
  }
  render() {
    return (
      <div className="App">
        <Onglet
          isSelected={null}
          onClick={null}><Add /></Onglet>
        <Onglet
          isSelected={null}
          onClick={null}><List /></Onglet>
        <Onglet
          isSelected={null}
          onClick={null}><Pay /></Onglet>
      </div>
    );
  }
}
export default App;

// class App extends React.Component {
//   constructor () {
//     super()
//     this.state = {
//       activeTab :"add",
//       items :[ ]
//     }
//   }
//   // selectAdd=()=>{
//   //   this.setState=
//   // }

//   render() {
//     return (
//       <div className="App">
//      <h>Bakery</h>
//      <onglet isSelected={this.state.activeTab} onClick={this.selectAdd}>add</onglet>
//      <onglet isSelected={this.state.activeTab} onClick={this.selectList}>List</onglet>
//      <onglet isSelected={this.state.activeTab} onClick={this.selectPay}>Pay</onglet>
//      <Add/>
//      <List/>
//      <Pay/>

//       </div>
//     );
//   }
// }

// export default App;