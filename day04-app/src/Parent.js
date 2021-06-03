import {Component} from 'react';
import Input from './Input';
import Output from './Output';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        };
        this.computeMessage = this.computeMessage.bind(this);
    }
    computeMessage(time) {
        this.setState({
            message: `Current time is ${time}`
        });
    }

    render() {
        return (<div>
            <Input computeMessageHandler={this.computeMessage}/>
            <hr/>
            <Output message={this.state.message}/>
        </div>);
    }
}
export default Parent;