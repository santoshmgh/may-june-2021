import { Component } from "react";

class Person extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <h2>Name: Ram</h2>
            <h4>Age: 12</h4>
        </div>);
    }
}

export default Person;