import React from "react";
class App extends React.Component {
    constructor () {
        super()
        this.props = {
            thisisSelected :"add",
            onClick:[ ],
            children:  
        }
      }
    
  render() {
    return (
      <div className="Onglet">
          <button></button>
        
      </div>
    );
  }
}

export default App;