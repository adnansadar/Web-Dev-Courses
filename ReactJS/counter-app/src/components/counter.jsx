import React, { Component } from "react";

class Counter extends Component {
  //state is a property of React Component, its an object that includes any data the component needs
  state = {
    count: 1,
    tags: ["tag1", "tag2", "tag3"],
  };

  render() {
    //React.Fragment is a child of React, it is used instead of div to remove multiple div
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm ">Increment</button>
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;