
import React, { Component } from "react";
import ReactDOM from "react-dom";
import DropdownFilter from "./dropdown-filter";

class Filter extends Component {
  constructor() {
    super();
    this.state = {isToggleOn: true};
    this.toggleChild = this.toggleChild.bind(this);
    this.childContainer = React.createRef();
  }
 
  toggleChild = () => {
    console.log("toggleChild");
    this.childContainer.current.classList.toggle("hidden");
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };
  
  render() {
    return (
      <div className="wrapper-filter">
        <button className="styleBtn btn" onClick={this.toggleChild}> {this.state.isToggleOn ? 'Hide filters' : 'Show filters'}</button>
        <div ref={this.childContainer} className="childContainer hidden">
          <DropdownFilter/>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Filter/>, rootElement);
export default Filter;




        

