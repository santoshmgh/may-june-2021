import { Component } from "react";

class Lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          message: ''  
        };
        this.buttonClicked = this.buttonClicked.bind(this);
    }
    //Called only ONCE after the component is rendered for the FIRST time
    //After the page is loaded you want to fire a request to the server and get some data
    //you write the code inside this function
    componentDidMount() {
        console.log("componentDidMount called");
    }

    //Called after every update to the state
    //called after render
    //CALLED after every state updation
    //you write your server calls after every UI update 
    //without making the user wait for the changes to appear on the screen
    componentDidUpdate() {
        console.log("componentDidUpdate called");  
    }

    //If you want to bypass calls to render when state gets updated, return false
    shouldComponentUpdate(obj, latest) {
        console.log("shouldComponentUpdate called", latest, this.state.message);
		return false;
    }


    buttonClicked() {
        console.log("buttonClicked called")
        this.setState({
            message: new Date().toLocaleTimeString()
        });
    }

    render() {
        console.log("render called");
        return (<div>
            <button onClick={this.buttonClicked}>Click</button>
            <h1>{ this.state.message }</h1>    
        </div>);
    }
}

export default Lifecycle;
