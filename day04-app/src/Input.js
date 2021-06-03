import {Component} from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
        //this.getTime = this.getTime.bind(this);
        //this.getTemperature = this.getTemperature.bind(this);
    }

    getTime() {
        let now = new Date().toLocaleTimeString();
        this.props.computeMessageHandler(now);
    }

    getTemperature(city) {
        console.log("getTemperature called", city);
    }

    render() {
        return (<div>
            <button onClick={this.getTime.bind(this)}>Get time</button>
            <button onClick={this.getTemperature.bind(this, "pune")}>Get temperature</button>    
        </div>);
    }
}
export default Input;