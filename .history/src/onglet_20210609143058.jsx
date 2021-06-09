import React from "react";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.isSelected = this.isSelected.bind(this);
        this.onClick = this.onClick.bind(this);
        this.children = this.children.bind(this);
    }
    render() {
        return (
            <div className="Onglet">
                <button>{</button>

            </div>
        );
    }
}

export default App;