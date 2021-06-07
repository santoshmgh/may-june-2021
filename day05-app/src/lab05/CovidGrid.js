import {Component} from 'react';

class CovidGrid extends Component {
    constructor(props) {
        super(props);
    }

    rowClicked(item, e) {
        this.props.rowClickedHandler(item);
    }

    getRows() {
        let {countries} = this.props;
        let rows = [];
        for (let i = 0; i < countries.length; i++) {
            let item = countries[i];
            let row = (<tr key={item.country} onMouseOver={this.rowClicked.bind(this, item)}>
                <td>{item.country}</td>
                <td>{item.cases}</td>
            </tr>);
            rows.push(row);
        }
        return rows;    
    }

    render() {
        return (<div>
            <table>
                <thead>
                    <tr>
                        <td>Country</td>
                        <td>Cases</td>
                    </tr>
                </thead>
                <tbody>
                    {this.getRows()}
                </tbody>
            </table>
        </div>);
    }
}

export default CovidGrid;