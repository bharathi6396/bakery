import React from "react";
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