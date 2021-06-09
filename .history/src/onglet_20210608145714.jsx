import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.isS = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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