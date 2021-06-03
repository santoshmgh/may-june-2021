import { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked() {
        //console.log(new Date().toLocaleTimeString());
        let message = `From: ` + this.props.name;
        this.props.something(message);
    }

    render() {
        return (<div>
            <h2>Name: {this.props.name}</h2>
            <h4>Age: {this.props.age}</h4>
            <button onClick={this.buttonClicked}>Click</button>
        </div>);
    }
}

export default Person;