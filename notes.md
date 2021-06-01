* You have a HTML page with CSS and JS code
* Browser loads this page
* Parse the HTML page and do few things
* DOM -> Document Object Model
* DOM is a w3c standard
* It's a specification

### React JS

* You write JS code and use DOM API, traditional way, which manipulates the real DOM tree
* In React JS, you write JS code and use React API, which manipulates the virtual DOM
* Virtual DOM is a proxy to real DOM or a data structure that React maintains
* __The changes made to the Virtual DOM are flushed out to the real DOM in an optimized way__

### Need to use React

* Performance
* React JS is a FrontEnd JavaScript framework
* Used to develop Single Page Application (SPA)
* Angular, Vue, Ember
* Component-based application development
* 17 is the latest version
* OO style and Functional style

### JSX
* JSX is a special syntax used to define UI in React
* JSX has a very strict syntax like XML
* Every start tag should have an end tag
* Every JSX element has one root element

### Component

* Every react application is made up of components
* Components can be written in OO style or Functional style
* In OO style every component is a class that extends React.Component

``` javascript

class XYZ extends React.Component {
	render() {
		return JSX;
	}
}


```

### State

* State represents the data in a component
* It's a plain JSON object
* You can store any data inside a state using __this.state = {...}__
* State is bound to UI
* When you modify the state UI gets refreshed.
* State can be modified by calling __setState({...})__ method
* Technically, calling __setState()__ triggers a call to __render()__ method and the JSX gets executed again.


















