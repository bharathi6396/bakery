import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.isSelected = this.handleSubmit.bind(this);
        this.on = this.handleChange.bind(this);
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