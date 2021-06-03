import './App.css';
import {Component} from 'react';
import Lifecycle from './Lifecycle';
import Person from './Person';

//Parent
class App extends Component {

  doSomething(arg) {
    console.log("Temperature of Chennai is", Math.random() * 50, arg);
  }

  doSomethingElse(arg) {
    console.log("Time is", new Date().toLocaleTimeString(), arg);
  }

  render() {
    return (<div>
      <Person name="Sam" age="12" something={this.doSomething} />
      <hr/>
      <Person name="Ram" age="23" something={this.doSomethingElse}/>
      <hr/>
      <Person name="Mary" something={this.doSomething}/>
    </div>);
  }
}

export default App;
