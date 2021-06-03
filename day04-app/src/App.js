import './App.css';
import {Component} from 'react';
import Lifecycle from './Lifecycle';
import Person from './Person';

class App extends Component {
  render() {
    return (<div>
      <Person/>
      <hr/>
      <Person/>
      <hr/>
      <Person/>
    </div>);
  }
}

export default App;
