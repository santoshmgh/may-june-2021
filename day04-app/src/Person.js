import { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h2>Name: {this.props.name}</h2>
            <h4>Age: {this.props.age}</h4>
        </div>);
    }
}

export default Person;