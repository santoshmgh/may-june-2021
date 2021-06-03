import {Component} from 'react';
import Input from './Input';
import Output from './Output';

class Parent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Input/>
            <hr/>
            <Output/>
        </div>);
    }
}
export default Parent;