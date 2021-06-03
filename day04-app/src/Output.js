import {Component} from 'react';

class Output extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<h1>
            {this.props.message}
        </h1>);
    }
}
export default Output;