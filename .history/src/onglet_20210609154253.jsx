import React from "react";
import Button from 'react-bootstrap/Button';
class App extends React.Component {
    constructor(props) {
        super(props);
       
    }
    render() {
        return (
            <div className="Onglet">
                <button>{this.props.children}</button>

            </div>
        );
    }
}

export default App;