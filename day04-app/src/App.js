import './App.css';
import {Component} from 'react';
import Lifecycle from './Lifecycle';
import Person from './Person';

class App extends Component {
  render() {
    return (<div>
      <Person name="Sam" age="12"/>
      <hr/>
      <Person name="Ram" age="23"/>
      <hr/>
      <Person name="Mary" age="34"/>
    </div>);
  }
}

export default App;
