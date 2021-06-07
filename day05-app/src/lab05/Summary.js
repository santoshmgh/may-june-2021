import {Component} from 'react';

class Summary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {data} = this.props;
        if (data) {
            let {country, cases, recovered, death} = data;
            return (<div>
    
                Country: {country}<br/>
                Cases: {cases}<br/>
                Recovered: {recovered}<br/>
                Death: {death}<br/>
            </div>);            
        } else {
            return <div></div>;
        }

    }
}    

export default Summary;