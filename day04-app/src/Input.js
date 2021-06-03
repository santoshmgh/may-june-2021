import {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        this.getTime = this.getTime.bind(this);
    }

    getTime() {
        let now = new Date().toLocaleTimeString();
        this.props.computeMessageHandler(now);
    }

    render() {
        return (<div>
            <button onClick={this.getTime}>Get time</button>    
        </div>);
    }
}
export default Input;